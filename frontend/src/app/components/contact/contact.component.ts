import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <!-- Page Header -->
    <section class="page-header">
      <div class="container">
        <h1>Contact Us</h1>
        <p>Get in touch to plan your stay at Patriots 4</p>
      </div>
    </section>

    <!-- Contact Content -->
    <section class="section">
      <div class="container">
        <div class="contact-grid">
          <!-- Contact Info -->
          <div class="contact-info">
            <h2>Get In Touch</h2>
            <p class="intro">
              P4 understands the many challenges, often life-long challenges, facing wounded 
              and/or combat veterans. We're here to help.
            </p>

            <div class="info-card">
              <h4>For Cabin Reservations</h4>
              <p>
                <strong>Email:</strong><br>
                <a href="mailto:patriots4heroes&#64;gmail.com">patriots4heroes&#64;gmail.com</a>
              </p>
              <p>
                <strong>Phone/Text:</strong><br>
                <a href="tel:703-929-4523">703-929-4523</a> (Kay)
              </p>
            </div>

            <div class="info-card">
              <h4>For Donations</h4>
              <p>
                <strong>Email:</strong><br>
                <a href="mailto:randywest0782&#64;aol.com">randywest0782&#64;aol.com</a>
              </p>
              <p>
                <strong>Phone:</strong><br>
                <a href="tel:202-549-6828">(202) 549-6828</a>
              </p>
            </div>

            <div class="info-card location">
              <h4>Location</h4>
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

            <div class="info-card medical">
              <h4>Nearby Medical Facilities</h4>
              <ul>
                <li><strong>St. George Medical Center</strong> (equipped with helopad) - 2 minutes away</li>
                <li><strong>Davis Memorial Hospital</strong> in Elkins - 30 minutes away</li>
              </ul>
            </div>
          </div>

          <!-- Contact Form -->
          <div class="contact-form-container">
            <h2>Send Us a Message</h2>
            <form class="contact-form" (ngSubmit)="onSubmit()">
              <div class="form-group">
                <label for="name">Your Name *</label>
                <input type="text" id="name" name="name" [(ngModel)]="formData.name" required>
              </div>

              <div class="form-group">
                <label for="email">Email Address *</label>
                <input type="email" id="email" name="email" [(ngModel)]="formData.email" required>
              </div>

              <div class="form-group">
                <label for="phone">Phone Number</label>
                <input type="tel" id="phone" name="phone" [(ngModel)]="formData.phone">
              </div>

              <div class="form-group">
                <label for="veteranStatus">Veteran Status</label>
                <select id="veteranStatus" name="veteranStatus" [(ngModel)]="formData.veteranStatus">
                  <option value="">Select...</option>
                  <option value="combat-wounded">Combat Wounded Veteran</option>
                  <option value="veteran">Veteran (Non-Combat Wounded)</option>
                  <option value="active">Active Duty</option>
                  <option value="family">Family of Veteran</option>
                  <option value="civilian">Civilian Supporter</option>
                </select>
              </div>

              <div class="form-group">
                <label for="subject">Subject *</label>
                <select id="subject" name="subject" [(ngModel)]="formData.subject" required>
                  <option value="">Select...</option>
                  <option value="reservation">Cabin Reservation</option>
                  <option value="free-stay">Free Stay Inquiry (Combat Wounded)</option>
                  <option value="donation">Donation Question</option>
                  <option value="volunteer">Volunteer</option>
                  <option value="general">General Inquiry</option>
                </select>
              </div>

              <div class="form-group">
                <label for="message">Message *</label>
                <textarea id="message" name="message" rows="5" [(ngModel)]="formData.message" required></textarea>
              </div>

              <button type="submit" class="btn btn-primary">Send Message</button>
              
              <p class="form-note">
                * Required fields. We typically respond within 24-48 hours.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>

    <!-- Donate Section -->
    <section class="section section-alt">
      <div class="container">
        <div class="donate-section">
          <h2>Support Our Mission</h2>
          <p>
            Patriots 4 is a 501(c)(3) Non-Profit organization (EIN: 46-1671865) supported by 
            tax-deductible donations. Your generosity enables combat wounded service members 
            to visit P4 free of charge.
          </p>
          
          <div class="donate-address">
            <h4>Mail Donations To:</h4>
            <p>
              Patriots 4<br>
              c/o MGen Randy West<br>
              10500 Hume Road<br>
              Marshall, VA 20115
            </p>
            <p><em>Make checks payable to "Patriots 4"</em></p>
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

    .contact-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 60px;
    }

    .contact-info {
      .intro {
        font-size: 1.1rem;
        margin-bottom: 2rem;
        line-height: 1.7;
      }
    }

    .info-card {
      background: var(--light-cream);
      padding: 25px;
      border-radius: 8px;
      margin-bottom: 20px;
      border-left: 4px solid var(--primary-gold);

      h4 {
        color: var(--primary-navy);
        margin-bottom: 1rem;
        font-size: 1.1rem;
      }

      p {
        margin-bottom: 0.75rem;
      }

      a {
        color: var(--primary-navy);
        font-weight: 600;

        &:hover {
          color: var(--primary-red);
        }
      }

      .directions {
        font-size: 0.9rem;
        color: var(--medium-gray);
        font-style: italic;
        margin-top: 1rem;
      }

      ul {
        list-style: none;
        margin: 0;

        li {
          margin-bottom: 8px;
        }
      }

      &.medical {
        border-left-color: var(--primary-red);
      }
    }

    .contact-form-container {
      h2 {
        margin-bottom: 1.5rem;
      }
    }

    .contact-form {
      background: var(--white);
      padding: 35px;
      border-radius: 8px;
      box-shadow: 0 4px 20px rgba(0,0,0,0.08);
    }

    .form-group {
      margin-bottom: 1.25rem;

      label {
        display: block;
        margin-bottom: 0.5rem;
        font-weight: 600;
        color: var(--primary-navy);
      }

      input, select, textarea {
        width: 100%;
        padding: 12px 15px;
        border: 1px solid var(--light-gray);
        border-radius: 4px;
        font-size: 1rem;
        font-family: inherit;
        transition: border-color 0.3s ease, box-shadow 0.3s ease;

        &:focus {
          outline: none;
          border-color: var(--primary-navy);
          box-shadow: 0 0 0 3px rgba(26, 46, 76, 0.1);
        }
      }

      textarea {
        resize: vertical;
        min-height: 120px;
      }
    }

    .form-note {
      font-size: 0.85rem;
      color: var(--medium-gray);
      margin-top: 1rem;
      margin-bottom: 0;
    }

    .donate-section {
      max-width: 700px;
      margin: 0 auto;
      text-align: center;

      p {
        font-size: 1.1rem;
        margin-bottom: 2rem;
      }
    }

    .donate-address {
      background: var(--white);
      padding: 30px;
      border-radius: 8px;
      display: inline-block;
      text-align: left;
      box-shadow: 0 4px 15px rgba(0,0,0,0.05);

      h4 {
        color: var(--primary-navy);
        margin-bottom: 1rem;
      }
    }

    @media (max-width: 900px) {
      .contact-grid {
        grid-template-columns: 1fr;
        gap: 40px;
      }
    }
  `]
})
export class ContactComponent {
  formData = {
    name: '',
    email: '',
    phone: '',
    veteranStatus: '',
    subject: '',
    message: ''
  };

  onSubmit() {
    // For static site, redirect to mailto or use a form service
    const subject = encodeURIComponent(`Patriots 4 Website: ${this.formData.subject}`);
    const body = encodeURIComponent(
      `Name: ${this.formData.name}\n` +
      `Email: ${this.formData.email}\n` +
      `Phone: ${this.formData.phone}\n` +
      `Veteran Status: ${this.formData.veteranStatus}\n\n` +
      `Message:\n${this.formData.message}`
    );
    window.location.href = `mailto:patriots4heroes@gmail.com?subject=${subject}&body=${body}`;
  }
}
