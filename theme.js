const themeButton = document.getElementById("theme-toggle");
const savedTheme = localStorage.getItem("theme");

let currentTheme = "light";

function setTheme(theme) {
    currentTheme = theme;
    document.documentElement.setAttribute("data-theme", theme);

    if(theme === "dark") {
        themeButton.textContent = "Switch to Light Mode";
    } else {
        themeButton.textContent = "Switch to Dark Mode";
    }
}

function handleThemeClick() {
     if (currentTheme === "light") {
        setTheme("dark");
    } else {
        setTheme("light");
    }
    localStorage.setItem("theme", currentTheme);
}