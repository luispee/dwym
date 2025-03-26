document.addEventListener("DOMContentLoaded", () => {
  //https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch

  async function getData() {
    const url = "https://openlibrary.org/search.json?q=the+lord+of+the+rings";
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }

      return response.json();
    } catch (error) {
      console.error(error.message);
      return null
    }
  }

  const app = document.getElementById("app");

  /* getData().then(data => {
    console.log(data)
    //Para cada elemento de docs, se va a mapear un insertar el siguiente div.
    //
    data.docs.map((book) => {
        app.appendChild(document.createElement("div")).innerHTML = `
          <div class= "book">
            <img src="https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg" alt="${book.title}" />
            <h2>${book.title}</h2>
            <p>${book.author_name}</p>
            <p>${book.first_publish_year}</p>
          </div>
        `;
    }).join("");

  }); */

  // Creating and appending initial elements

  const title = document.createElement("h1");
  title.textContent = "Lord of the Rings Books";
  app.appendChild(title);

  const description = document.createElement("p");
  description.textContent =
    "This is a demonstration of API retrieval technique using JavaScript using openlibrary.";
  app.appendChild(description);

  function displayData(data) {
    const container = document.createElement("div");
    container.textContent = data;
    app.appendChild(dataElement);
  }
  //TODO make button functionality to add books from the APi response into the page
  //1) Create a button
  //2) Add an event listener to the button
  //3) Call the displayData function with the data from the API response
  //4) Append the data to the app element

  // Adding a button to create a new element
   const addButton = document.createElement("button");
   addButton.textContent = "Add New Book";
   app.appendChild(addButton);
 
   // Function to create a new element with an event listener
   const createNewBook = () => {
     const newBook = document.createElement("div");
      newBook.textContent = "New Book";
      newBook.classList.add("book");
 
     // Adding event listener directly to the new element
     newBook.addEventListener("click", () => {
      newBook.style.backgroundColor = "#cfe2f3";
     });
 
     app.appendChild(newBook);
   };
 
   addButton.addEventListener("click", createNewBook);
   //Removing books
   const removeButton = document.createElement("button");
   removeButton.textContent = "Remove Books";
   app.appendChild(removeButton);
 
   removeButton.addEventListener("click", () => {
     const staticElements = document.getElementsByClassName("book");
     while (staticElements.length > 0) {
       staticElements[0].parentNode.removeChild(staticElements[0]);
     }
    });
   /*
   
   // Using template literals to create HTML content
   const templateButton = document.createElement("button");
   templateButton.textContent = "Add Template Element";
   app.appendChild(templateButton);
 
   templateButton.addEventListener("click", () => {
     const templateContent = document.createElement("div");
     templateContent.innerHTML = `
               <div class="template-element">
                   <h2>Template Element</h2>
                   <p>This element was created using a template literal.</p>
               </div>
           `;
 
     // Get the actual template element
     const templateElement = templateContent.querySelector(".template-element");
 
     // Adding event listener directly to the template element
     templateElement.addEventListener("click", (e) => {
       templateElement.style.backgroundColor = "violet";
     });
 
     app.appendChild(templateElement);
   });
 
   // Selecting elements by class and modifying them
   const staticElements = document.getElementsByClassName("static-element");
   [...staticElements].forEach((element, index) => {
     element.textContent += ` - Modified by JavaScript (${index + 1})`;
     element.classList.add("highlight");
   });
 
   // Removing static content
   const removeButton = document.createElement("button");
   removeButton.textContent = "Remove Static Content";
   app.appendChild(removeButton);
 
   removeButton.addEventListener("click", () => {
     const staticElements = document.getElementsByClassName("static-element");
     while (staticElements.length > 0) {
       staticElements[0].parentNode.removeChild(staticElements[0]);
     }
   });*/
});