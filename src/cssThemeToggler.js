console.log("toggler running");

let rootElement = document.querySelector(":root");
let themeToggleButton = document.getElementById("themeToggle");

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
    updateCSSVariables();

};
if (getChosenTheme() == null) {
    const darkThemeMq = window.matchMedia("(prefers-color-scheme; dark)")
    if (darkThemeMq.matches) {
        setChosenTheme("dark");
        
    } else {
        setChosenTheme("light");
        
    }
} else {
    updateCSSVariables();
}

function updateButtonText( ){
    if (getChosenTheme() == "dark"){
        themeToggleButton.innerText = "Dark"
    } else {
        themeToggleButton.innerText = "Light"
    }
}


function toggleTheme (){
    if (getChosenTheme() == "dark") {
        setChosenTheme("light");
        
    }else {
        setChosenTheme("dark");
        
    }
}

themeToggleButton.onclick = toggleTheme;

function updateCSSVariables() {
    let matchingTheme = themes.find(themeObject => themeObject.name == getChosenTheme());

    Object.keys(matchingTheme.properties).forEach(cssProperty => {
        rootElement.style.setProperty(`--${cssProperty}`, matchingTheme.properties[cssProperty])
    })

    updateButtonText();
    
}




function getVariablesFromCSS(){
    console.log(rootElement);

    // console.log(document.documentElement.style.getPropertyValue("--backgroundColour"));

    let rootStyles = getComputedStyle(rootElement);

    console.log(rootStyles.getPropertyValue("--backgroundColour"));
}

getVariablesFromCSS();

