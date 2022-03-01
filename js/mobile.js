const searchMobile = () => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    searchField.value = '';
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`;

    fetch(url)
        .then(res => res.json())
        .then(data => displayResult(data.data));
}
const displayResult = data => {
    const searchResult = document.getElementById('search-result')
    data.forEach(data => {
        console.log(data);
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
            <div class="card">
                <img src="${data.image}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${data.brand}</h5>
                    <p class="card-text">This is a longer card with supporting text below as a natural lead-in toadditional content. This content is a little bit longer.</p>
                </div>
            </div>`;
        searchResult.appendChild(div)

    });
}