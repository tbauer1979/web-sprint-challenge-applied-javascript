const Header = (title, date, temp) => {

const firstDiv = document.createElement('div')
const spanOne = document.createElement('span')
const HeaderOne = document.createElement('h1')
const spanTwo = document.createElement('span')

firstDiv.classList.add("header")
spanOne.classList.add('date')
spanTwo.classList.add('temp')

firstDiv.appendChild(spanOne)
firstDiv.appendChild(HeaderOne)
firstDiv.appendChild(spanTwo)

return Header

  // TASK 1
  // ---------------------
  // Implement this function taking `title`, `date` and `temp` as its 3 args and returning the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  //  <div class="header">
  //    <span class="date">{ date }</span>
  //    <h1>{ title }</h1>
  //    <span class="temp">{ temp }</span>
  //  </div>
  //
}
const object = []
const headerAppender = (selector) => {
  // TASK 2
  const place = document.querySelector('.header-container') 
  const newHeader = document.createElement(Header(object))
  place.appendChild(newHeader)
  // ---------------------
  // Implement this function taking a css selector as its only argument.
  // It should create a header using the Header component above, passing arguments of your choosing.
  // It should append the header to the element in the DOM that matches the given selector.
  //
}

export { Header, headerAppender }