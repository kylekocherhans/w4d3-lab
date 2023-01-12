const getBtn = document.querySelector("button");
const residentsContainer = document.querySelector("#residents-container");

// Data structure of results is results.data.results[0].residents
const getResidents = () => axios.get("https://swapi.dev/api/planets/?search=alderaan").then(getResidentCallback).catch(errCallback);

const getResidentCallback = ({ data: {results: results} }) => displayResidents(results[0].residents);
const errCallback = err => console.log(err);

const displayResidents = residentsURLs => {
    residentsContainer.innerHTML = "";
    
    residentsURLs.forEach(residentURL => {
        axios.get(residentURL).then(displayResident).catch(errCallback);
    });
};

const displayResident = ({ data: resident }) => {
    const resTag = document.createElement("h2");
    resTag.innerHTML = resident.name;
    residentsContainer.appendChild(resTag);
}

getBtn.addEventListener("click", getResidents);