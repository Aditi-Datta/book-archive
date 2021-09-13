const searchFood = () => {
    //To get searchbutton and it's value
    const searchFeild = document.getElementById('search-feild')
    const searchText = searchFeild.value;
    // console.log(searchText)
    //Dynamic searchitems
    const url = ` https://openlibrary.org/search.json?q=${searchText}`
    console.log(url)
    fetch(url)
        .then(res => res.json())
        .then(data => displaySearchResult(data.docs))
    if (searchText === '') {
        alert(' Result not found')
    }
    else {
        // //load data
        const url = ` https://openlibrary.org/search.json?q=${searchText}`
        // console.log(url)
        fetch(url)
            .then(res => res.json())
            .then(data => displaySearchResult(data.docs))
    }

    searchFeild.value = "";
}
//Display dynamicily
const displaySearchResult = docs => {
    // console.log(docs)
    const searchResult = document.getElementById('search-result')
    searchResult.textContent = '';
    if (docs.length === 0) {
        alert('Result not found')
    }

    docs.forEach(docs => {
        console.log(docs)
        //Create div
        const div = document.createElement('div')
        //Create class name col
        div.classList.add('col');
        div.innerHTML = `<div class="card h-100">
        <img  class="w-75 mx-auto" src=" https://covers.openlibrary.org/b/id/${docs.cover_i}-M.jpg" class="card-img-top" alt="...">
        <div class="card-body">
          <h2 class="card-title">${docs.title}</h2>
          <h3 class="card-title"> Author:${docs.author_name}</h3>
          <h5 class="card-title"> First Publish Year: ${docs.first_publish_year}</h5>
          <h5 class="card-title">  Publisher : ${docs.publisher}</h5>
          <h4>Language:  ${docs.language}</h4>
          <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        </div>
      </div>`;
        //append child of searchresult
        searchResult.appendChild(div);
    })
}

//To display Total
const displayTotal = () => {
    const total = document.getElementById('search-feild')
    const totalText = total.value;

    const url = ` https://openlibrary.org/search.json?q=${totalText}`
    console.log(url)
    fetch(url)
        .then(res => res.json())
        .then(data => count(data.docs))
}

const count = docs => {
    const countResult = document.getElementById('total')
    countResult.textContent = ''

    const div = document.createElement('div')

    div.classList.add('text-center')
    div.innerHTML = `<p> total:${docs.numFound}</p>`;
    //append child of searchresult
    countResult.appendChild(div);

}