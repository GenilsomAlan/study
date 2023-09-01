/*
<div class="listVideos">
    <div class="cardVideos">
        <div class="img">
            <img src="../imgs/javascript.jpg" alt="/">
        </div>
        <div class="title">
            <h3>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h3>
        </div>
        <div class="subTitle">
            <h4>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h4>
        </div>
    </div>
</div>
*/

class CARDVIDEOS{
    constructor(title,subTitle,img,altImg){
        this.title = title;
        this.subTitle = subTitle;
        this.img = img;
        this.altImg = altImg;
    }
    blockCardVideos = () => {
        return `<div class="cardVideos">
            <div class="img">
                <img src="${this.img}" alt="${this.altImg}">
            </div>
            <div class="title">
                <h3>${this.title}</h3>
            </div>
            <div class="subTitle">
                <h4>${this.subTitle}</h4>
            </div>
        </div>`
    }
}

createCard = () =>{
    
}
var main = document.querySelector(".listVideos")
var cardPrograming = new CARDVIDEOS("python","Playlist de programação na linguagem python3","../imgs/javascript.jpg","Capa ilustrativa Python")
main.innerHTML = cardPrograming.blockCardVideos()