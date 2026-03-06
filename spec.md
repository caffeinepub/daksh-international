# Daksh International

## Current State
- 5-page React website: Home, About, Services, Universities, Contact
- HomePage only has HeroSection (stats, CTA buttons)
- UniversitiesSection uses clearbit logos with initials fallback
- ServicesSection has 5 country cards with flags (emoji) and benefits
- AboutSection has MD profile card with "TB" initials avatar
- Navbar and Footer are complete with routing

## Requested Changes (Diff)

### Add
- **HomePage enhancements**: Add rich content sections below the hero:
  1. "Why Choose Us" section with 4-6 value proposition cards (icons + descriptions)
  2. Country destinations preview section with real country flag images (SVG/PNG from cdnjs or flagcdn.com) and short intro for each of 5 countries — clickable cards that link to /services
  3. Featured Universities carousel/strip showing logos of partner universities (same clearbit approach) with a "View All" CTA to /universities
  4. Testimonials / Process steps section (How it Works — 4 steps: Consultation → University Selection → Application → Visa)
  5. CTA banner section before footer: "Start Your Journey Today" with contact link

- **Country flag images**: Use real flag images from `https://flagcdn.com/w80/{cc}.png` (country codes: au, ca, us, gb, eu/de) in both HomePage country section and ServicesSection cards, replacing emoji flags

- **University logos**: Already using clearbit — ensure the logo fallback initials are clear. On HomePage featured section, show a scrolling or grid strip of top 10-12 logos across all countries.

### Modify
- **HomePage**: Expand from just HeroSection to include multiple informative sections (Why Choose Us, Destinations, University Logos strip, How It Works, CTA Banner)
- **ServicesSection**: Replace emoji flags with real flag images from flagcdn.com for a more professional look
- **UniversitiesSection**: Replace emoji flags in tab triggers with real flag images from flagcdn.com

### Remove
- Nothing to remove
