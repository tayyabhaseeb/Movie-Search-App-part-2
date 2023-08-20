const storedArrayJSON = localStorage.getItem("arr");

// Convert the JSON string back to an array
const storedArray = JSON.parse(storedArrayJSON);

console.log(storedArray);

const sectionTwoCont = document.getElementById("section-two-container");

function render() {
  if (storedArray.length) {
    document.getElementById("watchlist-container").style.display = "none";
    storedArray.forEach(function (dataObj) {
      sectionTwoCont.innerHTML += `
          
            <div class="movie-info-container">
              <div class="movie-img-cont">
                <img src="${dataObj.Poster}" class="movie-img" />
              </div>
              <div class="movie-info-box">
                <div class="child-one">
                  <h4>${dataObj.Title}</h4>
                  <img src="images/StarIcon.png" class="star-icon" />
                  <h6>${dataObj.imdbRating}</h6>
                </div>
                <div class="child-two">
                  <p>${dataObj.Runtime}</p>
                  <p>${dataObj.Genre}</p>
                  <div class="add-icon-container" id="add-icon">
        
                    <i class="fa-solid fa-circle-plus watch"  id='${dataObj.imdbID}'></i>
        
                    <p>Watchlist</p>
                  </div>
                </div>
                <div class="child-three">
                  <p>
                   ${dataObj.Plot}
                  </p>
                </div>
              </div>
            </div>
            `;
    });
  }
}

render();
