// nextjs script tag start

console.log("page loading start");


function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else {
      x.innerHTML = "Geolocation is not supported by this browser.";
    }
  }
  
  function showPosition(position) {
    console.log(position);
  }

  getLocation();


// nextjs script tag end
