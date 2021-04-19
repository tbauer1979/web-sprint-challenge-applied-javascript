import axios from 'axios';


const Tabs = (object) => {
  
const tabsDiv = document.createElement('div')
const tabsOne = document.createElement('div')
const tabsTwo = document.createElement('div')
const tabsThree = document.createElement('div')

tabsDiv.classList.add("topics")
tabsOne.classList.add('tab')
tabsTwo.classList.add('tab')
tabsThree.classList.add('tab')

tabsDiv.appendChild(tabsOne)
tabsDiv.appendChild(tabsTwo)
tabsDiv.appendChild(tabsThree)

tabsOne.textContent = `${object}`
tabsOne.textContent = `${object}`
tabsOne.textContent = `${object}`

return Tabs

  
  // TASK 3
  // ---------------------
  // Implement this function which takes an array of strings ("topics") as its only argument.
  // As an example, if the topics passed are ['javascript', 'bootstrap', 'technology']
  // then the function returns the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  // <div class="topics">
  //   <div class="tab">javascript</div>
  //   <div class="tab">bootstrap</div>
  //   <div class="tab">technology</div>
  // </div>
  //
}

const tabsAppender = (selector) => {

axios.get(`https://lambda-times-api.herokuapp.com/topics`) 

  .then(info=>{ 
  const cards = document.querySelector('.header-container') 
  cards.appendChild(Tabs(info)) 
  }) 
    

  .catch(error=>{ 
   console.log(error) 
  })

 }
  // TASK 4
  // ---------------------
  // Implement this function which takes a css selector as its only argument.
  // It should obtain topics from this endpoint: `https://lambda-times-api.herokuapp.com/topics`
  // Find the array of topics inside the response, and create the tabs using the Tabs component.
  // Append the tabs to the element in the DOM that matches the selector passed to the function.
  //


export { Tabs, tabsAppender }
