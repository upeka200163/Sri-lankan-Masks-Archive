import os
from PIL import Image, ImageOps, ImageFilter
import numpy as np

def make_transparent_mask(input_path, output_path, threshold=25, blur_radius=2):
    """
    Remove dark background from studio isolated 3D image to create a clean transparent PNG cutout.
    """
    if not os.path.exists(input_path):
        print(f"File not found: {input_path}")
        return
    
    img = Image.open(input_path).convert("RGBA")
    data = np.array(img)
    
    # Calculate brightness / max channel
    r, g, b, a = data[:, :, 0], data[:, :, 1], data[:, :, 2], data[:, :, 3]
    brightness = np.maximum(np.maximum(r, g), b)
    
    # Create smooth alpha channel based on brightness threshold
    alpha = np.zeros_like(brightness, dtype=np.uint8)
    
    # Smooth step transition for natural anti-aliased edge
    low_thresh = threshold
    high_thresh = threshold + 35
    
    mask_opaque = brightness >= high_thresh
    mask_trans = (brightness >= low_thresh) & (brightness < high_thresh)
    
    alpha[mask_opaque] = 255
    alpha[mask_trans] = ((brightness[mask_trans] - low_thresh) / (high_thresh - low_thresh) * 255).astype(np.uint8)
    
    data[:, :, 3] = alpha
    result = Image.fromarray(data, mode="RGBA")
    
    os.makedirs(os.path.dirname(output_path), exist_ok=True)
    result.save(output_path, "PNG")
    print(f"Saved transparent PNG to {output_path}")

# Generate transparent PNGs for footer decorations
make_transparent_mask("public/masks/naga-raksha.jpg", "public/decorations/transparent-naga.png", threshold=18)
make_transparent_mask("public/masks/gurulu-raksha.jpg", "public/decorations/transparent-gurulu.png", threshold=18)
make_transparent_mask("public/masks/gini-raksha.jpg", "public/decorations/transparent-gini.png", threshold=20)
make_transparent_mask("public/decorations/filigree-gold.jpg", "public/decorations/transparent-filigree.png", threshold=28)
