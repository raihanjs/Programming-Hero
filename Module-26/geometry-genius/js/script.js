const claculationContainer = document.getElementById("calculation-container");

// Calculate area function
document.body.addEventListener("click", function (event) {
  // Check if it is calculate button or not
  let classAttribute = event.target.getAttribute("class");
  if (classAttribute.includes("calculation-btn")) {
    // get targeted figure name
    const figure = event.target.parentNode.getElementsByTagName("h3");
    const figureName = figure[0].innerText.toLowerCase();
    // Get all input fileds
    let inputs = event.target.parentNode.querySelectorAll(".input-field");

    // Calculation for different figure
    let calculateArea;
    switch (figureName) {
      case "triangle":
      case "rhombus":
      case "pentagon": {
        calculateArea = 0.5;
        break;
      }
      case "ellipse": {
        calculateArea = 3.1416;
        break;
      }
      default:
        calculateArea = 1;
    }

    for (let input of inputs) {
      if (input.value === "") alert("Please add element");
      calculateArea = calculateArea * parseFloat(input.value);

      //   Reset input fields
      input.value = "";
    }

    if (calculateArea) {
      // show calculateArea to UI
      let newLi = document.createElement("li");
      newLi.innerHTML = `
  
              <li class="flex justify-between items-center gap-2 mt-3">
                <p class="capitalize">${figureName}</p> 
                <p> <span class="cal-num">${calculateArea}</span> <span class="cal-const">cm</span><sup>2</sup></p> 
                
                <button class="text-white bg-cyan-600 py-1 px-4 text-sm rounded-md convert">Convert to m <sup>2</sup></button>
              </li>
      `;
      claculationContainer.appendChild(newLi);
    }
  }
});

// cm to m to cm function
document.body.addEventListener("click", function (event) {
  let convertBtn = event.target.getAttribute("class");
  if (convertBtn.includes("convert")) {
    let getCalConst = event.target.parentNode.querySelector(".cal-const");
    let getNumber = event.target.parentNode.querySelector(".cal-num");
    let getNumberFloat = parseFloat(getNumber.innerText);
    let convertToMeter = getNumberFloat / 100;
    // Show converted data to ui
    getCalConst.innerText = "m";
    getNumber.innerText = convertToMeter;
    event.target.setAttribute("disabled", true);
  }
});
