//chack if thers color in the local storge
let mainColor = localStorage.getItem("color-option");
if (mainColor !== null) {
  document.documentElement.style.setProperty("--main--color", mainColor);
  //add class active on the element with focus
  let allLi = document.querySelectorAll(".color-list li");
  allLi.forEach((ele) => {
    ele.classList.remove("active");
    if (ele.dataset.color === mainColor) {
      ele.classList.add("active");
    }
  });
} else {
  console.log("is empty");
}
//---------------------------------------------------------
//make setting
let setting = document.querySelector(".setting-box");
let addLi = document.querySelector(".toggle");
addLi.onclick = function () {
  setting.classList.toggle("open");
};
//------------------------------------------- - - - -
//swith color
let colorLi = document.querySelectorAll(".color-list li");
colorLi.forEach((li) => {
  li.addEventListener("click", (e) => {
    //set color on root
    document.documentElement.style.setProperty(
      "--main--color",
      e.target.dataset.color
    );
    //set color on local storge
    localStorage.setItem("color-option", e.target.dataset.color);
    //remove active class
    let activeLi = e.target.parentElement.querySelectorAll(".active");
    activeLi.forEach((element) => {
      element.classList.remove("active");
    });
    e.target.classList.add("active");
  });
});
//---------------------------------------------------------------------------
// Backgroung the landing
let landing = document.querySelector(".landing-page");
let left = document.querySelector(".left");
let right = document.querySelector(".right");
// array of img
let imgLanding = [
  "landing1.jpg",
  "landing2.jpg",
  "landing3.jpg",
  "landing4.jpg",
];
setInterval(() => {
  let rendomNumber = Math.floor(Math.random() * imgLanding.length);
  landing.style.backgroundImage =
    'url("css/image/' + imgLanding[rendomNumber] + '")';
}, 3000);
left.onclick = function () {
  let rendomNumber = Math.floor(Math.random() * imgLanding.length);
  landing.style.backgroundImage =
    'url("css/image/' + imgLanding[rendomNumber] + '")';
};
right.onclick = function () {
  let rendomNumber = Math.floor(Math.random() * imgLanding.length);
  landing.style.backgroundImage =
    'url("css/image/' + imgLanding[rendomNumber] + '")';
};
// ------------------------------------------------------------------------------
// skills
let ourSkill = document.querySelector(".skills");
window.onscroll = function () {
  // دى بتجيب الطول الى فوق skill
  let skillOffsetTop = ourSkill.offsetTop;
  //ده الطول بتاع skill
  let skillsOuterHight = ourSkill.offsetHeight;
  //window height
  let windowHeight = this.innerHeight;
  //window scroll top
  let windowScrollTop = this.pageYOffset;
  let add = skillOffsetTop + skillsOuterHight;
  let sum = add - windowHeight;
  if (windowScrollTop > sum) {
    let allSpan = document.querySelectorAll(".skill-box .skill-progress span");
    allSpan.forEach((skill) => {
      skill.style.width = skill.dataset.progress;
    });
  }
};
// -----------------------------------------------------------------------------
//creat popup with the image
let ourGallery = document.querySelectorAll(".galary img");
ourGallery.forEach((img) => {
  img.addEventListener("click", (e) => {
    //creat overlay element
    let overlay = document.createElement("div");
    overlay.className = "popup-overlay";
    document.body.appendChild(overlay);
    //creat the popup box
    let popupBox = document.createElement("div");
    popupBox.className = "popup-box";
    let popupImage = document.createElement("img");
    //add hwading the image
    if (img.alt !== null) {
      let imgHeading = document.createElement("h3");
      let imgText = document.createTextNode(img.alt);
      imgHeading.appendChild(imgText);
      popupBox.appendChild(imgHeading);
    }
    popupImage.src = img.src;
    popupBox.appendChild(popupImage);
    document.body.appendChild(popupBox);
    // create the close span
    let closeBotton = document.createElement("span");
    let closeText = document.createTextNode("X");
    closeBotton.appendChild(closeText);
    closeBotton.className = "close-botton";
    popupBox.appendChild(closeBotton);
  });
});
// close popup
document.addEventListener("click", (ele) => {
  if (ele.target.className === "close-botton") {
    document.querySelector(".popup-box").remove();
    document.querySelector(".popup-overlay").remove();
  }
});

//-----------------------------------------------------------------
