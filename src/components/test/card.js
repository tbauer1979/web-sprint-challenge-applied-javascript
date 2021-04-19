import axios from 'axios';



const Card = (article) => {
  const cardsDiv = document.createElement('div')
  const cardsDivone = document.createElement('div')
  const cardsDivtwo = document.createElement('div')
  const cardsDivthree = document.createElement('div')
  const cardsImg = document.createElement('img')
  const cardsSpan = document.createElement('span')

  cardsDiv.classList.add("card")
  cardsDivone.classList.add('headline')
  cardsDivtwo.classList.add('author')
  cardsDivthree.classList.add('img-container')

  cardsDiv.appendChild(cardsDivone)
  cardsDiv.appendChild(cardsDivtwo)
  cardsDivtwo.appendChild(cardsDivthree)
  cardsDivthree.appendChild(cardsImg)
  cardsDivthree.appendChild(cardsSpan)

  cardsDivone.textContent = `${article.headline}`
  cardsImg.setAttribute('src',`${article.authorPhoto}`)
  cardsSpan.textContent = `${article.authorName}`

  return cardsDiv

  // TASK 5
  // ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  //
  // <div class="card">
  //   <div class="headline">{ headline }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ authorPhoto }>
  //     </div>
  //     <span>By { authorName }</span>
  //   </div>
  // </div>
  //
}
const cardAppender = (selector) => {

    axios.get(`https://lambda-times-api.herokuapp.com/articles`) 
    .then(info=>{ 
      console.log(info)
    const cards = document.querySelector('.header-container') 
    cards.appendChild(Card(info.data)) 
    }) 
      
    .catch(error=>{ 
     console.log(error) 
    })

   }
    
    
  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `https://lambda-times-api.herokuapp.com/articles`
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //


export { Card, cardAppender }
