export class CARDVIDEOS{
    constructor(title,subTitle,img,altImg){
        this.title = title;
        this.subTitle = subTitle;
        this.img = img;
        this.altImg = altImg;
    }
    createCard(){
        var listVideos = document.querySelector(".listVideos")
        listVideos.innerHTML += `<div class="cardVideos">
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

