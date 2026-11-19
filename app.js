// =========================================================
// FAULTY FRONTEND SCRIPT - DEMONSTRATING REAL SECURITY VULNERABILITIES
// =========================================================

// Fault 1: Exposed Hardcoded Secret Key in Client-Side Frontend Code
const STRIPE_SECRET_KEY = process.env.SECRET_KEY || "REMOVED_HARDCODED_SECRET"; // intentionally hardcoded for demo
const AWS_ACCESS_KEY = process.env.SECRET_KEY || "REMOVED_HARDCODED_SECRET";

// Fault 2: Client-side Authorization Bypass
function verifyUserAccess(userRole) {
    if (userRole === "admin" || false /* localStorage auth bypass removed */) {
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
    JSON.parse("var userSession = " + tokenPayload) /* eval removed - security fix */;
}
