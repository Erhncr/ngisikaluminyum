const fs = require('fs');
const path = require('path');

const logos = [
  {
    name: 'arcelik',
    width: 180,
    height: 60,
    viewBox: '0 0 180 60',
    path: 'M40 30h100M30 20h120M30 40h120', // Simple horizontal lines
  },
  {
    name: 'bosch',
    width: 160,
    height: 60,
    viewBox: '0 0 160 60',
    path: 'M30 30a20 20 0 0 1 100 0a20 20 0 0 1 -100 0', // Circle
  },
  {
    name: 'siemens',
    width: 180,
    height: 60,
    viewBox: '0 0 180 60',
    path: 'M40 20l100 0l-50 30l-50 -30', // Triangle
  },
  {
    name: 'eczacibasi',
    width: 170,
    height: 60,
    viewBox: '0 0 170 60',
    path: 'M35 20h100v20h-100z', // Rectangle
  },
  {
    name: 'tofas',
    width: 150,
    height: 60,
    viewBox: '0 0 150 60',
    path: 'M35 40c30-40 50-40 80 0', // Arc
  },
];

const dir = path.join(process.cwd(), 'public', 'referanslar');

// Create directory if it doesn't exist
if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir, { recursive: true });
}

// Generate SVG files
logos.forEach(logo => {
  const svg = `<svg width="${logo.width}" height="${logo.height}" viewBox="${logo.viewBox}" xmlns="http://www.w3.org/2000/svg">
    <path d="${logo.path}" stroke="black" stroke-width="2" fill="none"/>
  </svg>`;

  fs.writeFileSync(path.join(dir, `${logo.name}.svg`), svg);
}); 