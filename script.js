function toggleMenu() {
  const links = document.querySelector('.nav-links');
  const icon = document.getElementById('menu-icon');
  const isOpen = links.style.display === 'flex';
  links.style.display = isOpen ? '' : 'flex';
  links.style.flexDirection = 'column';
  links.style.position = 'absolute';
  links.style.top = '68px';
  links.style.left = '0';
  links.style.right = '0';
  links.style.background = '#142257';
  links.style.padding = '16px 24px';
  links.style.gap = '16px';
  links.style.zIndex = '200';
  icon.innerHTML = isOpen ? `<svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3 12H21" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3 6H21" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3 18H21" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
` : `<svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18 6L6 18" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M6 6L18 18" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;
}

const reviews = [
  { text: '"Roof repairs can be a real headache, but HomePro makes it easy! Their roofing team turned my leaky roof into a rocksolid one. With their craftsmanship and the best materials, my house is now ready to weather any storm."', name: 'Kende Attila', stars: '★★★★☆', initials: 'KA' },
  { text: '"Incredible service! The plumbing team arrived within 2 hours and fixed a serious pipe leak that had been causing damage. Professional, courteous, and very fairly priced. Highly recommend HomePro!"', name: 'Maria Santos', stars: '★★★★★', initials: 'MS' },
  { text: '"The locksmith was fantastic — came out at 11pm when I was locked out. Quick, professional and very friendly. I\'ve since used HomePro for electrical work and been just as happy."', name: 'James Turner', stars: '★★★★★', initials: 'JT' }
];
let current = 0;

function changeReview(dir) {
  current = (current + dir + reviews.length) % reviews.length;
  document.getElementById('review-text').textContent = reviews[current].text;
  const starCount = (reviews[current].stars.match(/★/g) || []).length;
  document.querySelector('.review-stars').innerHTML = '<svg style="display:inline-block;vertical-align:middle;" width="16px" height="16px" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M16.0435 6.02106C16.6593 4.12579 19.3406 4.12579 19.9564 6.02106L21.5794 11.0159C21.8548 11.8635 22.6446 12.4374 23.5358 12.4374H28.7878C30.7806 12.4374 31.6091 14.9875 29.9969 16.1588L25.748 19.2458C25.027 19.7696 24.7253 20.6982 25.0007 21.5458L26.6237 26.5406C27.2395 28.4359 25.0703 30.0119 23.458 28.8406L19.2091 25.7536C18.4881 25.2298 17.5118 25.2298 16.7908 25.7536L12.5419 28.8406C10.9297 30.0119 8.7605 28.4359 9.37631 26.5406L10.9992 21.5458C11.2746 20.6982 10.973 19.7696 10.2519 19.2458L6.00305 16.1588C4.39084 14.9875 5.21941 12.4374 7.21221 12.4374H12.4641C13.3553 12.4374 14.1452 11.8635 14.4206 11.0159L16.0435 6.02106Z" 
    fill="url(#star-gradient)" 
    stroke="currentColor" 
    strokeWidth="1.5"
  />
</svg>'.repeat(starCount);
  document.getElementById('review-name').textContent = reviews[current].name;
  for (let i = 0; i < 3; i++) {
    const dot = document.getElementById('dot-' + i);
    dot.className = 'review-dot' + (i === current ? ' active' : '');
  }
}

function toggleFaq(el) {
  const item = el.parentElement;
  const isOpen = item.classList.contains('open');
  document.querySelectorAll('.faq-item').forEach(i => {
    i.classList.remove('open');
    i.querySelector('.faq-chevron').textContent = '▼';
  });
  if (!isOpen) {
    item.classList.add('open');
    el.querySelector('.faq-chevron').textContent = '▲';
  }
}