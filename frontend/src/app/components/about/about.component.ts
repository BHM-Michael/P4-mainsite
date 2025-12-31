import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  template: `
    <!-- Page Header -->
    <section class="page-header">
      <div class="container">
        <h1>About Patriots 4</h1>
        <p>Our mission, our story, and the people behind P4</p>
      </div>
    </section>

    <!-- Mission Section -->
    <section class="section">
      <div class="container">
        <h2>Our Mission</h2>
        <p class="lead">
          Patriots 4 is comprised of an all-volunteer Board of Directors dedicated to enabling combat 
          wounded service members to partake in outdoor activities without being limited by disability 
          or injury.
        </p>

        <div class="objectives-grid">
          <div class="objective-card" *ngFor="let objective of objectives; let i = index">
            <div class="objective-number">{{ i + 1 }}</div>
            <p>{{ objective }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Origin Story -->
    <section class="section section-alt">
      <div class="container">
        <h2>Our Story</h2>
        <div class="story-content">
          <p>
            Patriots 4 is founded by a 35 year Marine Veteran and his wife, Randy and Robin Lane West. 
            Robin's Father, Al Lane Sr. retired from the Air Force after serving in World War II and Korea. 
            Randy served in Vietnam, Desert Shield and Desert Storm.
          </p>
          <p>
            All of them share a love of the great outdoors. That love, combined with their deep patriotism 
            and desire to show support and appreciation for our wounded military and their families, 
            all came together to inspire Patriots 4.
          </p>
          <p>
            They were also assisted a great deal in the beginning stage of Patriots 4 by Robin's brother 
            Al Lane Jr., a USAF vet and his wife Joanie – hence the name <strong>Patriots 4!</strong>
          </p>
        </div>
      </div>
    </section>

    <!-- Leadership Section -->
    <section class="section">
      <div class="container">
        <h2>Leadership</h2>
        
        <div class="leader-card">
          <div class="leader-header">
            <h3>Randy West</h3>
            <span class="leader-title">Chairman, Board of Directors</span>
          </div>
          <div class="leader-content">
            <p>
              Randy West was elected Chairman of the Patriots 4 Board of Directors in 2018. He is currently 
              the President / CEO of Robison International, Inc., Washington D.C. where he serves as a 
              consultant and adviser to industry, DoD and Congress, on matters of National Security and Policy.
            </p>
            
            <h4>Military Career</h4>
            <p>
              Randy enlisted in the Marine Corps in October 1966, completed recruit training at MCRD Parris Island, 
              achieved the enlisted rank of sergeant, and was commissioned a 2nd Lieutenant in January 1968. 
              He completed The Basic School and was assigned to the Naval Air Training Command in Pensacola, FL.
            </p>
            <p>
              He served in various capacities including: Logistics Officer, Operations Officer, Aircraft Maintenance 
              Officer at HMA-269 at MCAS New River in Jacksonville, NC. Completed Landing Force Sixth Fleet deployment 
              in the Mediterranean. Served as Detachment OIC for Rum Punch 75 aboard HMS Hermes.
            </p>
            <p>
              Promoted to <strong>Major General</strong> on September 1, 1998. Served as Deputy Commanding General 
              of II Marine Expeditionary Force, Camp Lejeune, NC (June 1998 - July 1999). Senior Advisor for the 
              Deputy Secretary of Defense for Chemical and Biological Protection (July 1999 - Feb 2001). 
              Served on the Presidential Transition Team and became the Deputy Assistant Secretary of Defense 
              for Legislative Affairs. Retired January 2002.
            </p>

            <h4>Personal Decorations</h4>
            <p class="decorations">
              Defense Superior Service Medal, Defense Distinguished Service Medal, three Legions of Merit, 
              Distinguished Flying Cross, Meritorious Service Medal, Air Medal with numeral 19, 
              Joint Service Commendation Medal, Navy and Marine Corps Commendation Award, Combat Action Ribbon.
            </p>

            <h4>Additional Roles</h4>
            <ul>
              <li>Board of the Museum of Americans in Wartime</li>
              <li>Oakview National Bank in Marshall, VA</li>
              <li>Former member of the White House Commission on Remembrance</li>
              <li>Governor of Virginia's Committee on Veteran's Affairs</li>
              <li>The Outdoor Veteran's Fund (Partnered with PVA)</li>
              <li>Ordained lay minister serving as bi-vocational pastor at Orlean Baptist Church in Orlean, VA</li>
            </ul>
          </div>
        </div>

        <div class="leader-card">
          <div class="leader-header">
            <h3>Craig W. Hartzell</h3>
            <span class="leader-title">Board Member</span>
          </div>
          <div class="leader-content">
            <p>
              Craig Hartzell was elected to the Patriots 4 Board of Directors in 2018. He is President and CEO 
              of Azimuth, Incorporated, a West Virginia based, service-connected disabled veteran-owned small 
              business (SDVOSB) which he founded.
            </p>
            <p>
              Over thirty years of experience in electronic communications, special operations and business 
              management. Served on active duty with the 5th Special Forces Group (Airborne), the U.S. Army 
              Reserves with the 11th and 12th Special Forces Groups, and the 1st Special Operations Command.
            </p>

            <h4>Memberships</h4>
            <ul>
              <li>Decade Member of the Special Forces Association</li>
              <li>Life member of the Armed Forces Communications Electronics Association (AFCEA)</li>
              <li>Life member of the National Defense Industrial Association (NDIA)</li>
              <li>Life member of the American Legion</li>
              <li>Appointed by the President to the Board of Directors of the National Veterans Business Development Corporation</li>
            </ul>
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

    .lead {
      font-size: 1.2rem;
      color: var(--primary-navy);
      max-width: 800px;
    }

    .objectives-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 30px;
      margin-top: 40px;
    }

    .objective-card {
      display: flex;
      gap: 20px;
      align-items: flex-start;
      background: var(--light-cream);
      padding: 30px;
      border-radius: 8px;

      .objective-number {
        flex-shrink: 0;
        width: 50px;
        height: 50px;
        background: var(--primary-navy);
        color: var(--white);
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-family: 'Merriweather', serif;
        font-size: 1.5rem;
        font-weight: 700;
      }

      p {
        margin: 0;
        line-height: 1.7;
      }
    }

    .story-content {
      max-width: 800px;

      p {
        font-size: 1.1rem;
        line-height: 1.8;
      }
    }

    .leader-card {
      background: var(--white);
      border-radius: 8px;
      box-shadow: 0 4px 20px rgba(0,0,0,0.08);
      margin-bottom: 30px;
      overflow: hidden;
    }

    .leader-header {
      background: var(--primary-navy);
      padding: 25px 30px;

      h3 {
        color: var(--white);
        margin-bottom: 5px;
      }

      .leader-title {
        color: var(--primary-gold);
        font-size: 0.95rem;
        text-transform: uppercase;
        letter-spacing: 1px;
      }
    }

    .leader-content {
      padding: 30px;

      h4 {
        color: var(--primary-navy);
        margin-top: 1.5rem;
        margin-bottom: 0.75rem;
        font-size: 1.1rem;
      }

      ul {
        margin: 1rem 0;
        padding-left: 20px;

        li {
          margin-bottom: 8px;
          line-height: 1.6;
        }
      }

      .decorations {
        font-style: italic;
        color: var(--medium-gray);
      }
    }

    @media (max-width: 768px) {
      .objectives-grid {
        grid-template-columns: 1fr;
      }

      .objective-card {
        flex-direction: column;
        text-align: center;
        align-items: center;
      }
    }
  `]
})
export class AboutComponent {
  objectives = [
    "To honor our nation's wounded veterans (and their families) who have sacrificed so much in the name of freedom.",
    "To provide a place for mobility impaired wounded veterans to continue to enjoy the great outdoors regardless of disability. This is accomplished through adaptive equipment and guides/callers.",
    "To provide an atmosphere for sharing and encouraging that may assist in opening doors to help wounded veterans in identifying resources to navigate other challenging issues with which they may be faced. These challenges may include receiving assistance in building wheel chair ramps, finding a handicapped accessible vehicle, doing needed repairs in the home, identifying VA resources, VA benefits applications, finding professional counseling, etc.",
    "To provide an annual scholarship to help a son or daughter of a wounded vet attend college or pursue a trade school education."
  ];
}
