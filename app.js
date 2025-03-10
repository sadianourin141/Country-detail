fetch('https://restcountries.com/v3.1/all')
    .then(response => response.json())
    .then(data => displayCountry(data))

const displayCountry = countries => {
    console.log(countries);
    const countriesDiv = document.getElementById('name')
    for (let i = 0; i < countries.length; i++) {
        const country = countries[i];


        // console.log(country.name.common);
        // console.log(country.capital)
        // console.log(country.flags.png)


        const countryInfo = `
        <h1>${country.name.common}</h1>
        <h3>${country.capital}</h3>
        <img class="img-style" src="${country.flags.png}"alt="">

        <button onClick="displayDetails('${country.name.common}')">See More Details</button>

        `
            //ekhne displaydetails() er perameter ta quote er moddhe rakha lgbe

        const countryDiv = document.createElement('div')
        countryDiv.className = 'div-style'

        countryDiv.innerHTML = countryInfo; //innerHtml dite hobe innerText dile vitorer je tag ase show ty korbe
        countriesDiv.appendChild(countryDiv);


        // const countryDiv = document.createElement('div')
        // const h3 = document.createElement('h3')
        // const h6 = document.createElement('h6')
        // h3.innerText = country.name.common;
        // h6.innerText = country.capital
        // countryDiv.appendChild(h3);
        // countryDiv.appendChild(h6)
        // countriesDiv.appendChild(countryDiv);

    }
}


const displayDetails = name => {

    fetch(`https://restcountries.com/v3.1/name/${name}`)
        .then(response => response.json())
        .then(data => {
            displayCountryDetails(data)
            console.log(data[0].languages)

        });
}

displayCountryDetails = detail => {
    console.log(detail);
    const newDiv = document.getElementById('newDiv')

    const info = `
    <h3> Population-${detail[0].population}</h3>
    <h2>Region-${detail[0].region}</h2>
    <h2>Currencies-${detail[0].currencies.SEK.name}</h2>

    <h3>Coat of Arms</h3>
    <img class="img-style" src="${detail[0].coatOfArms.png}" alt="">

    
    `
    newDiv.innerHTML = info;

    // const h3 = document.createElement('h3');
    // h3.innerText = detail[0].population;
    // newDiv.appendChild(h3)


}