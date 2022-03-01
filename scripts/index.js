const loginModal = document.querySelector(".login-modal");
const getInTouchModal = document.querySelector(".get-in-touch");

/***handle login modal */
function handleLogin(e) {
  loginModal.style.display = "block";
}

function closeLogin(e) {
  e.preventDefault();
  loginModal.style.display = "none";
}

/***handle contact us modal */
function handleContactUs(e) {
  getInTouchModal.style.display = "block";
}

function closeContactUs(e) {
  e.preventDefault();
  getInTouchModal.style.display = "none";
}