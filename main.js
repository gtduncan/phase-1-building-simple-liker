// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

const hearts = document.querySelectorAll('.like-glyph')

hearts.forEach(heart => heartClick(heart))

function heartClick(heart) {
  heart.addEventListener('click', function() {
    mimicServerCall()
    .then(function(response) {
      if(heart.innerText == EMPTY_HEART)
      {
        heart.innerText = FULL_HEART
        heart.classList.add('activated-heart')
      }
      else if(heart.innerText = FULL_HEART) {
        heart.innerText = EMPTY_HEART
        heart.classList.remove('activated-heart')
      }})
      .catch(function(error) {
      const errorImage = document.querySelector('#modal')
      errorImage.classList.remove('hidden')
      setTimeout(function() {
        errorImage.classList.add('hidden')
      }, 3000)
      })
    })
}



//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
