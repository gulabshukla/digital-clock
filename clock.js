let liveTime = () => {
  var dateTime = new Date();
  var hrs = dateTime.getHours();
  var min = dateTime.getMinutes();
  var sec = dateTime.getSeconds();
  var zone = document.getElementById("zone");
  hrs >= 12 ? (zone.innerHTML = "PM") : (zone.innerHTML = "AM");
  if (hrs < 12) {
    var greeting = "Good Morning !";
  }
  if (hrs >= 12 && hrs <= 18) {
    var greeting = "Good Afternoon !";
  }
  if (hrs >= 18 && hrs <= 24) {
    var greeting = "Good Evening !";
  }
  document.getElementById("greet-text").innerHTML = greeting;
  if (hrs > 12) {
    hrs -= 12;
  }
  document.getElementById("hours").innerHTML = hrs;
  document.getElementById("minutes").innerHTML = min;
  document.getElementById("seconds").innerHTML = sec;
};

setInterval(liveTime);

const button = document.getElementById("btn");
button.addEventListener("click", () => {
    buttonFunctionality();
});

let buttonFunctionality = () => {
    textDisplay();
    changeDisplay();
}
function textDisplay() {
  let wakeValue = document.getElementById("wakeValue").value;
  document.getElementById("displayWake").innerHTML = wakeValue;
  let lunchValue = document.getElementById("lunchValue").value;
  document.getElementById("displayLunch").innerHTML = lunchValue;
  let napValue = document.getElementById("napValue").value;
  document.getElementById("displayNap").innerHTML = napValue;
  let nightValue = document.getElementById("nightValue").value;
  document.getElementById("displayNight").innerHTML = napValue;
}

let changeDisplay = () => {
   let dateTime = new Date();
   let hrs = dateTime.getHours();
   let min = dateTime.getMinutes();
   let sec = dateTime.getSeconds();

   hrs >= 12 ? (zone.innerHTML = "PM") : (zone.innerHTML = "AM");

   if (hrs > 12) {
     hrs -= 12;
     hr = hrs;
   } else {
     hr = hrs;
   }

  let arr1 = wakeValue.value.split(" ");
  let arr2 = lunchValue.value.split(" ");
  let arr3 = napValue.value.split(" ");
  let arr4 = nightValue.value.split(" ");

  if (arr1[0] == hr && arr1[1] == zone.innerHTML) {
    console.log("if Morning");
    document.getElementById('changeMessage').innerText="Grab some Healthy BreakFast!!!";
    document.getElementById('images').src = "assets/img_1.svg"
  }
  else if(arr2[0] == hr && arr2[1] == zone.innerHTML) {
    console.log("if Lunch");
    document.getElementById('changeMessage').innerText="Let's have some lunch";
    document.getElementById('images').src = "assets/lunch-img.svg"
  } else if(arr3[0] == hr && arr3[1] == zone.innerHTML){
    console.log("if Nap");
    document.getElementById('changeMessage').innerText="STOP YAWNING,GET SOME TEA.. ITS JUST EVENING!";
    document.getElementById('image').src = "assests/lunch_image.png";
  }
 else if(arr4[0] == hr && arr4[1] == zone.innerHTML){
  console.log("if Night");
  document.getElementById('changeMessage').innerText="Sleep is the best meditation!";
  document.getElementById('images').src = "assets/dinner-img.svg";
}
};