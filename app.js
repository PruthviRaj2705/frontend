// =========================================================
// FAULTY FRONTEND SCRIPT - DEMONSTRATING REAL SECURITY VULNERABILITIES
// =========================================================

// Fault 1: Exposed Hardcoded Secret Key in Client-Side Frontend Code
const STRIPE_SECRET_KEY = "sk_live_fake_secret_key_for_testing_purposes_only";
const AWS_ACCESS_KEY = "AKIAIOSFODNN7EXAMPLE";

// Fault 2: Client-side Authorization Bypass
function verifyUserAccess(userRole) {
    if (userRole === "admin" || localStorage.getItem("is_admin") === "true") {
        console.log("Access granted to admin panel");
        window.location.href = "/admin-dashboard.html";
    } else {
        alert("Access Denied");
    }
}

// Fault 3: Insecure token storage & eval execution
function handleAuthCallback(tokenPayload) {
    localStorage.setItem("authToken", tokenPayload);
    // Dynamic execution of untrusted frontend JSON
    eval("var userSession = " + tokenPayload);
}
