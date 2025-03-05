document.getElementById("login-form").addEventListener("submit", function (event) {
    event.preventDefault();

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    if (email === "admin@gmail.com" && password === "123456") {
        // Simulating login success (You can replace this with backend authentication)
        localStorage.setItem("user", email);
        alert("Login Successful!");
        window.location.href = "/Users/dhritiraj/Desktop/PSB project/index.html";  // Redirect to homepage
    } else {
        alert("Invalid credentials! Please try again.");
    }
});

// Google Sign-In
function handleCredentialResponse(response) {
    console.log("Google JWT Token: ", response.credential);

    // Decode Google JWT Token to get user details
    const userData = parseJwt(response.credential);

    console.log("User Info:", userData);

    // Store user details (for session management)
    localStorage.setItem("user", JSON.stringify(userData));

    // Redirect to homepage after Google login
    window.location.href = "/Users/dhritiraj/Desktop/PSB project/index.html";
}

// Function to decode Google JWT Token
function parseJwt(token) {
    try {
        return JSON.parse(atob(token.split('.')[1]));
    } catch (e) {
        return null;
    }
}

// Load Google Sign-In Button
window.onload = function () {
    google.accounts.id.initialize({
        client_id: "1020595344805-rcj8hvsfhdkrd3uvjb1q6nrcspd16pab.apps.googleusercontent.com",
        callback: handleCredentialResponse
    });

    google.accounts.id.renderButton(
        document.querySelector(".g_id_signin"),  // Attach Google Sign-In Button
        { theme: "outline", size: "large" }  // Button Styling
    );
};
