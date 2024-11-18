let isLoggedIn = false;

export function toggleLoginLogout() {
    isLoggedIn = !isLoggedIn;
    const loginIcon = document.getElementById("login-icon");
    loginIcon.textContent = isLoggedIn ? "🔓" : "🔑";
    loginIcon.title = isLoggedIn ? "Logout" : "Login";
}
