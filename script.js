// Dark/Light Mode Toggle
const toggleBtn = document.getElementById('theme-toggle');
toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  toggleBtn.textContent = document.body.classList.contains('dark') 
    ? "☀ Light Mode" 
    : "🌙 Dark Mode";
});

// Contact Form with Formspree
const FORMSPREE_ENDPOINT = "https://formspree.io/f/your_form_id"; 
// Replace with your real endpoint from formspree.io

const form = document.getElementById("contact-form");
form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const data = new FormData(form);
  const response = await fetch(FORMSPREE_ENDPOINT, {
    method: "POST",
    body: data,
    headers: { Accept: "application/json" }
  });
  if (response.ok) {
    alert("✅ Message sent successfully!");
    form.reset();
  } else {
    alert("❌ There was an error. Try again later.");
  }
});
