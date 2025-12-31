import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

interface NewsArticle {
  id: string;
  title: string;
  date: string;
  summary: string;
  content: string[];
  image?: string;
  featured: boolean;
}

@Component({
  selector: 'app-news',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <!-- Page Header -->
    <section class="page-header">
      <div class="container">
        <h1>News & Events</h1>
        <p>Stories from Patriots 4 and our veteran community</p>
      </div>
    </section>

    <!-- Featured Story -->
    <section class="section" *ngIf="featuredArticle">
      <div class="container">
        <div class="featured-story">
          <div class="featured-badge">Featured Story</div>
          <div class="featured-header">
            <div class="featured-image-wrapper" *ngIf="featuredArticle.image">
              <img [src]="featuredArticle.image" [alt]="featuredArticle.title">
            </div>
            <div class="featured-title">
              <h2>{{ featuredArticle.title }}</h2>
              <p class="story-date">{{ featuredArticle.date }}</p>
            </div>
          </div>
          <div class="featured-content">
            <p *ngFor="let paragraph of featuredArticle.content">{{ paragraph }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Past Stories -->
    <section class="section section-alt" *ngIf="pastArticles.length > 0">
      <div class="container">
        <h2>Past Stories</h2>
        <div class="stories-grid">
          <div class="story-card" *ngFor="let article of pastArticles">
            <div class="story-image" *ngIf="article.image">
              <img [src]="article.image" [alt]="article.title">
            </div>
            <div class="story-card-content">
              <p class="story-date">{{ article.date }}</p>
              <h3>{{ article.title }}</h3>
              <p class="story-summary">{{ article.summary }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Call to Action -->
    <section class="section cta-section">
      <div class="container text-center">
        <h2>Have a Story to Share?</h2>
        <p>
          If you've visited Patriots 4 and would like to share your experience, 
          we'd love to hear from you.
        </p>
        <a routerLink="/contact" class="btn btn-primary">Contact Us</a>
      </div>
    </section>
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

    .featured-story {
      background: var(--white);
      border-radius: 8px;
      padding: 40px;
      box-shadow: 0 4px 20px rgba(0,0,0,0.08);
      position: relative;
    }

    .featured-badge {
      position: absolute;
      top: -12px;
      left: 30px;
      background: var(--primary-gold);
      color: var(--primary-navy);
      padding: 5px 15px;
      font-size: 0.8rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 1px;
      border-radius: 3px;
      z-index: 10;
    }

    .featured-header {
      display: flex;
      align-items: center;
      gap: 30px;
      margin-bottom: 30px;
      padding-bottom: 30px;
      border-bottom: 1px solid var(--light-gray);
    }

    .featured-image-wrapper {
      flex-shrink: 0;
      width: 250px;
      height: 180px;
      border-radius: 8px;
      overflow: hidden;
      box-shadow: 0 4px 15px rgba(0,0,0,0.15);

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        display: block;
      }
    }

    .featured-title {
      h2 {
        color: var(--primary-navy);
        font-size: 2rem;
        margin-bottom: 0.5rem;
      }
    }

    .story-date {
      color: var(--primary-red);
      font-weight: 600;
      font-size: 0.9rem;
      margin-bottom: 0;
    }

    .featured-content {
      p {
        font-size: 1.05rem;
        line-height: 1.9;
        margin-bottom: 1.5rem;
        color: var(--dark-gray);

        &:last-child {
          margin-bottom: 0;
        }
      }
    }

    .stories-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
      gap: 30px;
      margin-top: 30px;
    }

    .story-card {
      background: var(--white);
      border-radius: 8px;
      overflow: hidden;
      box-shadow: 0 4px 15px rgba(0,0,0,0.08);
      transition: transform 0.3s ease, box-shadow 0.3s ease;

      &:hover {
        transform: translateY(-5px);
        box-shadow: 0 8px 25px rgba(0,0,0,0.12);
      }
    }

    .story-image {
      img {
        width: 100%;
        height: 200px;
        object-fit: cover;
        display: block;
      }
    }

    .story-card-content {
      padding: 25px;

      .story-date {
        margin-bottom: 0.5rem;
      }

      h3 {
        font-size: 1.3rem;
        margin-bottom: 1rem;
        color: var(--primary-navy);
      }

      .story-summary {
        color: var(--medium-gray);
        line-height: 1.7;
        margin-bottom: 0;
      }
    }

    .cta-section {
      background: var(--primary-navy);
      color: var(--white);

      h2 {
        color: var(--white);
      }

      p {
        max-width: 500px;
        margin: 0 auto 1.5rem;
        opacity: 0.9;
      }
    }

    @media (max-width: 768px) {
      .featured-story {
        padding: 30px 20px;
      }

      .featured-header {
        flex-direction: column;
        text-align: center;
      }

      .featured-image-wrapper {
        width: 200px;
        height: 140px;
      }

      .featured-title h2 {
        font-size: 1.5rem;
      }

      .stories-grid {
        grid-template-columns: 1fr;
      }
    }
  `]
})
export class NewsComponent {
  blobUrl = 'https://p4images.blob.core.windows.net/images/';

  articles: NewsArticle[] = [
    {
      id: 'vets-with-guitars-2024',
      title: 'Patriots 4 Hosts "Vets with Guitars" Weekend',
      date: 'December 2024',
      summary: 'Veterans gathered for a special weekend learning to use guitar and music as a therapeutic tool for managing PTSD and pain.',
      image: 'https://p4images.blob.core.windows.net/images/news/guitars_for_vets.jpg',
      content: [
        'Patriots 4 (P4) recently welcomed veterans for a special weekend event called "Vets with Guitars," where guests learned to use guitar and music as a therapeutic tool for managing PTSD and pain. Led by Kyle Stevens from Mannington, the veterans performed "America the Beautiful" while General Randy West recited a moving poem about a father who lost his son in war—a reminder that faith and fellowship can help heal even the deepest wounds. The weekend also included axe throwing and community barbecues, bringing veterans together in a spirit of camaraderie and support.',
        'P4 is a 354-acre retreat camp in St. George, West Virginia, founded in 2013 by Major General Randall "Randy" West, his wife Robin, and her brother and sister-in-law. After evaluating 25 potential locations across four states, they chose this site for its excellent hunting and fishing, proximity to Monongahela National Forest, and the welcoming patriotic community of Parsons. The camp operates entirely through donations and volunteer labor, with every penny going directly toward helping wounded veterans and their families.',
        'The retreat offers combat wounded veterans free stays twice a year for three days and two nights, with lodging, food, hunting and fishing licenses, and trophy mounting all provided at no cost. Four military-themed cabins honor each branch: Semper Fi (Marines), Hooah (Army), Anchors Away (Navy), and Wild Blue Yonder (Air Force). Future plans include a chapel with stained-glass windows representing each military branch, solar-powered mountaintop cabins for accessible hunting, and a large lodge to host groups of up to 45 guests.'
      ],
      featured: true
    }
  ];

  get featuredArticle(): NewsArticle | undefined {
    return this.articles.find(a => a.featured);
  }

  get pastArticles(): NewsArticle[] {
    return this.articles.filter(a => !a.featured);
  }
}
