# Patriots 4 Website

**Serving The Ones Who Serve**

An Angular 17 static website for Patriots 4, a 501(c)(3) non-profit organization supporting combat wounded service members and their families.

## Project Structure

```
patriots4-angular/
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── header/
│   │   │   ├── footer/
│   │   │   ├── home/
│   │   │   ├── about/
│   │   │   ├── accommodations/
│   │   │   ├── programs/
│   │   │   └── contact/
│   │   ├── app.component.ts
│   │   └── app.routes.ts
│   ├── assets/
│   │   └── images/
│   ├── index.html
│   ├── main.ts
│   └── styles.scss
├── angular.json
├── package.json
├── tsconfig.json
└── staticwebapp.config.json
```

## Local Development

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run the development server:
   ```bash
   npm start
   ```

3. Open http://localhost:4200 in your browser

## Build for Production

```bash
npm run build:prod
```

Output will be in `dist/patriots4-website/browser/`

## Deploy to Azure Static Web Apps

### Option 1: Azure Portal (Easiest)

1. Go to Azure Portal → Create a resource → Static Web App
2. Fill in:
   - **Name:** patriots4-website
   - **Region:** East US 2 (or closest to your users)
   - **Deployment source:** Other (for manual deployment)
3. After creation, go to the resource
4. Download the deployment token from **Settings → Manage deployment token**
5. Use Azure CLI or GitHub Actions to deploy

### Option 2: Azure CLI

1. Install Azure CLI and login:
   ```bash
   az login
   ```

2. Create the Static Web App:
   ```bash
   az staticwebapp create \
     --name patriots4-website \
     --resource-group YourResourceGroup \
     --location "eastus2"
   ```

3. Build the project:
   ```bash
   npm run build:prod
   ```

4. Deploy:
   ```bash
   az staticwebapp upload \
     --name patriots4-website \
     --resource-group YourResourceGroup \
     --app-location "dist/patriots4-website/browser"
   ```

### Option 3: GitHub Actions (Recommended for CI/CD)

1. Push this code to a GitHub repository
2. In Azure Portal, create Static Web App with GitHub as deployment source
3. Select your repository and branch
4. Azure will automatically create a GitHub Actions workflow
5. Set build configuration:
   - **App location:** `/`
   - **Output location:** `dist/patriots4-website/browser`

## Custom Domain Setup (patriotsfour.org)

1. In Azure Portal, go to your Static Web App
2. Navigate to **Settings → Custom domains**
3. Click **Add**
4. Enter: `www.patriotsfour.org`
5. Copy the CNAME value provided
6. In GoDaddy DNS:
   - Add CNAME record: `www` → `<your-app>.azurestaticapps.net`
7. Back in Azure, click **Validate**
8. Repeat for apex domain (`patriotsfour.org`):
   - You'll need to add a TXT record for verification
   - Then add an ALIAS or ANAME record (or use GoDaddy forwarding to www)

## Adding Images

Place images in `src/assets/images/` folder:
- `hero-bg.jpg` - Hero section background (recommended: 1920x1080)
- `cabin-*.jpg` - Individual cabin photos
- `logo.png` - Organization logo

## Contact Form

The contact form currently uses `mailto:` for simplicity. For a more robust solution, consider:
- [Formspree](https://formspree.io/) - Free tier available
- [EmailJS](https://www.emailjs.com/) - Free tier available
- Azure Functions for backend processing

## Colors (Brand Guide)

```scss
--primary-navy: #1a2e4c;    // Main headers, footer
--primary-red: #b22234;     // CTA buttons, accents
--primary-gold: #c9a227;    // Highlights, taglines
--accent-green: #2d5a27;    // Nature/outdoor accents
```

## License

© 2024 Patriots 4, Inc. All rights reserved.
