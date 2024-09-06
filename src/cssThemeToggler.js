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

};

function setChosenTheme(newThemeName){

};

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

