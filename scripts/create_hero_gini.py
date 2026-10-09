from PIL import Image, ImageOps
import numpy as np
import os

def create_hero_gini_masks():
    input_path = "public/masks/gini-raksha.jpg"
    img = Image.open(input_path).convert("RGBA")
    data = np.array(img)
    
    # Calculate brightness / max channel for alpha cutout
    r, g, b, a = data[:, :, 0], data[:, :, 1], data[:, :, 2], data[:, :, 3]
    brightness = np.maximum(np.maximum(r, g), b)
    
    # Alpha mask with smooth edge
    low_thresh = 18
    high_thresh = 50
    
    alpha = np.zeros_like(brightness, dtype=np.uint8)
    mask_opaque = brightness >= high_thresh
    mask_trans = (brightness >= low_thresh) & (brightness < high_thresh)
    
    alpha[mask_opaque] = 255
    alpha[mask_trans] = ((brightness[mask_trans] - low_thresh) / (high_thresh - low_thresh) * 255).astype(np.uint8)
    
    data[:, :, 3] = alpha
    result_left = Image.fromarray(data, mode="RGBA")
    
    # Left mask (facing slightly right/center)
    out_left = "public/decorations/hero-gini-left.png"
    result_left.save(out_left, "PNG")
    print(f"Saved {out_left}")
    
    # Right mask (flipped horizontally so they face each other looking inward)
    result_right = ImageOps.mirror(result_left)
    out_right = "public/decorations/hero-gini-right.png"
    result_right.save(out_right, "PNG")
    print(f"Saved {out_right}")

create_hero_gini_masks()
