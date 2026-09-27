const fs = require('fs');

// 1. In Hero.tsx: wrap the scaled image in an overflow-hidden container
let hero = fs.readFileSync('src/components/home/Hero.tsx', 'utf8');
hero = hero.replace('className="absolute inset-0 -z-20"', 'className="absolute inset-0 -z-20 overflow-hidden"');
fs.writeFileSync('src/components/home/Hero.tsx', hero);

// 2. In OmVisualStory.tsx: wrap in overflow-hidden
let omStory = fs.readFileSync('src/components/home/OmVisualStory.tsx', 'utf8');
omStory = omStory.replace('className="absolute inset-0 -z-10"', 'className="absolute inset-0 -z-10 overflow-hidden"');
fs.writeFileSync('src/components/home/OmVisualStory.tsx', omStory);

// 3. In PageHeader.tsx: wrap in overflow-hidden
let pageHeader = fs.readFileSync('src/components/ui/PageHeader.tsx', 'utf8');
pageHeader = pageHeader.replace('className="absolute inset-0 -z-20"', 'className="absolute inset-0 -z-20 overflow-hidden"');
fs.writeFileSync('src/components/ui/PageHeader.tsx', pageHeader);

// 4. In QualitySafetyPage: wrap in overflow-hidden
let qs = fs.readFileSync('src/app/quality-safety/page.tsx', 'utf8');
qs = qs.replace('className="absolute inset-0 -z-20"', 'className="absolute inset-0 -z-20 overflow-hidden"');
fs.writeFileSync('src/app/quality-safety/page.tsx', qs);

// 5. In ServicesPage: wrap in overflow-hidden
let s = fs.readFileSync('src/app/services/page.tsx', 'utf8');
s = s.replace('className="absolute inset-0 -z-20"', 'className="absolute inset-0 -z-20 overflow-hidden"');
fs.writeFileSync('src/app/services/page.tsx', s);

// 6. In SolarOmPage: wrap in overflow-hidden
let som = fs.readFileSync('src/app/solar-om/page.tsx', 'utf8');
som = som.replace('className="absolute inset-0 -z-20"', 'className="absolute inset-0 -z-20 overflow-hidden"');
fs.writeFileSync('src/app/solar-om/page.tsx', som);

// 7. In Footer.tsx: wrap the glow in an overflow-hidden wrapper or constrain it
let footer = fs.readFileSync('src/components/layout/Footer.tsx', 'utf8');
footer = footer.replace('className="relative border-b border-white/10 py-20 lg:py-32"', 'className="relative border-b border-white/10 py-20 lg:py-32 overflow-hidden"');
footer = footer.replace('w-[600px] h-[300px]', 'max-w-full w-[600px] h-[300px]');
fs.writeFileSync('src/components/layout/Footer.tsx', footer);

console.log('Fixed potential container overflows');
