import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';

interface GalleryImage {
  src: string;
  alt: string;
  category: string;
}

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  template: `
    <!-- Page Header -->
    <section class="page-header">
      <div class="container">
        <h1>Photo Gallery</h1>
        <p>Memories from Patriots 4</p>
      </div>
    </section>

    <!-- Loading State -->
    <section class="section" *ngIf="loading">
      <div class="container text-center">
        <p>Loading gallery...</p>
      </div>
    </section>

    <!-- Gallery Content -->
    <section class="section" *ngIf="!loading">
      <div class="container">
        <!-- Filter Buttons -->
        <div class="filter-buttons">
          <button 
            *ngFor="let cat of categories" 
            (click)="filterBy(cat)"
            [class.active]="activeFilter === cat"
            class="filter-btn">
            {{ cat }}
            <span class="count">({{ getCategoryCount(cat) }})</span>
          </button>
        </div>

        <!-- Image Count -->
        <p class="image-count">Showing {{ filteredImages.length }} photos</p>

        <!-- Gallery Grid -->
        <div class="gallery-grid">
          <div 
            class="gallery-item" 
            *ngFor="let image of filteredImages; let i = index"
            (click)="openLightbox(i)">
            <img [src]="image.src" [alt]="image.alt" loading="lazy" (error)="onImageError($event)">
            <div class="gallery-overlay">
              <span>{{ image.alt }}</span>
            </div>
          </div>
        </div>

        <!-- Empty State -->
        <div class="empty-state" *ngIf="filteredImages.length === 0">
          <p>No images found in this category.</p>
        </div>
      </div>
    </section>

    <!-- Lightbox -->
    <div class="lightbox" *ngIf="lightboxOpen" (click)="closeLightbox($event)">
      <button class="lightbox-close" (click)="closeLightbox($event)">×</button>
      <button class="lightbox-prev" (click)="prevImage($event)">‹</button>
      <button class="lightbox-next" (click)="nextImage($event)">›</button>
      <div class="lightbox-content">
        <img [src]="currentImage?.src" [alt]="currentImage?.alt">
        <p class="lightbox-caption">
          {{ currentImage?.alt }}
          <span class="lightbox-counter">{{ currentIndex + 1 }} / {{ filteredImages.length }}</span>
        </p>
      </div>
    </div>
  `,
  styles: [`
    .page-header {
      background: linear-gradient(135deg, var(--primary-navy) 0%, #2c4a6e 100%);
      padding: 80px 0;
      color: var(--white);

      h1 {
        color: var(--white);
        margin-bottom: 0.5rem;
      }

      p {
        font-size: 1.2rem;
        opacity: 0.9;
      }
    }

    .filter-buttons {
      display: flex;
      justify-content: center;
      gap: 10px;
      flex-wrap: wrap;
      margin-bottom: 20px;
    }

    .filter-btn {
      padding: 10px 20px;
      border: 2px solid var(--primary-navy);
      background: transparent;
      color: var(--primary-navy);
      font-weight: 600;
      font-size: 0.85rem;
      border-radius: 30px;
      cursor: pointer;
      transition: all 0.3s ease;

      .count {
        font-weight: 400;
        opacity: 0.7;
        margin-left: 3px;
      }

      &:hover, &.active {
        background: var(--primary-navy);
        color: var(--white);
      }
    }

    .image-count {
      text-align: center;
      color: var(--medium-gray);
      margin-bottom: 30px;
      font-size: 0.9rem;
    }

    .gallery-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
      gap: 15px;
    }

    .gallery-item {
      position: relative;
      border-radius: 8px;
      overflow: hidden;
      cursor: pointer;
      aspect-ratio: 4/3;
      background: var(--light-gray);

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: transform 0.3s ease;
      }

      &:hover {
        img {
          transform: scale(1.05);
        }

        .gallery-overlay {
          opacity: 1;
        }
      }
    }

    .gallery-overlay {
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      padding: 15px;
      background: linear-gradient(transparent, rgba(0,0,0,0.8));
      color: var(--white);
      opacity: 0;
      transition: opacity 0.3s ease;

      span {
        font-weight: 600;
        font-size: 0.9rem;
      }
    }

    .empty-state {
      text-align: center;
      padding: 60px 20px;
      color: var(--medium-gray);
    }

    .lightbox {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(0,0,0,0.95);
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 2000;
      padding: 20px;
    }

    .lightbox-content {
      max-width: 90%;
      max-height: 90vh;
      display: flex;
      flex-direction: column;
      align-items: center;

      img {
        max-width: 100%;
        max-height: 80vh;
        object-fit: contain;
        border-radius: 4px;
      }
    }

    .lightbox-close {
      position: absolute;
      top: 20px;
      right: 30px;
      background: none;
      border: none;
      color: var(--white);
      font-size: 3rem;
      cursor: pointer;
      line-height: 1;
      z-index: 10;

      &:hover {
        color: var(--primary-gold);
      }
    }

    .lightbox-prev,
    .lightbox-next {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      background: rgba(255,255,255,0.1);
      border: none;
      color: var(--white);
      font-size: 3rem;
      cursor: pointer;
      padding: 20px 15px;
      transition: background 0.3s ease;

      &:hover {
        background: rgba(255,255,255,0.2);
      }
    }

    .lightbox-prev {
      left: 20px;
    }

    .lightbox-next {
      right: 20px;
    }

    .lightbox-caption {
      color: var(--white);
      margin-top: 20px;
      font-size: 1rem;
      text-align: center;
    }

    .lightbox-counter {
      display: block;
      font-size: 0.85rem;
      opacity: 0.7;
      margin-top: 5px;
    }

    @media (max-width: 768px) {
      .gallery-grid {
        grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
        gap: 10px;
      }

      .filter-btn {
        padding: 8px 15px;
        font-size: 0.8rem;
      }

      .lightbox-prev,
      .lightbox-next {
        font-size: 2rem;
        padding: 15px 10px;
      }

      .lightbox-prev {
        left: 10px;
      }

      .lightbox-next {
        right: 10px;
      }
    }
  `]
})
export class GalleryComponent implements OnInit {
  blobBaseUrl = 'https://p4images.blob.core.windows.net/images';
  
  // Folders to scan (these become categories)
  // Exclude 'hero' and 'site logo' as they're not for gallery
  foldersToScan = ['gallery', 'activities', 'cabins', 'people', 'extras', 'misc', 'news'];
  
  categories: string[] = ['All'];
  images: GalleryImage[] = [];
  loading = true;
  activeFilter = 'All';
  
  // Lightbox
  lightboxOpen = false;
  currentIndex = 0;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.loadAllImages();
  }

  async loadAllImages() {
    this.loading = true;
    
    for (const folder of this.foldersToScan) {
      try {
        await this.loadFolderImages(folder);
      } catch (err) {
        console.error(`Error loading ${folder}:`, err);
      }
    }
    
    // Build categories from what we found
    const uniqueCategories = [...new Set(this.images.map(img => img.category))];
    this.categories = ['All', ...uniqueCategories];
    
    this.loading = false;
  }

  loadFolderImages(folder: string): Promise<void> {
    return new Promise((resolve, reject) => {
      // Azure Blob Storage list API
      const listUrl = `${this.blobBaseUrl}?restype=container&comp=list&prefix=${folder}/`;
      
      this.http.get(listUrl, { responseType: 'text' }).subscribe({
        next: (xmlData) => {
          // Parse XML response
          const parser = new DOMParser();
          const xml = parser.parseFromString(xmlData, 'text/xml');
          const blobs = xml.querySelectorAll('Blob');
          
          const categoryName = this.formatCategoryName(folder);
          
          blobs.forEach(blob => {
            const name = blob.querySelector('Name')?.textContent;
            if (name && this.isImageFile(name)) {
              this.images.push({
                src: `${this.blobBaseUrl}/${name}`,
                alt: this.formatImageName(name),
                category: categoryName
              });
            }
          });
          
          resolve();
        },
        error: (err) => {
          console.error(`Failed to list ${folder}:`, err);
          resolve(); // Continue even if one folder fails
        }
      });
    });
  }

  isImageFile(filename: string): boolean {
    const ext = filename.toLowerCase();
    return ext.endsWith('.jpg') || ext.endsWith('.jpeg') || 
           ext.endsWith('.png') || ext.endsWith('.gif') || 
           ext.endsWith('.webp');
  }

  formatCategoryName(folder: string): string {
    return folder
      .split(/[-_]/)
      .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(' ');
  }

  formatImageName(filepath: string): string {
    // Get just the filename from the path
    const filename = filepath.split('/').pop() || filepath;
    return filename
      .replace(/\.[^.]+$/, '') // Remove extension
      .replace(/[-_]/g, ' ')   // Replace dashes/underscores with spaces
      .replace(/\b\w/g, c => c.toUpperCase()); // Capitalize words
  }

  get filteredImages(): GalleryImage[] {
    if (this.activeFilter === 'All') {
      return this.images;
    }
    return this.images.filter(img => img.category === this.activeFilter);
  }

  get currentImage(): GalleryImage | null {
    return this.filteredImages[this.currentIndex] || null;
  }

  getCategoryCount(category: string): number {
    if (category === 'All') return this.images.length;
    return this.images.filter(img => img.category === category).length;
  }

  filterBy(category: string) {
    this.activeFilter = category;
    this.currentIndex = 0;
  }

  openLightbox(index: number) {
    this.currentIndex = index;
    this.lightboxOpen = true;
    document.body.style.overflow = 'hidden';
  }

  closeLightbox(event: Event) {
    if (event.target === event.currentTarget || (event.target as HTMLElement).classList.contains('lightbox-close')) {
      this.lightboxOpen = false;
      document.body.style.overflow = 'auto';
    }
  }

  prevImage(event: Event) {
    event.stopPropagation();
    this.currentIndex = this.currentIndex > 0 
      ? this.currentIndex - 1 
      : this.filteredImages.length - 1;
  }

  nextImage(event: Event) {
    event.stopPropagation();
    this.currentIndex = this.currentIndex < this.filteredImages.length - 1 
      ? this.currentIndex + 1 
      : 0;
  }

  onImageError(event: any) {
    event.target.src = 'https://via.placeholder.com/400x300?text=Image+Not+Found';
  }
}
