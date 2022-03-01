const searchMobile = () => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    searchField.value = '';
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`;

    fetch(url)
        .then(res => res.json())
        .then(data => displayResult(data.data.slice(0, 20)));
}
const displayResult = data => {
    console.log(data)
    const searchResult = document.getElementById('search-result')
    data.forEach(data => {

        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
            <div class="card">
                <img height= 300px src="${data.image}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${data.phone_name}</h5>
                    <p class="card-text">${data.brand}</p>
                    <div>
                    <button type="button" class="btn btn-lg btn-primary">See More...</button>
                </div>
                </div>
            </div>`;
        searchResult.appendChild(div)

    });
}