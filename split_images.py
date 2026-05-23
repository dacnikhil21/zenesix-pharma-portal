from PIL import Image
import os

def split_collage():
    collage_path = "collage.jpg" 
    
    if not os.path.exists(collage_path):
        print(f"Error: Could not find '{collage_path}'. Please save the uploaded image as 'collage.jpg' in this folder and try again.")
        return

    try:
        img = Image.open(collage_path)
    except Exception as e:
        print(f"Error opening image: {e}")
        return

    width, height = img.size
    
    # Grid is 3 columns by 2 rows
    cell_width = width // 3
    cell_height = height // 2

    # Map grid coordinates to product names
    products = [
        ("crandrop.jpg", 0, 0),       # Top Left
        ("flexivora.jpg", 1, 0),      # Top Middle
        ("histoheal.jpg", 2, 0),      # Top Right
        ("axogain.jpg", 0, 1),        # Bottom Left
        ("velytra-gel.jpg", 1, 1),    # Bottom Middle
        ("company-banner.jpg", 2, 1)  # Bottom Right
    ]

    os.makedirs("images", exist_ok=True)

    print("Splitting collage...")
    for filename, col, row in products:
        left = col * cell_width
        top = row * cell_height
        right = left + cell_width
        bottom = top + cell_height
        
        # Crop the cell
        cell_img = img.crop((left, top, right, bottom))
        
        # Save it
        save_path = os.path.join("images", filename)
        cell_img.save(save_path)
        print(f"Saved: {save_path}")

    print("\nSuccess! The images have been separated and saved to the 'images' folder.")
    print("They are now linked correctly in the index.html file.")

if __name__ == "__main__":
    split_collage()
