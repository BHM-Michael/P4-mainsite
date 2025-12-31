import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <!-- Hero Section -->
    <section class="hero">
      <div class="hero-overlay"></div>
      <div class="container hero-content">
        <h1>Patriots 4</h1>
        <p class="tagline">Serving Those Who Served</p>
        <p class="hero-description">
          A non-profit organization committed to supporting combat wounded service members 
          and their families with free outdoor recreational facilities in the mountains of West Virginia.
        </p>
        <div class="hero-buttons">
          <a routerLink="/programs" class="btn btn-primary">Our Programs</a>
          <a routerLink="/contact" class="btn btn-outline hero-btn-outline">Plan Your Visit</a>
        </div>
      </div>
    </section>

    <!-- Aerial View Section -->
    <section class="section aerial-section">
      <div class="container">
        <div class="aerial-content">
          <div class="aerial-image">
            <img [src]="blobUrl + 'hero/drone_over_camp.jpg'" alt="Aerial view of Patriots 4 camp">
          </div>
          <div class="aerial-text">
            <h2>354 Acres of Freedom</h2>
            <p>
              Nestled in the mountains of St. George, West Virginia, Patriots 4 offers wounded veterans 
              and their families a peaceful retreat surrounded by nature. Our property features half a mile 
              on the Cheat River, half a mile on Clover Run trout stream, and is bordered by the 
              Monongahela National Forest.
            </p>
            <a routerLink="/about" class="btn btn-secondary">Learn Our Story</a>
          </div>
        </div>
      </div>
    </section>

    <!-- Welcome Section -->
    <section class="section section-alt welcome">
      <div class="container">
        <div class="welcome-content">
          <h2>Welcome to Patriots 4</h2>
          <p class="lead">
            Dear Wounded Heroes, Fellow Servicemen and Women, and Civilian Friends,
          </p>
          <p>
            Welcome to Patriots 4 (P4), a non-profit organization committed to supporting valiant combat 
            wounded service members and their families with assistance and facilities to enjoy well deserved 
            R&R in our great outdoors.
          </p>
          <p>
            As an outdoor recreational facility, P4 is specifically designed for combat wounded service members 
            and their families – a place to enjoy and take part at no cost in outdoor activities regardless of 
            the type of injury.
          </p>
          <p class="signature">
            <em>We are dedicated to giving back to those who have already sacrificed so much so that 
            "We the People" can remain free.</em>
          </p>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section class="section features">
      <div class="container">
        <h2 class="text-center">What We Offer</h2>
        <div class="features-grid">
          <div class="feature-card">
            <img [src]="blobUrl + 'cabins/anchors-away.jpg'" alt="Patriots 4 Cabin" class="feature-image" (error)="onImageError($event)">
            <div class="feature-content">
              <h3>Military-Themed Cabins</h3>
              <p>Wheelchair-accessible cabins named in honor of each military branch: Semper Fi, Hooah, 
              Anchors Away, Wild Blue Yonder, and Wild & Wonderful.</p>
              <a routerLink="/accommodations" class="btn btn-secondary">View Cabins</a>
            </div>
          </div>
          
          <div class="feature-card">
            <img [src]="blobUrl + 'activities/2023 success.jpg'" alt="Veterans activities" class="feature-image" (error)="onImageError($event)">
            <div class="feature-content">
              <h3>Hunting & Fishing</h3>
              <p>Turkey, deer, bear, and grouse hunting during WV seasons. Fish for trout, smallmouth bass, 
              and rock bass on our streams and the Cheat River.</p>
              <a routerLink="/programs" class="btn btn-secondary">Activities</a>
            </div>
          </div>
          
          <div class="feature-card">
            <img [src]="blobUrl + 'cabins/chapel.jpg'" alt="Patriots 4 Chapel" class="feature-image" (error)="onImageError($event)">
            <div class="feature-content">
              <h3>Peace & Reflection</h3>
              <p>Our chapel offers a quiet space for meditation, prayer, and renewal. We've baptized 24 
              people in the river and hosted vow renewals for veteran families.</p>
              <a routerLink="/about" class="btn btn-secondary">Learn More</a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Free Stay Section -->
    <section class="section free-stay">
      <div class="container">
        <div class="free-stay-content">
          <h2>Combat Wounded Veterans Stay Free</h2>
          <p class="lead">
            In recognition of the many sacrifices combat wounded service members have made, P4 offers 
            combat wounded service members (and their immediate family) the opportunity to stay 
            <strong>two times per year completely free of charge</strong>.
          </p>
          <div class="included-list">
            <h4>Included at No Cost:</h4>
            <ul>
              <li>3 days and 2 nights in a P4 cabin stocked with food</li>
              <li>Hunting, kayaking, fishing</li>
              <li>Bait/tackle, ammunition</li>
              <li>Processing of catches and kills</li>
              <li>Mounting of a WV trophy size catch or kill</li>
            </ul>
          </div>
          <p>Spouses and children of veterans killed in service may also stay for free.</p>
          <a routerLink="/contact" class="btn btn-primary">Reserve Your Stay</a>
        </div>
      </div>
    </section>

    <!-- Latest News Section -->
    <section class="section section-alt">
      <div class="container">
        <h2 class="text-center">Latest News</h2>
        <div class="news-preview">
          <div class="news-image">
            <img [src]="blobUrl + 'news/guitars_for_vets.jpg'" alt="Vets with Guitars event">
          </div>
          <div class="news-content">
            <span class="news-date">December 2024</span>
            <h3>Patriots 4 Hosts "Vets with Guitars" Weekend</h3>
            <p>
              Veterans gathered for a special weekend learning to use guitar and music as a therapeutic 
              tool for managing PTSD and pain. Led by Kyle Stevens from Mannington, the veterans performed 
              "America the Beautiful" while General Randy West recited a moving poem...
            </p>
            <a routerLink="/news" class="btn btn-outline">Read More</a>
          </div>
        </div>
      </div>
    </section>

    <!-- Donate Section -->
    <section class="section donate" id="donate">
      <div class="container text-center">
        <h2>Support Our Mission</h2>
        <p class="lead">
          Patriots 4 is a 501(c)(3) Non-Profit organization supported by tax-deductible donations. 
          Every penny we raise goes towards helping wounded veterans and their families.
        </p>
        <div class="donate-info">
          <h4>Mail Donations To:</h4>
          <p>
            Patriots 4<br>
            c/o MGen Randy West<br>
            10500 Hume Road<br>
            Marshall, VA 20115
          </p>
          <p class="mt-2"><em>Make checks payable to "Patriots 4"</em></p>
          <p class="mt-3">
            <strong>Questions about donations?</strong><br>
            <a href="mailto:randywest0782&#64;aol.com">randywest0782&#64;aol.com</a> | 
            <a href="tel:202-549-6828">(202) 549-6828</a>
          </p>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .hero {
      position: relative;
      min-height: 80vh;
      display: flex;
      align-items: center;
      background-image: url('https://p4images.blob.core.windows.net/images/hero/usaf emblem.jpg');
      background-size: cover;
      background-position: center;
    }

    .hero-overlay {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: linear-gradient(135deg, rgba(26, 46, 76, 0.85) 0%, rgba(26, 46, 76, 0.6) 100%);
    }

    .hero-content {
      position: relative;
      z-index: 1;
      color: var(--white);
      max-width: 800px;

      h1 {
        font-size: 4rem;
        color: var(--white);
        margin-bottom: 0.5rem;
      }

      .tagline {
        font-size: 1.5rem;
        color: var(--primary-gold);
        font-style: italic;
        margin-bottom: 1.5rem;
      }

      .hero-description {
        font-size: 1.2rem;
        line-height: 1.8;
        margin-bottom: 2rem;
        opacity: 0.95;
      }
    }

    .hero-buttons {
      display: flex;
      gap: 15px;
      flex-wrap: wrap;
    }

    .hero-btn-outline {
      border-color: var(--white);
      color: var(--white);

      &:hover {
        background-color: var(--white);
        color: var(--primary-navy);
      }
    }

    .aerial-section {
      padding: 0;
    }

    .aerial-content {
      display: grid;
      grid-template-columns: 1.2fr 1fr;
      gap: 0;
      align-items: stretch;
    }

    .aerial-image {
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        display: block;
      }
    }

    .aerial-text {
      padding: 60px 50px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      background: var(--light-cream);

      h2 {
        margin-bottom: 1rem;
      }

      p {
        margin-bottom: 1.5rem;
        line-height: 1.8;
      }
    }

    .welcome {
      .welcome-content {
        max-width: 800px;
        margin: 0 auto;
        text-align: center;

        .lead {
          font-size: 1.2rem;
          font-style: italic;
          color: var(--primary-navy);
        }

        .signature {
          margin-top: 2rem;
          font-size: 1.1rem;
          color: var(--primary-navy);
        }
      }
    }

    .features-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 30px;
      margin-top: 40px;
    }

    .feature-card {
      background: var(--white);
      border-radius: 8px;
      overflow: hidden;
      box-shadow: 0 4px 20px rgba(0,0,0,0.08);
      transition: transform 0.3s ease, box-shadow 0.3s ease;

      &:hover {
        transform: translateY(-5px);
        box-shadow: 0 8px 30px rgba(0,0,0,0.12);
      }

      .feature-image {
        width: 100%;
        height: 200px;
        object-fit: cover;
      }

      .feature-content {
        padding: 25px;
        text-align: center;

        h3 {
          font-size: 1.25rem;
          margin-bottom: 1rem;
        }

        p {
          color: var(--medium-gray);
          margin-bottom: 1.5rem;
          font-size: 0.95rem;
        }
      }
    }

    .free-stay {
      background: linear-gradient(135deg, var(--primary-red) 0%, #8b1a28 100%);
      color: var(--white);

      .free-stay-content {
        max-width: 800px;
        margin: 0 auto;
        text-align: center;

        h2 {
          color: var(--white);
        }

        .lead {
          font-size: 1.2rem;
          opacity: 0.95;
        }
      }

      .included-list {
        background: rgba(255,255,255,0.1);
        padding: 30px;
        border-radius: 8px;
        margin: 30px 0;
        text-align: left;
        display: inline-block;

        h4 {
          color: var(--primary-gold);
          margin-bottom: 1rem;
        }

        ul {
          list-style: none;

          li {
            padding: 8px 0;
            padding-left: 25px;
            position: relative;

            &:before {
              content: "✓";
              position: absolute;
              left: 0;
              color: var(--primary-gold);
              font-weight: bold;
            }
          }
        }
      }
    }

    .news-preview {
      display: grid;
      grid-template-columns: 300px 1fr;
      gap: 40px;
      align-items: center;
      background: var(--white);
      border-radius: 8px;
      overflow: hidden;
      box-shadow: 0 4px 20px rgba(0,0,0,0.08);
    }

    .news-image {
      img {
        width: 100%;
        height: 250px;
        object-fit: cover;
        display: block;
      }
    }

    .news-content {
      padding: 40px 40px 40px 0;

      .news-date {
        color: var(--primary-red);
        font-weight: 600;
        font-size: 0.9rem;
        text-transform: uppercase;
        letter-spacing: 1px;
      }

      h3 {
        margin: 0.5rem 0 1rem;
        font-size: 1.5rem;
      }

      p {
        color: var(--medium-gray);
        line-height: 1.7;
        margin-bottom: 1.5rem;
      }
    }

    .donate {
      background: var(--primary-navy);
      color: var(--white);

      h2 {
        color: var(--white);
      }

      .lead {
        max-width: 700px;
        margin: 0 auto 2rem;
        opacity: 0.95;
      }

      .donate-info {
        background: rgba(255,255,255,0.1);
        padding: 40px;
        border-radius: 8px;
        display: inline-block;

        h4 {
          color: var(--primary-gold);
          margin-bottom: 1rem;
        }

        a {
          color: var(--primary-gold);

          &:hover {
            color: var(--white);
          }
        }
      }
    }

    @media (max-width: 900px) {
      .features-grid {
        grid-template-columns: 1fr;
      }

      .aerial-content {
        grid-template-columns: 1fr;
      }

      .news-preview {
        grid-template-columns: 1fr;
      }

      .news-content {
        padding: 30px;
      }

      .hero-content h1 {
        font-size: 2.5rem;
      }
    }
  `]
})
export class HomeComponent {
  blobUrl = 'https://p4images.blob.core.windows.net/images/';

  onImageError(event: any) {
    event.target.src = 'https://via.placeholder.com/400x300?text=Image+Not+Found';
  }
}
