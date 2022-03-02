
const searchMobile = () => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    searchField.value = '';

    // load data

    const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`;

    fetch(url)
        .then(res => res.json())
        .then(data => displayResult(data.data.slice(0, 15)));

}
const displayResult = data => {

    const searchResult = document.getElementById('search-result')
    searchResult.textContent = '';
    data.forEach(data => {

        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
            <div class="card">
                <img class = " w-50" src="${data.image}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${data.phone_name}</h5>
                    <p class="card-text">${data.brand}</p>
                    <div>
                    <button onclick="seeMore('${data.slug}')" type="button" class="btn btn-lg btn-primary">See More...</button>
                </div>
                </div>
            </div>`;
        searchResult.appendChild(div)

    });
}

// Details 

const seeMore = (id) => {
    const url = `https://openapi.programming-hero.com/api/phone/${id}`;
    fetch(url)
        .then(res => res.json())
        .then(data => setSeeMore(data.data));
}

const setSeeMore = (info) => {
    console.log(info)
    document.getElementById('details-container').innerHTML = `
    <div class="d-flex">
    <div>
    <img class = "w-100" src="${info.image}" class="card-img-top" alt="...">
    </div>
    <div>
    <p><span class="fw-bold">Mobile Name:</span> ${info.name}</p>
    <p> <span class="fw-bold">Brand:</span> ${info.brand}</p>
    <p><span class="fw-bold">Release Date:</span> ${info.releaseDate}</p>
    <p><span class="fw-bold">Others</span></p>
    <p><span class="fw-bold">WLAN:</span> ${info.others.WLAN}</p>
    <p><span class="fw-bold">Bluetooth:</span> ${info.others.Bluetooth}</p>
    <p><span class="fw-bold">Sensors:</span> ${info.mainFeatures.sensors[0]}</p>
    
    
    </div>


    `
}