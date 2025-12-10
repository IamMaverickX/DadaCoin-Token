// script.js - Updated for the new structure
document.addEventListener('DOMContentLoaded', function(){
  // Remove any existing page numbers first
  const existingNumbers = document.querySelectorAll('.page-number:not(.auto-generated)');
  existingNumbers.forEach(el => el.remove());
  
  // Add page numbers to all pages
  const pages = document.querySelectorAll('.page');
  pages.forEach((p, i) => {
    // Skip if page already has a page number
    if (!p.querySelector('.page-number')) {
      const el = document.createElement('div');
      el.className = 'page-number auto-generated';
      el.style.cssText = 'text-align:right;color:#888;margin-top:30px;font-size:13px;padding-top:10px;border-top:1px solid #eee;';
      el.textContent = 'Page ' + (i + 1);
      p.appendChild(el);
    }
  });
});
