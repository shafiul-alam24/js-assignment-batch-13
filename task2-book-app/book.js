function addBook() {
    let book = document.getElementById("bookName").value;
    let author = document.getElementById("authorName").value;

    if (book === "" || author === "") {
        alert("Please fill all fields!");
        return;
    }

    let table = document.getElementById("bookList");

    let row = document.createElement("tr");

    row.innerHTML = `
        <td>${book}</td>
        <td>${author}</td>
        <td><button class="deleteBtn">Delete</button></td>
    `;

    table.appendChild(row);

    // Save to local storage
    saveToLocalStorage(book, author);

    document.getElementById("bookName").value = "";
    document.getElementById("authorName").value = "";
}

document.getElementById("bookList").addEventListener("click", function(e) {
    if (e.target.classList.contains("deleteBtn")) {
        e.target.parentElement.parentElement.remove();
    }
});

function saveToLocalStorage(book, author) {
    let books = JSON.parse(localStorage.getItem("books")) || [];

    books.push({ book, author });

    localStorage.setItem("books", JSON.stringify(books));
}

// Load data after refresh
window.onload = function() {
    let books = JSON.parse(localStorage.getItem("books")) || [];

    let table = document.getElementById("bookList");

    books.forEach(item => {
        let row = document.createElement("tr");

        row.innerHTML = `
            <td>${item.book}</td>
            <td>${item.author}</td>
            <td><button class="deleteBtn">Delete</button></td>
        `;

        table.appendChild(row);
    });
};