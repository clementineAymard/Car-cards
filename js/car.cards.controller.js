'use strict'
var carImgs = ['audu-mea', 'fiak-ibasa', 'mitsu-bashi', 'subali-pesha']
function onInit() {
    renderCards()
}

function renderCards() {
    var strHTMLs = ''
    for (var i = 0; i < 20; i++) {
        strHTMLs += `<article>
            <h1>Title</h1>
            <h2>Sub title</h2>            
            <img src="../img/${carImgs[getRandomIntInclusive(0, 3)]}.png">
            <div class="car-desc">${makeLorem(getRandomIntInclusive(1, 3) * 15)}</div>
            <div class="car-price">$7,500</div>
            <button>BUY</button>
        </article>`
    }
    document.querySelector('.cards-container').innerHTML = strHTMLs
}