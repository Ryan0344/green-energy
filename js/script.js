document.addEventListener("DOMContentLoaded", () => {

  // Hamburger toggle JS

  const hamburger = document.querySelector(".hamburger");
  const navMenu = document.querySelector(".nav-menu");

  hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("active");
  });

  // Load your images on page-load

  const imagesList = [
    "./img/imageOne.jpg",
    "./img/imageTwo.jpg",
    "./img/imageThree.jpg"
  ];
  imagesList.forEach(src => {
    const img = new Image();
    img.src = src;
  });

   /* Get all buttons in a NODE LIST of buttons (array like structure) */

  const buttons = document.querySelectorAll(".controls button");
  const content = document.querySelector("#content");

   /* Complete your resource-object that will store the dynamic content.
    Resource object should 3 sub-objects. Give your sub-objects
    meaningful names. Every sub-object should have the following
    properties headingContent, bodyText, imgUrl and imgAlt. */

   /* Get the reference to your HTML-container that will be dynamically loaded from the resource-object. */

  const contentData = {
    solar: {
      headingContent: "Solar Power at Home",
      bodyText: "Install small-scale solar panels with financing options and rebates to reduce energy costs.",
      imgUrl: "./img/imageOne.jpg",
      imgAlt: "Solar panels"
    },
    community: {
      headingContent: "Community Energy Projects",
      bodyText: "Join community solar or wind projects to access green energy without installing equipment.",
      imgUrl: "./img/imageTwo.jpg",
      imgAlt: "Community wind farm"
    },
    efficiency: {
      headingContent: "Energy Efficiency First",
      bodyText: "Upgrade insulation, lighting, and appliances to reduce energy consumption affordably.",
      imgUrl: "./img/imageThree.jpg",
      imgAlt: "Energy efficient home"
    }
   };
 
    /*Use the element-object method setAttribute() to set the id active-button to the currently clicked button. */

    function handleSelection(event) {
    buttons.forEach(btn => btn.removeAttribute("id"));
    event.target.setAttribute("id", "active-button");

    const type = event.target.dataset.type;
    const data = contentData[type];
 
    /* 
        Use conditional and event-object to check which button is clicked
        and based on that, create HTML with the data inside the backticks:
        `<h1>${headingContent}</h1>
         <img src="${imgUrl}" alt="${imgAlt}">
         <p>${bodyText}</p>`
        Assign this content to to your HTML-container that will 
        be dynamically loaded (you already got the reference to 
        this container before you started the function handleSelection) */ 

    content.innerHTML = `
      <h1>${data.headingContent}</h1>
      <img src="${data.imgUrl}" alt="${data.imgAlt}">
      <p>${data.bodyText}</p>
    `;
  }

   /* 
    Close your handleSelection function here. */  
    
    /* 
    Register all buttons to click event. The event-handler handleSelection will listen 
    for this event to happen. */ 
    
  buttons.forEach(button => button.addEventListener("click", handleSelection));
});
