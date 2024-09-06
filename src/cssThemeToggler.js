console.log("toggler running");

let themes = [
    {
        name: "dark",
        properties: {   
            backgroundColour: "black",
            fontColour: "white",
            'theme-100': "#4641d1"
        }
    },
    {
        name: "light",
        properties: {   
            backgroundColour: "white",
            fontColour: "black",
            'theme-100': "#4641d1"
        }
    }
];

function getChosenTheme(){
    let foundTheme = localStorage.getItem("theme");
    console.log(foundTheme);
    return foundTheme;
};

function setChosenTheme(newThemeName){
    localStorage.setItem("theme", newThemeName);

};
if (getChosenTheme() == null) {
    const darkThemeMq = window.matchMedia("(prefers-color-scheme; dark)")
    if (darkThemeMq.matches) {
        setChosenTheme("dark");
    } else {
        setChosenTheme("light");
    }
}


function toggleTheme (){
    if (getChosenTheme() == "dark") {
        setChosenTheme("light");
    }else {
        setChosenTheme("dark");
    }
}

let themeToggleButton = document.getElementById("themeToggle");
themeToggleButton.onclick = toggleTheme;

function updateCSSVariables() {
    
}


let rootElement = document.querySelector(":root");

function getVariablesFromCSS(){
    console.log(rootElement);

    // console.log(document.documentElement.style.getPropertyValue("--backgroundColour"));

    let rootStyles = getComputedStyle(rootElement);

    console.log(rootStyles.getPropertyValue("--backgroundColour"));
}

getVariablesFromCSS();

