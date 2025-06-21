// document.addEventListener("DOMContentLoaded", function () {
//     alert("Welcome to my portfolio!");
// });
const toggleButton = document.getElementById("dark-mode-toggle");
toggleButton.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
});
const nameText = "Aashita Jambhulkar";
let i = 0;
function typeEffect() {
    if (i < nameText.length) {
        document.getElementById("typed-name").innerHTML += nameText.charAt(i);
        i++;
        setTimeout(typeEffect, 100);
    }
}
typeEffect();

// const skills = document.querySelectorAll(".progress");

// window.addEventListener("scroll", function () {
//     skills.forEach(skill => {
//         let width = skill.style.width;
//         skill.style.width = "0"; 
//         setTimeout(() => {
//             skill.style.width = width;
//         }, 500);
//     });
// });
document.addEventListener("DOMContentLoaded", () => {
    const skills = document.querySelectorAll(".progress");

    skills.forEach(skill => {
        if (!skill.classList.contains("animated")) {  // Run only once
            let width = skill.getAttribute("data-width");
            skill.style.width = width;  // Animate progress bar
            skill.classList.add("animated");  // Stop future animations
        }
    });
});


const darkModeBtn = document.getElementById("darkModeBtn");


darkModeBtn.addEventListener("click", () => {
    
    document.body.classList.toggle("dark-mode");
});

function openPopup(group) {
    let images = [];

    if (group === 1) {
        images = ["./accet/img/c_cpp.jpg"];
    } else if (group === 2) {
        images = ["./accet/img/c1.jpg", "./accet/img/c2.jpg"];
    } else if (group === 3) {
        images = ["./accet/img/g1.jpg", "./accet/img/g2.jpg","./accet/img/g3.jpg"];
    } else if (group === 4) {
        images = ["./accet/img/ncc1.jpg", "./accet/img/ncc2.jpg"];
    } else if (group === 5) {
        images = ["./accet/img/pp.jpg"];
    }else if (group === 6) {
        images = ["./accet/img/cet.jpg"];
    }else if (group === 7) {
        images = ["./accet/img/m1.jpg","./accet/img/m2.jpg"];
    }

    // Select the popup and image container
    const popup = document.getElementById("popup");
    const popupImagesContainer = document.querySelector(".popup-images");

    // Clear old images
    popupImagesContainer.innerHTML = "";

    // Add new images
    images.forEach(imgSrc => {
        const img = document.createElement("img");
        img.src = imgSrc;
        img.alt = "Certificate";
        popupImagesContainer.appendChild(img);
    });

    // Show the popup
    popup.style.display = "flex";
}

// Close popup
function closePopup() {
    document.getElementById("popup").style.display = "none";
}



