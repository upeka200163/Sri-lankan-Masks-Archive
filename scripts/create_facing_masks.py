from PIL import Image, ImageOps, ImageEnhance
import numpy as np

def create_facing_masks():
    # 1. Gini Raksha / Gurulu Raksha
    gini_img = Image.open("public/masks/gini-raksha.jpg").convert("RGBA")
    
    # Increase contrast and vibrancy
    gini_img = ImageEnhance.Color(gini_img).enhance(1.2)
    gini_img = ImageEnhance.Contrast(gini_img).enhance(1.1)
    
    data_gini = np.array(gini_img)
    r, g, b, a = data_gini[:, :, 0], data_gini[:, :, 1], data_gini[:, :, 2], data_gini[:, :, 3]
    brightness = np.maximum(np.maximum(r, g), b)
    
    # Smooth clean alpha extraction
    low_thresh = 15
    high_thresh = 45
    alpha = np.zeros_like(brightness, dtype=np.uint8)
    mask_opaque = brightness >= high_thresh
    mask_trans = (brightness >= low_thresh) & (brightness < high_thresh)
    alpha[mask_opaque] = 255
    alpha[mask_trans] = ((brightness[mask_trans] - low_thresh) / (high_thresh - low_thresh) * 255).astype(np.uint8)
    data_gini[:, :, 3] = alpha
    
    left_mask = Image.fromarray(data_gini, mode="RGBA")
    
    # Save Left Mask
    left_mask.save("public/decorations/mask-facing-right.png", "PNG")
    print("Saved public/decorations/mask-facing-right.png")
    
    # Right Mask: Flipped so it directly looks at the left mask
    right_mask = ImageOps.mirror(left_mask)
    right_mask.save("public/decorations/mask-facing-left.png", "PNG")
    print("Saved public/decorations/mask-facing-left.png")
    
    # Also create Gurulu Raksha pair if needed
    gurulu_img = Image.open("public/masks/gurulu-raksha.jpg").convert("RGBA")
    data_gurulu = np.array(gurulu_img)
    r, g, b = data_gurulu[:, :, 0], data_gurulu[:, :, 1], data_gurulu[:, :, 2]
    brightness_g = np.maximum(np.maximum(r, g), b)
    alpha_g = np.zeros_like(brightness_g, dtype=np.uint8)
    alpha_g[brightness_g >= 40] = 255
    alpha_g[(brightness_g >= 15) & (brightness_g < 40)] = ((brightness_g[(brightness_g >= 15) & (brightness_g < 40)] - 15) / 25 * 255).astype(np.uint8)
    data_gurulu[:, :, 3] = alpha_g
    
    gurulu_png = Image.fromarray(data_gurulu, mode="RGBA")
    # Gurulu already looks towards the right, so mirrored looks towards the left
    gurulu_facing_right = gurulu_png
    gurulu_facing_left = ImageOps.mirror(gurulu_png)
    gurulu_facing_right.save("public/decorations/gurulu-facing-right.png", "PNG")
    gurulu_facing_left.save("public/decorations/gurulu-facing-left.png", "PNG")
    print("Saved Gurulu facing masks")

create_facing_masks()
