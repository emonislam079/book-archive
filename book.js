const searchButton = () => {
    const inputField = document.getElementById('input');
    const inputValue = inputField.value;
    console.log(inputValue);

    inputField.value = '';

    const url = `https://openlibrary.org/search.json?q=${inputValue}`;
    fetch(url)
        .then(response => response.json())
        .then(data => displaySearchResult(data))


}

const displaySearchResult = books => {
    const searchResult = document.getElementById('search-result');

    searchResult.innerHTML = '';
    const found = document.getElementById('found');
    // Error Massege 

    if (books.docs.length === 0) {
        found.innerHTML = `<h1 class="text-center mt-5"> Nothing Found By This Name ! </h1>`
    }
    else {
        found.innerHTML = `<h4 class="text-center mt-5"> Showing 20 Items From ${books.numFound} Items  </h4>`
    }

    // slice for showing 20 Items 

    const fullData = books.docs;
    const DataSlice = fullData.slice(0, 20);


    DataSlice.forEach(book => {
        console.table(book);



        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
        <div class="card">
                <img style="height: 500px;"  src="https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg" class="card-img-top" alt="...">
                <div class="card-body">
                <h5 class="card-title"> Book Name : <span style="color: blue;">${book.title}</span></h5>
                <h5> Writter : <span style="color: blue;">${book.author_name}</span></h5>
                <h5> First Published in: <span style="color: blue;"> ${book.first_publish_year}</span></h5>
                    
                    
                </div>
        </div>
        `

        searchResult.appendChild(div);


    })

}