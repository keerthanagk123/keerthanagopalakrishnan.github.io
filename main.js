// Custom cursor
var cursor = document.getElementById('cursor');
var ring = document.getElementById('cursorRing');
var mx = 0, my = 0, rx = 0, ry = 0;

document.addEventListener('mousemove', function(e) {
  mx = e.clientX;
  my = e.clientY;
  cursor.style.left = mx + 'px';
  cursor.style.top = my + 'px';
});

function animateRing() {
  rx += (mx - rx) * 0.12;
  ry += (my - ry) * 0.12;
  ring.style.left = rx + 'px';
  ring.style.top = ry + 'px';
  requestAnimationFrame(animateRing);
}
animateRing();

document.querySelectorAll('a, button').forEach(function(el) {
  el.addEventListener('mouseenter', function() {
    cursor.style.width = '20px';
    cursor.style.height = '20px';
    cursor.style.background = '#fff';
  });
  el.addEventListener('mouseleave', function() {
    cursor.style.width = '12px';
    cursor.style.height = '12px';
    cursor.style.background = '#00e5ff';
  });
});

// Scroll reveal
var observer = new IntersectionObserver(function(entries) {
  entries.forEach(function(e) {
    if (e.isIntersecting) {
      e.target.style.opacity = '1';
      e.target.style.transform = 'translateY(0)';
      e.target.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.skill-card, .project-card, .pub-item, .edu-card, .timeline-item').forEach(function(el) {
  el.style.opacity = '0';
  el.style.transform = 'translateY(20px)';
  observer.observe(el);
});

// Build email links safely so Cloudflare can't scramble them
var user = 'gopalake';
var domain = 'oregonstate.edu';
var email = user + '@' + domain;

document.querySelectorAll('.email-link').forEach(function(el) {
  el.textContent = email;
  el.href = 'mailto:' + email;
});

document.querySelectorAll('.email-text').forEach(function(el) {
  el.textContent = email;
});
