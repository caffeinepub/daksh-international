# Daksh International

## Current State
A single-page website for Daksh International study visa consultancy. All sections (Home, About, Services, Universities, Contact) render on one scrollable page. The navbar uses anchor-based scroll navigation (#home, #about, etc.) which doesn't work as proper page links. The navbar logo shows a generated PNG image. The About section includes an MD (Tripta Bharara) profile photo card with an img tag.

## Requested Changes (Diff)

### Add
- React Router (react-router-dom) for client-side routing
- 5 separate page components: HomePage, AboutPage, ServicesPage, UniversitiesPage, ContactPage
- Each page wraps its respective section component with proper layout (Navbar + Footer)

### Modify
- Navbar: remove the `<img>` logo tag and the fallback icon; replace with plain text "DAKSH International" in styled spans (no icon, no image)
- Navbar links: change from `href="#section"` scroll anchors to `<Link to="/page">` router navigation
- Footer quick links: update from scroll anchors to router `<Link>` components
- AboutSection: remove the MD profile photo (`<img src="/assets/generated/md-tripta-bharara...">`) -- keep the card but replace the photo area with initials or a professional placeholder avatar (text "TB")
- App.tsx: add BrowserRouter + Routes with paths /, /about, /services, /universities, /contact
- HeroSection buttons: update scroll targets to use navigate() for "Get Free Consultation" (→ /contact) and "Explore Universities" (→ /universities)
- ServicesSection: card onClick navigates to /universities
- Footer: "Get Consultation" CTA navigates to /contact

### Remove
- Logo image (`/assets/generated/daksh-logo-transparent.dim_300x120.png`) usage from Navbar
- MD photo (`/assets/generated/md-tripta-bharara.dim_400x400.jpg`) from AboutSection

## Implementation Plan
1. Install react-router-dom (check if already in package.json first)
2. Create page files: src/pages/HomePage.tsx, AboutPage.tsx, ServicesPage.tsx, UniversitiesPage.tsx, ContactPage.tsx — each renders the relevant section wrapped in layout
3. Update App.tsx to use BrowserRouter + Routes mapping paths to pages
4. Update Navbar.tsx: remove img tag, show text-only brand; change nav links to <Link> from react-router-dom
5. Update Footer.tsx: change quickLinks to use <Link> 
6. Update AboutSection.tsx: remove img block in MD card, show initials "TB" styled div instead
7. Update HeroSection.tsx: use useNavigate for button actions
8. Update ServicesSection.tsx: card onClick uses navigate
9. Validate build
