import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink],
  template: `
    <footer class="footer">
      <div class="container">
        <div class="footer-grid">
          <div class="footer-section">
            <h4>Patriots 4</h4>
            <p>A 501(c)(3) non-profit organization dedicated to supporting combat wounded service members and their families.</p>
            <p class="ein">EIN: 46-1671865</p>
          </div>

          <div class="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><a routerLink="/">Home</a></li>
              <li><a routerLink="/about">About Us</a></li>
              <li><a routerLink="/accommodations">Accommodations</a></li>
              <li><a routerLink="/programs">Programs</a></li>
              <li><a routerLink="/contact">Contact</a></li>
            </ul>
          </div>

          <div class="footer-section">
            <h4>Location</h4>
            <p>28 Veterans Lane<br>
            Parsons, WV 26287</p>
            <p class="mt-2">At the intersection of State Road 72 and State Road 38, 6 miles north of Parsons, WV</p>
          </div>

          <div class="footer-section">
            <h4>Contact</h4>
            <p>
              <strong>Email:</strong><br>
              <a href="mailto:patriots4heroes&#64;gmail.com">patriots4heroes&#64;gmail.com</a>
            </p>
            <p class="mt-2">
              <strong>Phone:</strong><br>
              <a href="tel:703-929-4523">703-929-4523 (Kay)</a>
            </p>
          </div>
        </div>

        <div class="footer-bottom">
          <p>&copy; {{ currentYear }} Patriots 4, Inc. All rights reserved.</p>
          <p class="tagline">Serving The Ones Who Serve</p>
        </div>
      </div>
    </footer>
  `,
  styles: [`
    .footer {
      background-color: var(--primary-navy);
      color: var(--white);
      padding: 60px 0 30px;
    }

    .footer-grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 40px;
      margin-bottom: 40px;
    }

    .footer-section {
      h4 {
        color: var(--primary-gold);
        font-size: 1.1rem;
        margin-bottom: 1rem;
        text-transform: uppercase;
        letter-spacing: 1px;
      }

      p {
        color: rgba(255,255,255,0.8);
        font-size: 0.9rem;
        line-height: 1.7;
      }

      .ein {
        margin-top: 1rem;
        font-size: 0.85rem;
        color: var(--primary-gold);
      }

      ul {
        list-style: none;

        li {
          margin-bottom: 8px;

          a {
            color: rgba(255,255,255,0.8);
            font-size: 0.9rem;
            transition: color 0.3s ease;

            &:hover {
              color: var(--primary-gold);
            }
          }
        }
      }

      a {
        color: rgba(255,255,255,0.8);

        &:hover {
          color: var(--primary-gold);
        }
      }
    }

    .footer-bottom {
      border-top: 1px solid rgba(255,255,255,0.1);
      padding-top: 30px;
      text-align: center;

      p {
        color: rgba(255,255,255,0.6);
        font-size: 0.85rem;
        margin-bottom: 5px;
      }

      .tagline {
        color: var(--primary-gold);
        font-style: italic;
      }
    }

    @media (max-width: 900px) {
      .footer-grid {
        grid-template-columns: repeat(2, 1fr);
      }
    }

    @media (max-width: 600px) {
      .footer-grid {
        grid-template-columns: 1fr;
        text-align: center;
      }
    }
  `]
})
export class FooterComponent {
  currentYear = new Date().getFullYear();
}
