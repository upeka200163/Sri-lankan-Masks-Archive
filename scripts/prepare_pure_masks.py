from PIL import Image, ImageOps, ImageEnhance
import numpy as np

def prepare_pure_transparent_facing_pair():
    # 1. Gini Raksha
    gini = Image.open("public/masks/gini-raksha.jpg").convert("RGBA")
    gini = ImageEnhance.Color(gini).enhance(1.25)
    gini = ImageEnhance.Contrast(gini).enhance(1.1)
    
    data_g = np.array(gini)
    r, g, b = data_g[:, :, 0], data_g[:, :, 1], data_g[:, :, 2]
    brightness_g = np.maximum(np.maximum(r, g), b)
    
    alpha_g = np.zeros_like(brightness_g, dtype=np.uint8)
    alpha_g[brightness_g >= 35] = 255
    alpha_g[(brightness_g >= 12) & (brightness_g < 35)] = ((brightness_g[(brightness_g >= 12) & (brightness_g < 35)] - 12) / 23 * 255).astype(np.uint8)
    data_g[:, :, 3] = alpha_g
    gini_clean = Image.fromarray(data_g, mode="RGBA")
    
    # Left Gini (facing right)
    gini_left = gini_clean.crop(gini_clean.getbbox())
    gini_left.save("public/decorations/hero-mask-left.png", "PNG")
    
    # Right Gini (facing left directly at the other)
    gini_right = ImageOps.mirror(gini_left)
    gini_right.save("public/decorations/hero-mask-right.png", "PNG")
    print("Saved pure transparent hero-mask-left.png and hero-mask-right.png")

prepare_pure_transparent_facing_pair()
