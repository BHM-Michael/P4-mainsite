import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  template: `
    <header class="header">
      <div class="container">
        <div class="header-content">
          <a routerLink="/" class="logo">
            <img [src]="logoUrl" alt="Patriots 4 Logo" class="logo-image">
            <div class="logo-text">
              <span class="logo-main">Patriots 4</span>
              <span class="logo-tagline">Serving Those Who Served</span>
            </div>
          </a>
          
          <button class="mobile-toggle" (click)="toggleMenu()" [class.active]="menuOpen">
            <span></span>
            <span></span>
            <span></span>
          </button>

          <nav class="nav" [class.open]="menuOpen">
            <a routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}" (click)="closeMenu()">Home</a>
            <a routerLink="/about" routerLinkActive="active" (click)="closeMenu()">About</a>
            <a routerLink="/accommodations" routerLinkActive="active" (click)="closeMenu()">Cabins</a>
            <a routerLink="/programs" routerLinkActive="active" (click)="closeMenu()">Programs</a>
            <a routerLink="/gallery" routerLinkActive="active" (click)="closeMenu()">Gallery</a>
            <a routerLink="/news" routerLinkActive="active" (click)="closeMenu()">News</a>
            <a routerLink="/contact" routerLinkActive="active" (click)="closeMenu()">Contact</a>
            <a href="#donate" class="btn btn-primary nav-donate" (click)="closeMenu()">Donate</a>
          </nav>
        </div>
      </div>
    </header>
  `,
  styles: [`
    .header {
      background-color: var(--primary-navy);
      padding: 10px 0;
      position: sticky;
      top: 0;
      z-index: 1000;
      box-shadow: 0 2px 10px rgba(0,0,0,0.2);
    }

    .header-content {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .logo {
      display: flex;
      align-items: center;
      text-decoration: none;
      gap: 12px;
    }

    .logo-image {
      height: 55px;
      width: auto;
    }

    .logo-text {
      display: flex;
      flex-direction: column;
    }

    .logo-main {
      font-family: 'Merriweather', serif;
      font-size: 1.5rem;
      font-weight: 700;
      color: var(--white);
    }

    .logo-tagline {
      font-size: 0.7rem;
      color: var(--primary-gold);
      text-transform: uppercase;
      letter-spacing: 2px;
    }

    .nav {
      display: flex;
      align-items: center;
      gap: 22px;

      a {
        color: var(--white);
        font-weight: 600;
        font-size: 0.8rem;
        text-transform: uppercase;
        letter-spacing: 1px;
        padding: 5px 0;
        border-bottom: 2px solid transparent;
        transition: all 0.3s ease;

        &:hover, &.active {
          color: var(--primary-gold);
          border-bottom-color: var(--primary-gold);
        }
      }
    }

    .nav-donate {
      border-bottom: none !important;
      padding: 10px 18px !important;
      font-size: 0.75rem !important;

      &:hover {
        color: var(--white) !important;
      }
    }

    .mobile-toggle {
      display: none;
      flex-direction: column;
      justify-content: space-between;
      width: 30px;
      height: 21px;
      background: transparent;
      border: none;
      cursor: pointer;

      span {
        display: block;
        height: 3px;
        width: 100%;
        background-color: var(--white);
        border-radius: 2px;
        transition: all 0.3s ease;
      }

      &.active {
        span:nth-child(1) {
          transform: rotate(45deg) translate(5px, 5px);
        }
        span:nth-child(2) {
          opacity: 0;
        }
        span:nth-child(3) {
          transform: rotate(-45deg) translate(7px, -6px);
        }
      }
    }

    @media (max-width: 1100px) {
      .mobile-toggle {
        display: flex;
      }

      .logo-text {
        display: none;
      }

      .nav {
        position: fixed;
        top: 75px;
        left: 0;
        right: 0;
        background-color: var(--primary-navy);
        flex-direction: column;
        padding: 20px;
        gap: 15px;
        transform: translateY(-100%);
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease;

        &.open {
          transform: translateY(0);
          opacity: 1;
          visibility: visible;
        }

        a {
          width: 100%;
          text-align: center;
          padding: 10px;
          font-size: 0.9rem;
        }
      }
    }
  `]
})
export class HeaderComponent {
  logoUrl = 'https://p4images.blob.core.windows.net/images/site%20logo/logo.jpg';
  menuOpen = false;

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  closeMenu() {
    this.menuOpen = false;
  }
}
