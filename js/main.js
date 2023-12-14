if (localStorage.getItem("cloak") == "dragpunnn") {
  document.querySelector("link[rel='icon']").href = "/imgs/Logo.png";
  document.title = "Dragpunnn";
  console.log("Dragpunnn")
} 

if (localStorage.getItem("cloak") == "classroom") {
  document.querySelector("link[rel='icon']").href = "/imgs/cloaks/classroom.png";
  document.title = "Classroom";
  console.log("classroom")
} 

if (localStorage.getItem("cloak") == "canvas") {
  document.querySelector("link[rel='icon']").href = "/imgs/cloaks/canvas.png";
  document.title = "Canvas";
  console.log("canvas")
} 

if (localStorage.getItem("cloak") == "ps") {
  document.querySelector("link[rel='icon']").href = "/imgs/cloaks/powerschool.png";
  document.title = "Grades and Attendance";
  console.log("powerschool")
}

if (localStorage.getItem("cloak") == "google") {
  document.querySelector("link[rel='icon']").href = "/imgs/cloaks/google.png";
  document.title = "Google";
  console.log("google")
}

if (localStorage.getItem("cloak") == "drive") {
  document.querySelector("link[rel='icon']").href = "/imgs/cloaks/drive.png";
  document.title = "My Drive - Google Drive";
  console.log("drive")
}
    
if (localStorage.getItem("panic") == "on") {
  enablePanic();
}

// Function to enable panic
function enablePanic() {
  document.addEventListener('keydown', event => {
    if (event.keyCode == 192) {
      window.open("https://classroom.google.com/h", "_self");
    }
  });

  // Change button color to indicate enabled state
  document.getElementById("panicButton").style.backgroundColor = "green";

  console.log('panic is enabled');
}

// Event listener for button click
document.getElementById("panicButton").addEventListener('click', () => {
  // Toggle panic state
  if (localStorage.getItem("panic") == "on") {
    localStorage.removeItem("panic");
    // Reset button color
    document.getElementById("panicButton").style.backgroundColor = "";
  } else {
    localStorage.setItem("panic", "on");
    enablePanic();
  }

if (localStorage.getItem("panic") == "off") {
  console.log('no panic');
} 

window.addEventListener('DOMContentLoaded', () => {

  if (localStorage.getItem("theme") === "dark") {
    document.body.setAttribute("class", "");
    console.log('dark');
  }
  
  if (localStorage.getItem("theme") === "light") {
    document.body.setAttribute("class", "light");
    console.log('light');
  }
  
  if (localStorage.getItem("theme") === "amoled") {
    document.body.setAttribute("class", "amoled");
    console.log('amoled');
  }
});
