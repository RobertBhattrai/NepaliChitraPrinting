//For dark mode

var icon = document.getElementById("icon");
var logo = document.getElementById("logo");
icon.onclick = function () {
  //Adding dark-theme class to our body.
  document.body.classList.toggle("light-theme");
  //putting trasitionDuration of 2s in body tag
  document.body.style.transitionDuration = "0.1s";
  //Changing moon icon to Sun
  //Also changing our Logo as per the theme
  if (document.body.classList.contains("light-theme")) {
    icon.src = "sun.png";
    logo.src = "light-logo.png";
  } else {
    icon.src = "moon.png";
    logo.src = "dark-logo.png";
  }
};

//For Image Slider//
const slides = document.querySelectorAll(".slide");
var counter = 0;

slides.forEach((slide, index) => {
  slide.style.left = `$(index * 100)%`;
});

const goNext = () => {
  if (counter < slides.length - 1) {
    counter++;
    slideImage();
  }
};
const goPrev = () => {
  if (counter != 0) {
    counter--;
    slideImage();
  }
};

const slideImage = () => {
  slides.forEach((slide) => {
    slide.style.transform = `translateX(-${counter * 100.57}%)`;
  });
};

//For contact submission form//
function popup() {
  //Storing the value from our input box in their respective variable
  var Name = document.getElementById("Name").value;
  var Email = document.getElementById("Email").value;
  var Number = document.getElementById("number").value;
  var Gender = document.getElementById("Gender").value;
  var Message = document.getElementById("Message").value;

  //Creating a variable CustomerInfo that store all values from Form in suitable formate
  var CustomerInfo =
    "Full Name : " + Name + "\n" +
    "Email : " + Email + "\n" +
    "Mobile Number : " + Number + "\n" +
    "Gender : " + Gender + "\n" +
    "Message : " + Message;

  if (
    (Name == "" || Email == "" || Number == "" || Gender == "", Message == "")
  ) {
    alert("Please Complete your form before submitting");
  } else {
    //Creating a popup that will display the CustomerInfo.
    alert("Thank you for contacting us.\n" + CustomerInfo);
  }
}

// This function toggles the visibility of additional content when a "Learn More" button is clicked
function toggleDetail() {
  // Select all elements with the class "learn-more" and store them in the learnMore variable
  let learnMore = document.querySelectorAll(".learn-more");
  
  // Select all elements with the class "show-more" and store them in the showMore variable
  let showMore = document.getElementsByClassName("show-more");

  // Iterate over each "Learn More" button using forEach
  learnMore.forEach(function (currentBtn, index) {
    // Add a click event listener to each "Learn More" button
    currentBtn.addEventListener("click", () => {
      // Toggle the visibility of the corresponding "show-more" element based on its index
      showMore[index].classList.toggle("showmore-on");

      // Check if the "showmore-on" class is present in the "show-more" element
      let checkingClass = showMore[index].classList.contains("showmore-on");

      // Update the text content of the clicked "Learn More" button based on the class presence
      if (checkingClass == true) {
        learnMore[index].innerHTML = "Show Less";
      } else {
        learnMore[index].innerHTML = "Learn more";
      }
    });
  });
}

// Call the toggleDetail function to set up the event listeners
toggleDetail();
