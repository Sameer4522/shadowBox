let element = document.getElementById("element");
let code = document.getElementById("code");
let inputs = document.querySelectorAll(".sliders input");

inputs.forEach((inp) => inp.addEventListener("input", generateShadow));

function generateShadow() {
  let hShadow = document.getElementById("h-shadow").value;
  let vShadow = document.getElementById("v-shadow").value;
  let blurRadius = document.getElementById("blur-radius").value;
  let spreadRadius = document.getElementById("spread-radius").value;
  let shadowColor = document.getElementById("shadow-color").value;
  let shadowColorOpacity = document.getElementById(
    "shadow-color-opacity"
  ).value;
  let shadowInset = document.getElementById("shadow-inset").checked;

  //Using ternary operator to check if inset checkbox is checked or not.
  //If checked we add the inset prefix
  //Else no inset prefix is added
  let boxShadow = shadowInset
    ? `inset ${hShadow}px ${vShadow}px ${blurRadius}px ${spreadRadius}px ${hexToRGBA(
        shadowColor,
        shadowColorOpacity
      )}`
    : `${hShadow}px ${vShadow}px ${blurRadius}px ${spreadRadius}px ${hexToRGBA(
        shadowColor,
        shadowColorOpacity
      )}`;

  element.style.boxShadow = boxShadow;
  code.textContent = `box-shadow: ${boxShadow}`;
}

//convert hex value to rgba
let hexToRGBA = (shadowColor, shadowColorOpacity) => {
  let r = parseInt(shadowColor.substr(1, 2), 16);
  let g = parseInt(shadowColor.substr(3, 2), 16);
  let b = parseInt(shadowColor.substr(5, 2), 16);

  return `rgba(${r},${g},${b},${shadowColorOpacity})`;
};

// Copy code from input
let copyCode = () => {
  code.select();
  code.setSelectionRange(0, 99999);
  navigator.clipboard.writeText(code.value);
  alert("Code copied to Clipboard");
};

// Call generateShadow function on every page load
window.onload = generateShadow();
