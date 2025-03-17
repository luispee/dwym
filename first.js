//https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch

async function getData() {
    const url = "https://openlibrary.org/search.json?q=the+lord+of+the+rings";
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
  
      const data = await response.json();
      console.log(data.docs[0]);
      return JSON.stringify(data, null, 2);
    } catch (error) {
      console.error(error.message);
      return null
    }
  }
  getData();