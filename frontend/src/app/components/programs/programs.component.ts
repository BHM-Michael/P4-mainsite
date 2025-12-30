import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-programs',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <!-- Page Header -->
    <section class="page-header">
      <div class="container">
        <h1>Programs & Activities</h1>
        <p>Free stays and outdoor adventures for combat wounded veterans</p>
      </div>
    </section>

    <!-- Free Program -->
    <section class="section free-program">
      <div class="container">
        <div class="program-highlight">
          <h2>Combat Wounded Veterans Stay Free</h2>
          <p class="lead">
            In recognition of the many sacrifices combat wounded service members have made, P4 offers 
            combat wounded service members (and their immediate family) the opportunity to stay 
            <strong>two times per year at P4 completely free of charge</strong>.
          </p>
          
          <div class="included-grid">
            <div class="included-item" *ngFor="let item of includedItems">
              <span class="check-icon">✓</span>
              <span>{{ item }}</span>
            </div>
          </div>

          <div class="eligibility">
            <h4>Also Eligible:</h4>
            <ul>
              <li>Spouses and children of veterans killed in service may also stay for free</li>
              <li>Non-wounded veterans receive a 10% discount on cabin rentals</li>
            </ul>
          </div>

          <a routerLink="/contact" class="btn btn-primary">Reserve Your Free Stay</a>
        </div>
      </div>
    </section>

    <!-- Adaptive Equipment -->
    <section class="section section-alt">
      <div class="container">
        <h2>Adaptive Equipment</h2>
        <p class="section-intro">
          P4 includes adaptive equipment and area-expert guides to ensure all veterans can enjoy 
          outdoor activities regardless of disability or injury.
        </p>

        <div class="equipment-grid">
          <div class="equipment-card featured">
            <h3>The Huntmaster</h3>
            <p class="equipment-tagline">Wheelchair Accessible Hunting Platform</p>
            <p>
              Our solar charged, hydraulic actuated, raised hunting platform is designed specifically 
              for wheelchair hunters. Key features include:
            </p>
            <ul>
              <li>Fits a wheelchair hunter who can wheel their wheelchair inside the totally enclosed platform</li>
              <li>With the push of a button, it hydraulically lifts up to 25 feet in the air</li>
              <li>Can accommodate 2-3 additional people comfortably</li>
              <li>Solar charged for sustainable operation</li>
            </ul>
          </div>

          <div class="equipment-card">
            <h3>Track Wheelchair</h3>
            <p>
              Specially designed track wheelchair for fishing and getting around the property's 
              varied terrain, ensuring mobility on trails, near streams, and through wooded areas.
            </p>
          </div>

          <div class="equipment-card">
            <h3>Area-Expert Guides</h3>
            <p>
              Experienced local guides are available to assist with hunting and fishing activities, 
              ensuring safe and successful outings for all skill levels.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Activities -->
    <section class="section">
      <div class="container">
        <h2>Outdoor Activities</h2>
        
        <div class="activities-grid">
          <div class="activity-card" *ngFor="let activity of activities">
            <span class="activity-icon">{{ activity.icon }}</span>
            <h4>{{ activity.name }}</h4>
            <p>{{ activity.description }}</p>
          </div>
        </div>

        <div class="seasons-info">
          <h3>Seasons & Availability</h3>
          <p><strong>Open year round</strong></p>
          <ul>
            <li><strong>Fishing:</strong> Available March through December</li>
            <li><strong>Hunting:</strong> During all WV seasons</li>
            <li><strong>Winter stays:</strong> Available, but hunting and fishing not available during January and February</li>
          </ul>
        </div>
      </div>
    </section>

    <!-- Testimonials -->
    <section class="section section-alt">
      <div class="container">
        <h2 class="text-center">Veteran Testimonials</h2>
        
        <div class="testimonials-grid">
          <div class="testimonial-card" *ngFor="let testimonial of testimonials">
            <div class="quote-icon">"</div>
            <p class="quote">{{ testimonial.quote }}</p>
            <div class="author">
              <strong>{{ testimonial.name }}</strong>
              <span>{{ testimonial.service }}</span>
            </div>
          </div>
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

    .free-program {
      background: linear-gradient(135deg, var(--primary-red) 0%, #8b1a28 100%);
      color: var(--white);
    }

    .program-highlight {
      max-width: 900px;
      margin: 0 auto;
      text-align: center;

      h2 {
        color: var(--white);
        font-size: 2.2rem;
      }

      .lead {
        font-size: 1.2rem;
        opacity: 0.95;
        margin-bottom: 2rem;
      }
    }

    .included-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 15px;
      margin: 30px 0;
      text-align: left;
    }

    .included-item {
      display: flex;
      align-items: center;
      gap: 12px;
      background: rgba(255,255,255,0.1);
      padding: 15px 20px;
      border-radius: 6px;

      .check-icon {
        color: var(--primary-gold);
        font-weight: bold;
        font-size: 1.2rem;
      }
    }

    .eligibility {
      background: rgba(255,255,255,0.1);
      padding: 25px 30px;
      border-radius: 8px;
      margin: 30px 0;
      text-align: left;

      h4 {
        color: var(--primary-gold);
        margin-bottom: 1rem;
      }

      ul {
        list-style: none;
        margin: 0;

        li {
          padding: 8px 0;
          padding-left: 20px;
          position: relative;

          &:before {
            content: "•";
            position: absolute;
            left: 0;
            color: var(--primary-gold);
          }
        }
      }
    }

    .section-intro {
      font-size: 1.1rem;
      max-width: 700px;
      margin-bottom: 40px;
    }

    .equipment-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 30px;
    }

    .equipment-card {
      background: var(--white);
      padding: 30px;
      border-radius: 8px;
      box-shadow: 0 4px 20px rgba(0,0,0,0.08);

      h3 {
        color: var(--primary-navy);
        margin-bottom: 0.5rem;
      }

      .equipment-tagline {
        color: var(--primary-gold);
        font-weight: 600;
        font-size: 0.9rem;
        text-transform: uppercase;
        letter-spacing: 1px;
        margin-bottom: 1rem;
      }

      ul {
        margin-top: 1rem;
        padding-left: 20px;

        li {
          margin-bottom: 8px;
          line-height: 1.6;
        }
      }

      &.featured {
        grid-column: 1 / -1;
        background: var(--primary-navy);
        color: var(--white);

        h3 {
          color: var(--white);
        }

        @media (min-width: 900px) {
          grid-column: span 1;
        }
      }
    }

    .activities-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 25px;
      margin-bottom: 50px;
    }

    .activity-card {
      text-align: center;
      padding: 30px 20px;
      background: var(--light-cream);
      border-radius: 8px;
      transition: transform 0.3s ease;

      &:hover {
        transform: translateY(-5px);
      }

      .activity-icon {
        font-size: 2.5rem;
        display: block;
        margin-bottom: 1rem;
      }

      h4 {
        margin-bottom: 0.5rem;
        font-size: 1.1rem;
      }

      p {
        font-size: 0.9rem;
        color: var(--medium-gray);
        margin: 0;
      }
    }

    .seasons-info {
      background: var(--white);
      padding: 30px;
      border-radius: 8px;
      border-left: 4px solid var(--primary-gold);
      box-shadow: 0 4px 15px rgba(0,0,0,0.05);

      h3 {
        margin-bottom: 1rem;
      }

      ul {
        margin-top: 1rem;
        padding-left: 20px;

        li {
          margin-bottom: 8px;
        }
      }
    }

    .testimonials-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
      gap: 30px;
      margin-top: 40px;
    }

    .testimonial-card {
      background: var(--white);
      padding: 35px;
      border-radius: 8px;
      box-shadow: 0 4px 20px rgba(0,0,0,0.08);
      position: relative;

      .quote-icon {
        font-family: Georgia, serif;
        font-size: 4rem;
        color: var(--primary-gold);
        opacity: 0.3;
        position: absolute;
        top: 10px;
        left: 20px;
        line-height: 1;
      }

      .quote {
        font-style: italic;
        line-height: 1.8;
        margin-bottom: 1.5rem;
        position: relative;
        z-index: 1;
      }

      .author {
        display: flex;
        flex-direction: column;
        border-top: 1px solid var(--light-gray);
        padding-top: 1rem;

        strong {
          color: var(--primary-navy);
        }

        span {
          font-size: 0.85rem;
          color: var(--medium-gray);
        }
      }
    }
  `]
})
export class ProgramsComponent {
  includedItems = [
    '3 days and 2 nights in a P4 cabin stocked with food',
    'Hunting, kayaking, fishing',
    'Bait/tackle, ammunition',
    'Processing of catches and kills',
    'Mounting of a WV trophy size catch or kill'
  ];

  activities = [
    { name: 'Fishing', icon: '🎣', description: 'Small Mouth and Rock Bass on the Cheat River, Trout in Clover Run' },
    { name: 'Hunting', icon: '🦌', description: 'Turkey, bear, grouse, and deer during WV seasons' },
    { name: 'Kayaking', icon: '🛶', description: 'On the beautiful Cheat River' },
    { name: 'Hiking', icon: '🥾', description: 'Trails through the Monongahela National Forest' },
    { name: 'Camping', icon: '⛺', description: 'Cabins or bring your own camper/tent' },
    { name: 'Photography', icon: '📷', description: 'Capture the majestic mountain scenery' }
  ];

  testimonials = [
    {
      name: 'SSgt Melinda S Smith',
      service: 'Air Force Reserves',
      quote: 'My name is SSgt Melinda S Smith and I am a wounded warrior in the United States Air Force Reserves. In August 2014 during a deployment to Qatar, my life changed forever, with the diagnosis of Multiple Sclerosis.'
    },
    {
      name: 'Paralyzed USMC Veteran',
      service: 'United States Marine Corps',
      quote: 'I was so blessed to be able to hunt with General West at Patriots 4 cabins in Parsons, WV. Being a paralyzed USMC Veteran it was a dream come true. I thoroughly enjoyed being on the deer hunt there in WV. I stayed in a very accessible Marine Corp theme decorated cabin.'
    },
    {
      name: 'Vets with Guitars Participant',
      service: 'Clarksburg, WV',
      quote: 'Please accept my warmest gratitude for the outstanding weekend I just experienced 10-12 August with the Vet\'s with Guitars from Clarksburg. Our experience was definitely a true highlight in my lifetime.'
    }
  ];
}
