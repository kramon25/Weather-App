// worked with Keller Vicino

$(function date() {
  $(document).ready(function () {
    const saveButton = document.querySelector(".saveBtn");

    $(function () {
      $(document).ready(function () {
        var date = dayjs().format("dddd, MMM DD YYYY h:mma");
        $("#date").html(date);
      });
    });
  });
});

var searchBtn = document.querySelector("#searchBtn");
var city = document.querySelector("#city");
var searchHistory = "";
var apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=01bd317b12076556f9ab659e74f0e375&units=metric";

// // Forloop for persisting the data onto HMTL page
// for (var i = 0; i < localStorage.length; i++) {
//   var location = localStorage.getItem(i);
//   // console.log(localStorage.getItem("City"));
//   var cityName = $(".list-group").addClass(".list-group-item");

//   cityName.append("<li>" + city + "</li>");
// }

// CURRENT DAY CONST
const card = document.querySelector(".top");
const con = document.querySelector("condition");
const api = "01bd317b12076556f9ab659e74f0e375";
const loc = document.querySelector("#location");
const tempC = document.querySelector(".c");
const fast = document.querySelector(".speed");
const hum = document.querySelector(".hum");

searchBtn.addEventListener("click", () => {
  card.setAttribute("style", "display: block !important;");

  var searchInp = $(".form-control").val();
  DayForecast();
  twoDayForecast();
  threeDayForecast();
  fourDayForecast();
  fiveDayForecast();
  var base =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    searchInp +
    "&Appid=01bd317b12076556f9ab659e74f0e375&units=imperial";

  fetch(base)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      const place = data.name;
      const temp = data.main.temp;
      const fast = data.wind.speed;
      const humidity = data.main.humidity;

      loc.textContent = `${place}:`;
      tempC.textContent = ` ${temp} °F`;
      fast.textContent = `${fast} MPH`;
      hum.textContent = `${humidity}% Humidity`;

      localStorage.setItem("searchInput", searchInp);
      var savedSearchBtn = document.createElement("button");
      savedSearchBtn.textContent = searchInp;
      savedSearchBtn.addEventListener("click", handleSavedSearch);
      var savedSearchContainer = document.getElementById("saved-searches");
      savedSearchContainer.appendChild(savedSearchBtn);
    });

  // FIVE DAY FORECAST
});
// [0] DAY FORECAST CONST
const conT = document.querySelector("conditionT");
const tempT = document.querySelector(".ceL");
const fastT = document.querySelector(".speedT");
const humD = document.querySelector(".humD");
const desC = document.querySelector(".description");
const ico = document.querySelector("#icon");
const cast = document.querySelector("#fiveForecast");

function DayForecast(e) {
  var fiveDaySearch = $(".form-control").val();
  var base =
    // "https://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=01bd317b12076556f9ab659e74f0e375";
    "https://api.openweathermap.org/data/2.5/forecast?q=" +
    fiveDaySearch +
    "&Appid=01bd317b12076556f9ab659e74f0e375&units=imperial";

  fetch(base, {
    method: "GET", //GET is the default.
    credentials: "same-origin", // include, *same-origin, omit
    redirect: "follow",
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      // const place = data.name;
      const dataList = data.list[0];
      const des = dataList.weather[0].description;
      const temper = dataList.main.temp;
      const faster = dataList.wind.speed;
      const humiditier = dataList.main.humidity;

      console.log(dataList, JSON.stringify(data));

      // ico.textContent = `${iconC}`;
      desC.textContent = `${des}`;
      tempT.textContent = ` ${temper}°F`;
      fastT.textContent = `${faster} mph`;
      humD.textContent = `${humiditier}% Humidity`;

      localStorage.setItem("data", JSON.stringify(data));

      // const iconT = document.createElement("img");
      // iconT.src = "https://openwethermap.org/img/w/${data.weather[0].icon.png}";
      // const iconC = dataList.weather[0].icon;
      // ico.classList.add("weather-icon");
      // ico.innerHTML = "";
      // iconT.appendChild(ico);
    });
}
// [2] DAY FORECAST CONST
const conTwo = document.querySelector("conditiontwo");
const tempTwo = document.querySelector(".cardtwo");
const fastTwo = document.querySelector(".speedtwo");
const humTwo = document.querySelector(".humtwo");
const desTwo = document.querySelector(".descriptiontwo");
// const ico = document.querySelector("#icon");
// const cast = document.querySelector("#fiveForecast");

function twoDayForecast(e) {
  var fiveDaySearch = $(".form-control").val();
  var base =
    // "https://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=01bd317b12076556f9ab659e74f0e375";
    "https://api.openweathermap.org/data/2.5/forecast?q=" +
    fiveDaySearch +
    "&Appid=01bd317b12076556f9ab659e74f0e375&units=imperial";

  fetch(base, {
    method: "GET", //GET is the default.
    credentials: "same-origin", // include, *same-origin, omit
    redirect: "follow",
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      // const place = data.name;
      const dataList = data.list[1];
      const desT = dataList.weather[0].description;
      const temptwo = dataList.main.temp;
      const fastertwo = dataList.wind.speed;
      const humiditytwo = dataList.main.humidity;

      // ico.textContent = `${iconC}`;
      desTwo.textContent = `${desT}`;
      tempTwo.textContent = ` ${temptwo}°F`;
      fastTwo.textContent = `${fastertwo} mph`;
      humTwo.textContent = `${humiditytwo}% Humidity`;

      localStorage.setItem("data", JSON.stringify(data));

      // const iconT = document.createElement("img");
      // iconT.src = "https://openwethermap.org/img/w/${data.weather[0].icon.png}";
      // const iconC = dataList.weather[0].icon;
      // ico.classList.add("weather-icon");
      // ico.innerHTML = "";
      // iconT.appendChild(ico);
    });
}
// [3] DAY FORECAST CONST
const conThree = document.querySelector("conditionthree");
const tempThree = document.querySelector(".cardthree");
const fastThree = document.querySelector(".speedthree");
const humThree = document.querySelector(".humthree");
const desThree = document.querySelector(".descriptionthree");
// const ico = document.querySelector("#icon");
// const cast = document.querySelector("#fiveForecast");

function threeDayForecast(e) {
  var fiveDaySearch = $(".form-control").val();
  var base =
    // "https://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=01bd317b12076556f9ab659e74f0e375";
    "https://api.openweathermap.org/data/2.5/forecast?q=" +
    fiveDaySearch +
    "&Appid=01bd317b12076556f9ab659e74f0e375&units=imperial";

  fetch(base, {
    method: "GET", //GET is the default.
    credentials: "same-origin", // include, *same-origin, omit
    redirect: "follow",
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      // const place = data.name;
      const dataList = data.list[2];
      const desTh = dataList.weather[0].description;
      const tempthree = dataList.main.temp;
      const fasterthree = dataList.wind.speed;
      const humiditythree = dataList.main.humidity;

      // ico.textContent = `${iconC}`;
      desThree.textContent = `${desTh}`;
      tempThree.textContent = ` ${tempthree}°F`;
      fastThree.textContent = `${fasterthree} mph`;
      humThree.textContent = `${humiditythree}% Humidity`;

      localStorage.setItem("data", JSON.stringify(data));

      // const iconT = document.createElement("img");
      // iconT.src = "https://openwethermap.org/img/w/${data.weather[0].icon.png}";
      // const iconC = dataList.weather[0].icon;
      // ico.classList.add("weather-icon");
      // ico.innerHTML = "";
      // iconT.appendChild(ico);
    });
}
// [4] DAY FORECAST CONST
const conFour = document.querySelector("conditionfour");
const tempFour = document.querySelector(".cardfour");
const fastFour = document.querySelector(".speedfour");
const humFour = document.querySelector(".humfour");
const desFour = document.querySelector(".descriptionfour");
// const ico = document.querySelector("#icon");
// const cast = document.querySelector("#fiveForecast");

function fourDayForecast(e) {
  var fiveDaySearch = $(".form-control").val();
  var base =
    // "https://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=01bd317b12076556f9ab659e74f0e375";
    "https://api.openweathermap.org/data/2.5/forecast?q=" +
    fiveDaySearch +
    "&Appid=01bd317b12076556f9ab659e74f0e375&units=imperial";

  fetch(base, {
    method: "GET", //GET is the default.
    credentials: "same-origin", // include, *same-origin, omit
    redirect: "follow",
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      // const place = data.name;
      const dataList = data.list[3];
      const desF = dataList.weather[0].description;
      const tempfour = dataList.main.temp;
      const fasterfour = dataList.wind.speed;
      const humidityfour = dataList.main.humidity;

      // ico.textContent = `${iconC}`;
      desFour.textContent = `${desF}`;
      tempFour.textContent = ` ${tempfour}°F`;
      fastFour.textContent = `${fasterfour} mph`;
      humFour.textContent = `${humidityfour}% Humidity`;

      localStorage.setItem("data", JSON.stringify(data));

      // const iconT = document.createElement("img");
      // iconT.src = "https://openwethermap.org/img/w/${data.weather[0].icon.png}";
      // const iconC = dataList.weather[0].icon;
      // ico.classList.add("weather-icon");
      // ico.innerHTML = "";
      // iconT.appendChild(ico);
    });
}
// [5] DAY FORECAST CONST
const conFive = document.querySelector("conditionfive");
const tempFive = document.querySelector(".cardfive");
const fastFive = document.querySelector(".speedfive");
const humFive = document.querySelector(".humfive");
const desFive = document.querySelector(".descriptionfive");
// const ico = document.querySelector("#icon");
// const cast = document.querySelector("#fiveForecast");

function fiveDayForecast(e) {
  var fiveDaySearch = $(".form-control").val();
  var base =
    // "https://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=01bd317b12076556f9ab659e74f0e375";
    "https://api.openweathermap.org/data/2.5/forecast?q=" +
    fiveDaySearch +
    "&Appid=01bd317b12076556f9ab659e74f0e375&units=imperial";

  fetch(base, {
    method: "GET", //GET is the default.
    credentials: "same-origin", // include, *same-origin, omit
    redirect: "follow",
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      // const place = data.name;
      const dataList = data.list[4];
      const desFi = dataList.weather[0].description;
      const tempfive = dataList.main.temp;
      const fasterfive = dataList.wind.speed;
      const humidityfive = dataList.main.humidity;

      // ico.textContent = `${iconC}`;
      desFive.textContent = `${desFi}`;
      tempFive.textContent = ` ${tempfive}°F`;
      fastFive.textContent = `${fasterfive} mph`;
      humFive.textContent = `${humidityfive}% Humidity`;

      localStorage.setItem("data", JSON.stringify(data));

      // const iconT = document.createElement("img");
      // iconT.src = "https://openwethermap.org/img/w/${data.weather[0].icon.png}";
      // const iconC = dataList.weather[0].icon;
      // ico.classList.add("weather-icon");
      // ico.innerHTML = "";
      // iconT.appendChild(ico);
    });
}

function handleSavedSearch(event) {
  var savedSearchValue = event.target.textContent;

  var base =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    savedSearchValue +
    "&Appid=01bd317b12076556f9ab659e74f0e375&units=imperial";

  var baseDay1 =
    "https://api.openweathermap.org/data/2.5/forecast?q=" +
    savedSearchValue +
    "&Appid=01bd317b12076556f9ab659e74f0e375&units=imperial";

  var baseDay2 =
    "https://api.openweathermap.org/data/2.5/forecast?q=" +
    savedSearchValue +
    "&Appid=01bd317b12076556f9ab659e74f0e375&units=imperial";

  var baseDay3 =
    "https://api.openweathermap.org/data/2.5/forecast?q=" +
    savedSearchValue +
    "&Appid=01bd317b12076556f9ab659e74f0e375&units=imperial";

  var baseDay4 =
    "https://api.openweathermap.org/data/2.5/forecast?q=" +
    savedSearchValue +
    "&Appid=01bd317b12076556f9ab659e74f0e375&units=imperial";

  var baseDay5 =
    "https://api.openweathermap.org/data/2.5/forecast?q=" +
    savedSearchValue +
    "&Appid=01bd317b12076556f9ab659e74f0e375&units=imperial";

  fetch(base)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      const place = data.name;
      const temp = data.main.temp;
      const fast = data.wind.speed;
      const humidity = data.main.humidity;

      loc.textContent = `${place}:`;
      tempC.textContent = ` ${temp} °F`;
      fast.textContent = `${fast} mph`;
      hum.textContent = `${humidity}% Humidity`;
    });

  fetch(baseDay1)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      const dataList = data.list[0];
      const des = dataList.weather[0].description;
      const temper = dataList.main.temp;
      const faster = dataList.wind.speed;
      const humiditier = dataList.main.humidity;

      console.log(dataList);

      desC.textContent = `${des}`;
      tempT.textContent = ` ${temper}°F`;
      fastT.textContent = `${faster} mph`;
      humD.textContent = `${humiditier}% Humidity`;
    });

  // -------------------------------------------------------------------------------

  fetch(baseDay2, {
    method: "GET", //GET is the default.
    credentials: "same-origin", // include, *same-origin, omit
    redirect: "follow",
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      // const place = data.name;
      const dataList = data.list[1];
      const desT = dataList.weather[0].description;
      const temptwo = dataList.main.temp;
      const fastertwo = dataList.wind.speed;
      const humiditytwo = dataList.main.humidity;

      // ico.textContent = `${iconC}`;
      desTwo.textContent = `${desT}`;
      tempTwo.textContent = ` ${temptwo}°F`;
      fastTwo.textContent = `${fastertwo} mph`;
      humTwo.textContent = `${humiditytwo}% Humidity`;

      localStorage.setItem("data", JSON.stringify(data));

      // const iconT = document.createElement("img");
      // iconT.src = "https://openwethermap.org/img/w/${data.weather[0].icon.png}";
      // const iconC = dataList.weather[0].icon;
      // ico.classList.add("weather-icon");
      // ico.innerHTML = "";
      // iconT.appendChild(ico);
    });

  // -------------------------------------------------------------------------------

  fetch(baseDay3, {
    method: "GET", //GET is the default.
    credentials: "same-origin", // include, *same-origin, omit
    redirect: "follow",
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      // const place = data.name;
      const dataList = data.list[2];
      const desTh = dataList.weather[0].description;
      const tempthree = dataList.main.temp;
      const fasterthree = dataList.wind.speed;
      const humiditythree = dataList.main.humidity;

      // ico.textContent = `${iconC}`;
      desThree.textContent = `${desTh}`;
      tempThree.textContent = ` ${tempthree}°F`;
      fastThree.textContent = `${fasterthree} mph`;
      humThree.textContent = `${humiditythree}% Humidity`;

      localStorage.setItem("data", JSON.stringify(data));

      // const iconT = document.createElement("img");
      // iconT.src = "https://openwethermap.org/img/w/${data.weather[0].icon.png}";
      // const iconC = dataList.weather[0].icon;
      // ico.classList.add("weather-icon");
      // ico.innerHTML = "";
      // iconT.appendChild(ico);
    });

  // -------------------------------------------------------------------------------

  fetch(baseDay4, {
    method: "GET", //GET is the default.
    credentials: "same-origin", // include, *same-origin, omit
    redirect: "follow",
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      // const place = data.name;
      const dataList = data.list[3];
      const desF = dataList.weather[0].description;
      const tempfour = dataList.main.temp;
      const fasterfour = dataList.wind.speed;
      const humidityfour = dataList.main.humidity;

      // ico.textContent = `${iconC}`;
      desFour.textContent = `${desF}`;
      tempFour.textContent = ` ${tempfour}°F`;
      fastFour.textContent = `${fasterfour} mph`;
      humFour.textContent = `${humidityfour}% Humidity`;

      localStorage.setItem("data", JSON.stringify(data));

      // const iconT = document.createElement("img");
      // iconT.src = "https://openwethermap.org/img/w/${data.weather[0].icon.png}";
      // const iconC = dataList.weather[0].icon;
      // ico.classList.add("weather-icon");
      // ico.innerHTML = "";
      // iconT.appendChild(ico);
    });

  // -------------------------------------------------------------------------------

  fetch(baseDay5, {
    method: "GET", //GET is the default.
    credentials: "same-origin", // include, *same-origin, omit
    redirect: "follow",
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      // const place = data.name;
      const dataList = data.list[4];
      const desFi = dataList.weather[0].description;
      const tempfive = dataList.main.temp;
      const fasterfive = dataList.wind.speed;
      const humidityfive = dataList.main.humidity;

      // ico.textContent = `${iconC}`;
      desFive.textContent = `${desFi}`;
      tempFive.textContent = ` ${tempfive}°F`;
      fastFive.textContent = `${fasterfive} mph`;
      humFive.textContent = `${humidityfive}% Humidity`;

      localStorage.setItem("data", JSON.stringify(data));

      // const iconT = document.createElement("img");
      // iconT.src = "https://openwethermap.org/img/w/${data.weather[0].icon.png}";
      // const iconC = dataList.weather[0].icon;
      // ico.classList.add("weather-icon");
      // ico.innerHTML = "";
      // iconT.appendChild(ico);
    });
}
