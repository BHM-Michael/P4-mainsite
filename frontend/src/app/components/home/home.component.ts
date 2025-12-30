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
        <p class="tagline">Serving The Ones Who Serve</p>
        <p class="hero-description">
          A non-profit organization committed to supporting combat wounded service members 
          and their families with free outdoor recreational facilities in the mountains of West Virginia.
        </p>
        <div class="hero-buttons">
          <a routerLink="/programs" class="btn btn-primary">Our Programs</a>
          <a href="#donate" class="btn btn-outline hero-btn-outline">Donate Now</a>
        </div>
      </div>
    </section>

    <!-- Welcome Section -->
    <section class="section welcome">
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
          <p>
            Activities include camping (either in personal campers or one of our five cabins on the property), 
            hiking, fishing, kayaking, tubing, photography, hunting, and relaxation.
          </p>
          <p class="signature">
            <em>We are dedicated to giving back to those who have already sacrificed so much so that 
            "We the People" can remain free.</em>
          </p>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section class="section section-alt features">
      <div class="container">
        <h2 class="text-center">What We Offer</h2>
        <div class="features-grid">
          <div class="feature-card">
            <div class="feature-icon">🏠</div>
            <h3>5 Military-Themed Cabins</h3>
            <p>Wheelchair-accessible cabins named in honor of each military branch: Semper Fi, Hooah, 
            Anchors Away, Wild Blue Yonder, and Wild & Wonderful.</p>
            <a routerLink="/accommodations" class="btn btn-secondary">View Cabins</a>
          </div>
          
          <div class="feature-card">
            <div class="feature-icon">🎯</div>
            <h3>Adaptive Equipment</h3>
            <p>Including our Huntmaster – a wheelchair accessible, solar charged, hydraulic hunting platform 
            that rises up to 25 feet, plus track wheelchairs for fishing.</p>
            <a routerLink="/programs" class="btn btn-secondary">Learn More</a>
          </div>
          
          <div class="feature-card">
            <div class="feature-icon">🏔️</div>
            <h3>Outdoor Activities</h3>
            <p>Fishing, hunting, kayaking, hiking, and more on our property featuring 1/2 mile on the Cheat River 
            and 1/2 mile on Clover Run trout stream.</p>
            <a routerLink="/programs" class="btn btn-secondary">Activities</a>
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

    <!-- Location Section -->
    <section class="section section-alt location">
      <div class="container">
        <h2 class="text-center">Our Location</h2>
        <div class="location-content">
          <div class="location-text">
            <p>
              Patriots 4 is located in St. George, West Virginia, north of Monongahela National Forest 
              and just 180 miles outside Washington DC.
            </p>
            <h4>Property Features:</h4>
            <ul>
              <li>1/2 mile on the Cheat River</li>
              <li>1/2 mile on Clover Run trout stream</li>
              <li>Bordered on the west and north by the Monongahela National Forest</li>
              <li>Majestic mountains ideal for kayaking, hiking, hunting and fishing</li>
            </ul>
            <h4>Nearby Attractions:</h4>
            <p>Canaan Valley, Blackwater Falls, Elkins, Thomas, The Purple Fiddle, 
            The Smallest Church in 48 States</p>
          </div>
          <div class="location-address">
            <div class="address-card">
              <h4>Visit Us</h4>
              <p>
                <strong>Patriots 4</strong><br>
                28 Veterans Lane<br>
                Parsons, WV 26287
              </p>
              <p class="directions">
                At the intersection of State Road 72 and State Road 38, 
                6 miles north of Parsons, WV
              </p>
            </div>
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
          Your generosity enables combat wounded service members to visit P4 free of charge.
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
      background: linear-gradient(135deg, var(--primary-navy) 0%, #2c4a6e 100%);
      background-image: url('/assets/images/hero-bg.jpg');
      background-size: cover;
      background-position: center;
    }

    .hero-overlay {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: linear-gradient(135deg, rgba(26, 46, 76, 0.9) 0%, rgba(26, 46, 76, 0.7) 100%);
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
      padding: 40px 30px;
      border-radius: 8px;
      text-align: center;
      box-shadow: 0 4px 20px rgba(0,0,0,0.08);
      transition: transform 0.3s ease, box-shadow 0.3s ease;

      &:hover {
        transform: translateY(-5px);
        box-shadow: 0 8px 30px rgba(0,0,0,0.12);
      }

      .feature-icon {
        font-size: 3rem;
        margin-bottom: 1rem;
      }

      h3 {
        font-size: 1.25rem;
        margin-bottom: 1rem;
      }

      p {
        color: var(--medium-gray);
        margin-bottom: 1.5rem;
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

    .location-content {
      display: grid;
      grid-template-columns: 2fr 1fr;
      gap: 50px;
      margin-top: 40px;
    }

    .location-text {
      h4 {
        margin-top: 1.5rem;
        color: var(--primary-navy);
      }

      ul {
        list-style: none;
        margin: 1rem 0;

        li {
          padding: 8px 0;
          padding-left: 25px;
          position: relative;

          &:before {
            content: "•";
            position: absolute;
            left: 0;
            color: var(--primary-gold);
            font-weight: bold;
            font-size: 1.5rem;
            line-height: 1;
          }
        }
      }
    }

    .address-card {
      background: var(--white);
      padding: 30px;
      border-radius: 8px;
      box-shadow: 0 4px 20px rgba(0,0,0,0.08);
      border-left: 4px solid var(--primary-gold);

      h4 {
        color: var(--primary-navy);
        margin-bottom: 1rem;
      }

      .directions {
        margin-top: 1rem;
        font-size: 0.9rem;
        color: var(--medium-gray);
        font-style: italic;
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

      .location-content {
        grid-template-columns: 1fr;
      }

      .hero-content h1 {
        font-size: 2.5rem;
      }
    }
  `]
})
export class HomeComponent {}
