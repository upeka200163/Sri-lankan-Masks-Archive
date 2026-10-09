from PIL import Image, ImageOps, ImageEnhance
import numpy as np
import os

def generate_vibrant_angled_gini():
    input_path = "public/masks/gini-raksha.jpg"
    img = Image.open(input_path).convert("RGBA")
    
    # Enhance color vibrancy & contrast slightly for museum display
    enhancer = ImageEnhance.Color(img)
    img = enhancer.enhance(1.15)
    contrast_enhancer = ImageEnhance.Contrast(img)
    img = contrast_enhancer.enhance(1.08)
    
    data = np.array(img)
    
    r, g, b, a = data[:, :, 0], data[:, :, 1], data[:, :, 2], data[:, :, 3]
    brightness = np.maximum(np.maximum(r, g), b)
    
    # Precise alpha extraction
    low_thresh = 14
    high_thresh = 45
    
    alpha = np.zeros_like(brightness, dtype=np.uint8)
    mask_opaque = brightness >= high_thresh
    mask_trans = (brightness >= low_thresh) & (brightness < high_thresh)
    
    alpha[mask_opaque] = 255
    alpha[mask_trans] = ((brightness[mask_trans] - low_thresh) / (high_thresh - low_thresh) * 255).astype(np.uint8)
    
    data[:, :, 3] = alpha
    clean_png = Image.fromarray(data, mode="RGBA")
    
    # Save left mask
    out_left = "public/decorations/hero-gini-left.png"
    clean_png.save(out_left, "PNG")
    print(f"Updated {out_left}")
    
    # Save mirrored right mask facing inwards towards left
    clean_png_right = ImageOps.mirror(clean_png)
    out_right = "public/decorations/hero-gini-right.png"
    clean_png_right.save(out_right, "PNG")
    print(f"Updated {out_right}")

generate_vibrant_angled_gini()
