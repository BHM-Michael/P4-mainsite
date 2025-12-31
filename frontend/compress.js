const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const inputDir = './src/assets/images';
const quality = 50;

async function processDir(dir) {
  const files = fs.readdirSync(dir);
  
  for (const file of files) {
    const fullPath = path.join(dir, file);
    
    if (fs.statSync(fullPath).isDirectory()) {
      await processDir(fullPath);
    } else if (/\.(jpg|jpeg)$/i.test(file)) {
      try {
        const data = await sharp(fullPath)
          .jpeg({ quality })
          .toBuffer();
        fs.writeFileSync(fullPath, data);
        console.log(`Compressed: ${fullPath}`);
      } catch (err) {
        console.error(`Error: ${fullPath}`, err.message);
      }
    } else if (/\.png$/i.test(file)) {
      try {
        const data = await sharp(fullPath)
          .png({ quality })
          .toBuffer();
        fs.writeFileSync(fullPath, data);
        console.log(`Compressed: ${fullPath}`);
      } catch (err) {
        console.error(`Error: ${fullPath}`, err.message);
      }
    }
  }
}

processDir(inputDir).then(() => console.log('Done!'));