# 🍋 Wedding Website - Italian Summer Party Theme

A beautiful static wedding website for celebrating a special day at **Dworek Przy Lesie** on **April 10-12, 2026**. The website features an Italian summer party theme with lemons, light and happy aesthetics, and supports three languages.

## 🌟 Features

- **Three Language Support**: English, Polish (PL), and German (DE)
- **Responsive Design**: Works beautifully on desktop, tablet, and mobile devices
- **Italian Summer Theme**: Lemon motifs, light yellow and green colors, elegant typography
- **Google Maps Integration**: Embedded map showing the venue location
- **Detailed Saturday Schedule**: Complete timetable for the main celebration day
- **Smooth Animations**: Fade-in effects and smooth scrolling
- **Interactive Elements**: Language switcher and optional lemon cursor trail (Ctrl+L)

## 📁 Project Structure

```
WeddingStatic/
├── index.html          # English version (main page)
├── pl.html             # Polish version
├── de.html             # German version
├── css/
│   └── style.css       # All styling with lemon theme
├── js/
│   └── main.js         # Interactivity and animations
├── images/             # Placeholder for wedding photos
├── .github/
│   └── copilot-instructions.md
└── README.md           # This file
```

## 🚀 How to Use

### Quick Start

1. **Open the website**: Simply double-click on `index.html` to open it in your default browser
2. **Switch languages**: Use the language switcher in the top-right corner (EN | PL | DE)
3. **View on mobile**: The site is fully responsive and looks great on all devices

### Hosting Options

#### Option 1: Local Preview
- Open `index.html` directly in your web browser
- No server needed for basic functionality

#### Option 2: Live Server (Recommended for Development)
If you have VS Code with the Live Server extension:
1. Right-click on `index.html`
2. Select "Open with Live Server"
3. The page will open at `http://localhost:5500`

#### Option 3: Deploy Online
Deploy to any static hosting service:
- **GitHub Pages**: Push to GitHub and enable Pages in repository settings
- **Netlify**: Drag and drop the folder to Netlify
- **Vercel**: Import the project and deploy
- **Cloudflare Pages**: Connect your repository

## 🎨 Customization Guide

### Update Wedding Details

#### Contact Information
Edit the RSVP section in all three HTML files:
```html
<p>Contact us at: <strong>[email@example.com]</strong> or <strong>[phone number]</strong></p>
```

#### Venue Address
Update the full address in the location section:
```html
<p>Address: [Full address will be provided to confirmed guests]</p>
```

#### Google Maps
Replace the map embed URL in all three HTML files with the actual location:
1. Go to [Google Maps](https://www.google.com/maps)
2. Search for "Dworek Przy Lesie" or your exact venue
3. Click "Share" → "Embed a map"
4. Copy the iframe code
5. Replace the existing iframe in `index.html`, `pl.html`, and `de.html`

### Modify Colors

Edit `css/style.css` to change the color scheme:
```css
:root {
    --lemon-yellow: #FFF59D;     /* Main lemon yellow */
    --soft-yellow: #FFFDE7;      /* Background yellow */
    --light-green: #C5E1A5;      /* Accent green */
    --forest-green: #7CB342;     /* Primary green */
    --white: #FFFFFF;
    --soft-gray: #F5F5F5;
    --text-dark: #333333;
    --text-light: #666666;
}
```

### Add Photos

1. Place your photos in the `images/` folder
2. Add them to your HTML pages:
```html
<img src="images/your-photo.jpg" alt="Description" style="max-width: 100%; border-radius: 10px;">
```

### Modify the Schedule

Edit the timetable section in each HTML file:
```html
<div class="time-item">
    <span class="time">3:00 PM</span>
    <span class="event">🌸 Your Event Description</span>
</div>
```

### Add More Sections

Copy an existing section and modify:
```html
<section id="your-section">
    <h2>Your Section Title</h2>
    <p>Your content here...</p>
</section>
```

## 🎭 Special Features

### Lemon Cursor Trail
Press **Ctrl + L** to enable/disable a fun lemon emoji cursor trail effect!

### Smooth Scrolling
All internal links smoothly scroll to their destination.

### Fade-in Animations
Sections fade in as you scroll down the page.

## 🛠️ Technical Details

### Browser Compatibility
- Chrome/Edge: ✅ Full support
- Firefox: ✅ Full support
- Safari: ✅ Full support
- Mobile browsers: ✅ Full support

### No Dependencies
This website uses pure HTML, CSS, and JavaScript with no external libraries or frameworks. This means:
- ✅ Fast loading times
- ✅ No build process needed
- ✅ Works offline
- ✅ Easy to customize

### Performance
- Lightweight: ~20KB total (without images)
- No external API calls (except Google Maps)
- Optimized CSS with minimal animations
- Mobile-first responsive design

## 📝 Content Checklist

Before publishing, make sure to update:

- [ ] Email address for RSVP
- [ ] Phone number for contact
- [ ] Full venue address
- [ ] Actual Google Maps embed code
- [ ] RSVP deadline date
- [ ] Names of the couple (if desired)
- [ ] Any specific dietary information
- [ ] Hotel recommendations
- [ ] Gift registry details (if applicable)
- [ ] Add actual wedding photos (if available)

## 🌐 Language Versions

### English (index.html)
Primary language with full wedding details and information for international guests.

### Polish (pl.html)
Complete Polish translation, ideal for local Polish guests with all the same information.

### German (de.html)
German version for German-speaking guests, maintaining all features and details.

Each version is fully independent, so you can customize content differently per language if needed.

## 📱 Mobile Optimization

The website automatically adapts to mobile devices:
- Responsive layout adjusts to screen size
- Touch-friendly navigation
- Optimized font sizes for readability
- Compressed map height on mobile
- Hamburger-friendly design

## 💡 Tips

1. **Test on Multiple Devices**: View the site on phone, tablet, and desktop
2. **Check All Languages**: Make sure all three language versions are updated
3. **Test the Map**: Verify the Google Maps embed works correctly
4. **Print Test**: Some guests may want to print the schedule
5. **Add Photos Gradually**: Start with a few high-quality photos rather than many low-quality ones

## 🎉 Launch Checklist

- [ ] All content reviewed and updated
- [ ] All three languages checked for accuracy
- [ ] Google Maps working correctly
- [ ] Contact information verified
- [ ] Tested on mobile devices
- [ ] Tested on different browsers
- [ ] Images optimized (if added)
- [ ] Shared with family for review
- [ ] Domain name chosen (if applicable)
- [ ] Website deployed to hosting service

## 📞 Support

This is a static website template. For questions about:
- **Customization**: Edit the HTML/CSS files directly
- **Hosting**: Consult your hosting provider's documentation
- **Google Maps**: Visit [Google Maps Platform](https://developers.google.com/maps)

## 🍋 Enjoy Your Special Day!

May your wedding be as bright and joyful as a Mediterranean lemon grove! 🌟

---

**Created**: 2025  
**Theme**: Italian Summer Party with Lemons  
**Venue**: Dworek Przy Lesie Orangerie  
**Date**: April 10-12, 2026
