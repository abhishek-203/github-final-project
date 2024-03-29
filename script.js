function getAPIData() {
  var search = document.getElementById("search");
  if (!search.value) var name = "bharat";
  else var name = search.value;

  search.value = "";

  var request = new XMLHttpRequest();
  request.open("get", "https://restcountries.com/v3.1/name/" + name);
  request.send();

  request.addEventListener("load", () => {
    let data = JSON.parse(request.responseText)[0];
    document.getElementById("name").innerHTML = data.name.official;
    document.getElementById("capital").innerHTML = data.capital[0];
    document.getElementById("flags").src = data.flags.png;
    document.getElementById("population").innerHTML = data.population;
    document.getElementById("area").innerHTML = data.area;
    document.getElementById("region").innerHTML = data.region;
    document.getElementById("subregion").innerHTML = data.subregion;
    document.getElementById("unMember").innerHTML = data.unMember;
    document.getElementById("landlocked").innerHTML = data.landlocked;
    document.getElementById("timezones").innerHTML = data.timezones;
    document.getElementById("borders").innerHTML = data.borders;
    document.getElementById("independent").innerHTML = data.independent;
    document.getElementById("maps").href = data.maps.googleMaps;
    document.getElementById("startOfWeek").innerHTML = data.startOfWeek;
  });
}
getAPIData();
