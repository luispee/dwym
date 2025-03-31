const books = [
  {
    title: 'Book',
    author: 'Name'
  },
  {
    title: 'Book2',
    author: 'Name2'
  },
  {
    title: 'Book3',
    author: 'Name3'
  },
  {
    title: 'Book4',
    author: 'Name4'
  },
  {
    title: 'Book5',
    author: 'Name5'
  },
  {
    title: 'Book6',
    author: 'Name6'
  }
]

function getTheTitles(books) {
  return books.map(book => book.title);
}

console.log(getTheTitles(books)); // ['Book', 'Book2', 'Book3', 'Book4', 'Book5', 'Book6']