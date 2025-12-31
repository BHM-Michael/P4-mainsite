/**
 * Image Scanner Script for Patriots 4 Gallery
 * 
 * Run this script whenever you add new images:
 *   node generate-gallery.js
 * 
 * It scans the assets/images folder and creates gallery-data.json
 */

const fs = require('fs');
const path = require('path');

const IMAGES_DIR = './src/assets/images';
const OUTPUT_FILE = './src/assets/gallery-data.json';
const VALID_EXTENSIONS = ['.jpg', '.jpeg', '.png', '.gif', '.webp'];

// Folders to exclude from gallery (these are used elsewhere on the site)
const EXCLUDE_FOLDERS = ['hero', 'site_logo'];

function scanImagesFolder() {
  const galleryData = {
    categories: [],
    images: []
  };

  // Get all folders in images directory
  const folders = fs.readdirSync(IMAGES_DIR, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .filter(dirent => !EXCLUDE_FOLDERS.includes(dirent.name))
    .map(dirent => dirent.name);

  // Add "All" as first category
  galleryData.categories.push('All');

  // Process each folder
  folders.forEach(folder => {
    const folderPath = path.join(IMAGES_DIR, folder);
    const categoryName = formatCategoryName(folder);
    
    galleryData.categories.push(categoryName);

    // Get all images in this folder
    const files = fs.readdirSync(folderPath)
      .filter(file => {
        const ext = path.extname(file).toLowerCase();
        return VALID_EXTENSIONS.includes(ext);
      });

    // Add each image to the gallery
    files.forEach(file => {
      galleryData.images.push({
        src: `assets/images/${folder}/${file}`,
        alt: formatImageName(file),
        category: categoryName
      });
    });
  });

  // Write the JSON file
  fs.writeFileSync(OUTPUT_FILE, JSON.stringify(galleryData, null, 2));

  console.log('✅ Gallery data generated successfully!');
  console.log(`   Categories: ${galleryData.categories.length}`);
  console.log(`   Images: ${galleryData.images.length}`);
  console.log(`   Output: ${OUTPUT_FILE}`);
}

function formatCategoryName(folderName) {
  // Convert folder name to readable category
  // e.g., "usable_gallery" -> "Usable Gallery", "activities" -> "Activities"
  return folderName
    .split(/[-_]/)
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ');
}

function formatImageName(fileName) {
  // Convert file name to readable alt text
  // e.g., "turkey_hunt_2024.jpg" -> "Turkey Hunt 2024"
  const nameWithoutExt = path.parse(fileName).name;
  return nameWithoutExt
    .split(/[-_]/)
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ');
}

// Run the scanner
scanImagesFolder();
