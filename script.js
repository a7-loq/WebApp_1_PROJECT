let toggle = () => {
    let element = document.getElementById("mylabel");

    if (element.style.color === "teal") {
       element.style.color = "tomato";
    } else {
       element.style.color = "teal";
    }
  }