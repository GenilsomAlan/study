import { CARDVIDEOS } from "./createCardVideos.js";
import {generate} from "./generateId.js";

export var titles = ["Python","JavaScript","Php","HTML","CSS"]
var subTitle = ["Playlist de programação na linguagem python3","Playlist de programação na linguagem JavaScript",
    "Playlist de programação na linguagem Php","Playlist de programação na linguagem HTML","Playlist de programação na linguagem CSS"]
var imgsURL = ["./imgs/python.png","./imgs/javascript.jpg","./imgs/php.png","./imgs/html.png","./imgs/css.png"]
var textAlt = ["Capa ilustrativa Python","Capa ilustrativa Javascript","Capa ilustrativa Php","Capa ilustrativa HTML","Capa ilustrativa CSS"]
var id = generate()

function showCard(i){
    var cardPrograming = new CARDVIDEOS(titles[i],subTitle[i],imgsURL[i],textAlt[i],id[i])
    cardPrograming.createCard()
}
var i = 0
for(i; i < titles.length; i++){
    showCard(i)
}

var clickCards = document.getElementsByClassName("cardVideos");
for (var i = 0; i < clickCards.length; i++) {
    clickCards[i].addEventListener("click", () => {
        console.dir(clickCards);
    });
}
