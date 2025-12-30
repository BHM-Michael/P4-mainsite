import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-accommodations',
  standalone: true,
  imports: [CommonModule],
  template: `
    <!-- Page Header -->
    <section class="page-header">
      <div class="container">
        <h1>Accommodations</h1>
        <p>Military-themed, wheelchair-accessible cabins in the heart of West Virginia</p>
      </div>
    </section>

    <!-- Cabins Overview -->
    <section class="section">
      <div class="container">
        <p class="intro">
          P4 has five wheelchair-accessible cabins named in honor of the military branches. 
          Each cabin features a fully functional kitchen with stove, microwave, refrigerator, 
          dishes, pans and coffee makers. Picnic tables and outdoor grills are accessible to all, 
          and the General Store adjacent to the property provides meals.
        </p>

        <div class="cabins-grid">
          <div class="cabin-card" *ngFor="let cabin of cabins">
            <div class="cabin-header" [style.background-color]="cabin.color">
              <h3>{{ cabin.name }}</h3>
              <span class="cabin-honor">{{ cabin.honor }}</span>
            </div>
            <div class="cabin-content">
              <p *ngIf="cabin.sleeps">
                <strong>Sleeps:</strong> {{ cabin.sleeps }}
              </p>
              <p *ngIf="cabin.beds">
                <strong>Beds:</strong> {{ cabin.beds }}
              </p>
              <p *ngIf="cabin.note" class="cabin-note">{{ cabin.note }}</p>
              <a *ngIf="cabin.bookingUrl" [href]="cabin.bookingUrl" target="_blank" class="btn btn-secondary">
                Book This Cabin
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Amenities -->
    <section class="section section-alt">
      <div class="container">
        <h2>Cabin Amenities</h2>
        <div class="amenities-grid">
          <div class="amenity">
            <span class="amenity-icon">🍳</span>
            <h4>Full Kitchen</h4>
            <p>Stove, microwave, refrigerator, dishes, pans, and coffee makers</p>
          </div>
          <div class="amenity">
            <span class="amenity-icon">♿</span>
            <h4>Wheelchair Accessible</h4>
            <p>All cabins designed for mobility impaired guests</p>
          </div>
          <div class="amenity">
            <span class="amenity-icon">🔥</span>
            <h4>Outdoor Grills</h4>
            <p>Picnic tables and outdoor grills accessible to all</p>
          </div>
          <div class="amenity">
            <span class="amenity-icon">🏪</span>
            <h4>General Store</h4>
            <p>Adjacent to property for additional meals and supplies</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Future Plans -->
    <section class="section">
      <div class="container">
        <h2>Future Plans</h2>
        <div class="future-plans">
          <p>
            We have plans to expand our facilities to better serve our veterans community:
          </p>
          <ul>
            <li>Two additional cabins honoring the <strong>Coast Guard</strong> and <strong>First Responders</strong></li>
            <li>A larger lodge for single vets, service members, or the general public</li>
            <li>A small chapel with stained-glass windows representing each branch of service</li>
          </ul>
        </div>
      </div>
    </section>

    <!-- Booking Info -->
    <section class="section section-alt">
      <div class="container text-center">
        <h2>Book Your Stay</h2>
        <p class="booking-intro">
          <strong>Combat wounded veterans and their families stay FREE</strong> – two times per year.
        </p>
        <p>
          Cabins are also available to rent to the public through Evolve Vacation Rentals. 
          Non-wounded veterans receive a <strong>10% discount</strong> on cabin rentals.
        </p>
        <p class="booking-note">
          Rental fees from non-wounded servicemen/women, veterans, and civilians enable 
          combat wounded service members to visit P4 free of charge.
        </p>
        <div class="booking-buttons">
          <a href="https://evolve.com" target="_blank" class="btn btn-primary">Book on Evolve</a>
          <a routerLink="/contact" class="btn btn-secondary">Contact Us</a>
        </div>
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

    .intro {
      font-size: 1.1rem;
      max-width: 800px;
      margin-bottom: 40px;
      line-height: 1.8;
    }

    .cabins-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 30px;
    }

    .cabin-card {
      background: var(--white);
      border-radius: 8px;
      overflow: hidden;
      box-shadow: 0 4px 20px rgba(0,0,0,0.08);
      transition: transform 0.3s ease, box-shadow 0.3s ease;

      &:hover {
        transform: translateY(-5px);
        box-shadow: 0 8px 30px rgba(0,0,0,0.12);
      }
    }

    .cabin-header {
      padding: 25px;
      color: var(--white);

      h3 {
        color: var(--white);
        margin-bottom: 5px;
        font-size: 1.4rem;
      }

      .cabin-honor {
        font-size: 0.85rem;
        opacity: 0.9;
        text-transform: uppercase;
        letter-spacing: 1px;
      }
    }

    .cabin-content {
      padding: 25px;

      p {
        margin-bottom: 0.75rem;
      }

      .cabin-note {
        font-style: italic;
        color: var(--medium-gray);
        font-size: 0.9rem;
        margin-top: 1rem;
      }

      .btn {
        margin-top: 1rem;
      }
    }

    .amenities-grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 30px;
      margin-top: 30px;
    }

    .amenity {
      text-align: center;
      padding: 30px 20px;
      background: var(--white);
      border-radius: 8px;
      box-shadow: 0 4px 15px rgba(0,0,0,0.05);

      .amenity-icon {
        font-size: 2.5rem;
        display: block;
        margin-bottom: 1rem;
      }

      h4 {
        font-size: 1.1rem;
        margin-bottom: 0.5rem;
      }

      p {
        font-size: 0.9rem;
        color: var(--medium-gray);
        margin: 0;
      }
    }

    .future-plans {
      max-width: 700px;

      ul {
        margin-top: 1rem;
        padding-left: 20px;

        li {
          margin-bottom: 12px;
          line-height: 1.6;
        }
      }
    }

    .booking-intro {
      font-size: 1.3rem;
      color: var(--primary-navy);
    }

    .booking-note {
      font-style: italic;
      color: var(--medium-gray);
      margin-top: 1.5rem;
    }

    .booking-buttons {
      display: flex;
      gap: 15px;
      justify-content: center;
      margin-top: 2rem;
      flex-wrap: wrap;
    }

    @media (max-width: 900px) {
      .amenities-grid {
        grid-template-columns: repeat(2, 1fr);
      }
    }

    @media (max-width: 600px) {
      .amenities-grid {
        grid-template-columns: 1fr;
      }
    }
  `]
})
export class AccommodationsComponent {
  cabins = [
    {
      name: 'Semper Fi Cabin',
      honor: 'In honor of the Marines',
      sleeps: 5,
      beds: 'Queen bed, twin bed, and living room sleep sofa',
      color: '#c62828',
      bookingUrl: 'https://evolve.com'
    },
    {
      name: 'Hooah Cabin',
      honor: 'In honor of the Army',
      sleeps: 6,
      beds: 'Full bed, two twin beds, and pull-out sofa bed in living room',
      color: '#2e7d32',
      bookingUrl: 'https://evolve.com'
    },
    {
      name: 'Anchors Away Cabin',
      honor: 'In honor of the Navy',
      sleeps: null,
      beds: null,
      color: '#1565c0',
      bookingUrl: 'https://evolve.com'
    },
    {
      name: 'Wild Blue Yonder Cabin',
      honor: 'In honor of the Air Force',
      sleeps: 5,
      beds: 'Full bed, twin log bunk bed, and pull-out sofa bed in living room',
      color: '#0277bd',
      bookingUrl: 'https://evolve.com'
    },
    {
      name: 'Wild & Wonderful Cabin',
      honor: 'In honor of West Virginia',
      sleeps: null,
      beds: null,
      note: 'Available for public rental',
      color: '#1a2e4c',
      bookingUrl: 'https://evolve.com'
    }
  ];
}
