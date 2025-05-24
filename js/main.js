console.log("EduFocus site loaded.");

// Track outbound links
const outboundLinks = document.querySelectorAll('a[target="_blank"]');
outboundLinks.forEach(link => {
  link.addEventListener('click', () => {
    console.log("Outbound link clicked:", link.href);
  });
});

// Optional: Scroll to top button
// Add your button in HTML: <button id="scrollToTop">Top</button>
const scrollToTopBtn = document.getElementById("scrollToTop");
if (scrollToTopBtn) {
  scrollToTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}
