const WHATSAPP_NUMBER = "923000000000"; // Replace with the real WhatsApp/local SIM number, without + or spaces.
const CALL_NUMBER = "+923000000000";      // Replace with the same real local SIM number.

const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav-links");
menuToggle?.addEventListener("click", () => nav.classList.toggle("open"));
document.querySelectorAll(".nav-links a").forEach(a => a.addEventListener("click", () => nav.classList.remove("open")));
document.getElementById("year").textContent = new Date().getFullYear();

function openWhatsApp(message) {
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank", "noopener,noreferrer");
}

document.querySelectorAll(".whatsapp-link").forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    openWhatsApp(link.dataset.message || "Hello, I would like to enquire about your services.");
  });
});

document.querySelectorAll(".service-link").forEach(card => {
  card.setAttribute("role", "button");
  card.addEventListener("click", e => {
    e.preventDefault();
    openWhatsApp(card.dataset.message);
  });
  card.addEventListener("keydown", e => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      openWhatsApp(card.dataset.message);
    }
  });
});

const form = document.getElementById("contactForm");
form?.addEventListener("submit", e => {
  e.preventDefault();
  const data = new FormData(form);
  const message = `Hello, I would like to enquire about ${data.get("service")}.\n\nName: ${data.get("name")}\nEmail: ${data.get("email")}\nMessage: ${data.get("message")}`;
  openWhatsApp(message);
  document.getElementById("formSuccess").textContent = "Opening WhatsApp with your inquiry…";
  document.getElementById("formSuccess").style.display = "block";
});

const callDialog = document.getElementById("callDialog");
const callToggle = document.getElementById("callToggle");
const callClose = document.getElementById("callClose");
const callBackdrop = document.getElementById("callBackdrop");
const callLink = document.querySelector(".call-box a");

if (callLink) callLink.href = `tel:${CALL_NUMBER}`;
function toggleCallDialog(show) {
  callDialog?.classList.toggle("show", show);
  callDialog?.setAttribute("aria-hidden", String(!show));
  document.body.classList.toggle("dialog-open", show);
}
callToggle?.addEventListener("click", () => toggleCallDialog(true));
callClose?.addEventListener("click", () => toggleCallDialog(false));
callBackdrop?.addEventListener("click", () => toggleCallDialog(false));
document.addEventListener("keydown", e => {
  if (e.key === "Escape") toggleCallDialog(false);
});
