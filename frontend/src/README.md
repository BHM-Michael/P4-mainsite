# Patriots 4 - Dynamic Gallery Update

This update makes the gallery automatically scan your images folder and display all photos organized by category.

## How It Works

1. Your folder structure in `assets/images/` defines the categories
2. Run the script to generate a JSON file listing all images
3. The gallery component reads the JSON and displays everything

## Installation

### Step 1: Copy Files

1. Copy `gallery.component.ts` to:
   ```
   frontend/src/app/components/gallery/gallery.component.ts
   ```

2. Copy `generate-gallery.js` to:
   ```
   frontend/generate-gallery.js
   ```

### Step 2: Organize Your Images

Put your images in folders inside `frontend/src/assets/images/`:

```
frontend/src/assets/images/
├── hero/              (excluded from gallery - used on homepage)
├── site_logo/         (excluded from gallery)
├── cabins/            → becomes "Cabins" category
├── activities/        → becomes "Activities" category
├── events/            → becomes "Events" category
├── people/            → becomes "People" category
├── usable_gallery/    → becomes "Usable Gallery" category
├── news/              → becomes "News" category
└── (any other folder) → becomes a category
```

### Step 3: Generate Gallery Data

Open a terminal in your `frontend` folder and run:

```bash
node generate-gallery.js
```

This creates `src/assets/gallery-data.json` with all your images.

### Step 4: Push to GitHub

```bash
git add .
git commit -m "Update gallery with all images"
git push
```

## Adding New Images Later

Whenever you add new images:

1. Put them in the appropriate folder in `src/assets/images/`
2. Run `node generate-gallery.js`
3. Commit and push

## Customization

### Exclude Folders from Gallery

Edit `generate-gallery.js` and modify this line:

```javascript
const EXCLUDE_FOLDERS = ['hero', 'site_logo'];
```

### Change Category Names

The script automatically converts folder names to readable names:
- `usable_gallery` → "Usable Gallery"
- `activities` → "Activities"
- `turkey_hunt_2024` → "Turkey Hunt 2024"

If you want custom names, you can edit the `gallery-data.json` file manually after generation.
