// ASYNCHRONOUS

// AJAX -> Asynchronous JavaScript and XML
// API -> Application Programming Interface

const countriesContainer = document.querySelector(".countries");
function getCountries(country) {
  const request = new XMLHttpRequest();
  request.open("GET", `https://restcountries.com/v2/name/${country}`);
  request.send();

  request.addEventListener("load", function () {
    //console.log(this.responseText)
    //const data = JSON.parse(this.responseText)[0]
    const [data] = JSON.parse(this.responseText);
    console.log(data);

    const content = `
    <div class="card country" style="width: 18rem;">
        <img class="country-image card-img-top" src="${data.flag}">
        <div class="country-data card-body">
            <h5 class="country-name card-title">${data.name}</h3>
            <h5 class="country-region card-title">${data.region}</h5>
            <p class="country-row card-text">${data.population}</p>
            <p class="country-row card-text">${data.languages[0].name}</p>
            <p class="country-row card-text">${data.currencies[0].name}</p>
        </div>
    </div>
    `;

    countriesContainer.insertAdjacentHTML("beforeend", content);
    countriesContainer.style.opacity = 1
  });
}

getCountries("germany")
getCountries("turkey")

