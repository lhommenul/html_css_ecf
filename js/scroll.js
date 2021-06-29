class Card{
    constructor(props){
        this.data = props;
    }
    generateHtml(){
        // create Elements
        let card = document.createElement("li"),
            main_img_card = document.createElement("img"),
            date_card_spe = document.createElement("p"),
                data_icon_card = document.createElement("img"),
                date_container_card = document.createElement("span"),
            card_title = document.createElement("h3"),
            card_message = document.createElement("p"),
            link_card_next = document.createElement("a"),
                text_link_card_next = document.createElement("span"),
                icon_link_card = document.createElement("img");
        // ==== SET CLASS ====
        (()=>{
            card.className = "card"
            main_img_card.className = "main_img_card"
            date_card_spe.className = "date_card_spe card_space"
            data_icon_card.className = "data_icon_card"
            date_container_card.className = "date_container_card"
            card_title.className = "card_space card_title"
            card_message.className = "card_space card_message"
            link_card_next.className = "link_card_next"
            icon_link_card.className = "icon_link_card"
            text_link_card_next.className = "text_link_card_next"
        })();
        // ==== SET DATA ====
        (()=>{
            // main image
            main_img_card.src = this.data.src
            main_img_card.srcset = this.data.srcset
            main_img_card.alt = this.data.alt
            main_img_card.loading = "lazy"
            // 12/04/1928
            date_container_card.innerText = this.data.date
            // icon date
            data_icon_card.src = "../assets/home/icon/date.svg";
            card_title.innerText = this.data.title;
            card_message.innerText =  this.data.message;
            link_card_next.href = this.data.link;
            icon_link_card.src = "../assets/home/icon/right_circle.svg"
            text_link_card_next.innerText = "Lire la suite"
        })();
        // ==== APPEND DATA ====
        (()=>{
            card.appendChild(main_img_card)
            card.appendChild(date_card_spe)
            date_card_spe.appendChild(data_icon_card)
            date_card_spe.appendChild(date_container_card)
            card.appendChild(card_title)
            card.appendChild(card_message)
            card.appendChild(link_card_next)
                link_card_next.appendChild(text_link_card_next)
                link_card_next.appendChild(icon_link_card)
        })();
        return card;
    }
}





// START SCRIPT
let list = [];

(()=>{
for (let index = 0; index < 4; index++) {
    let l = []
    for (let compteur = 0; compteur < 6; compteur++) {
        l.push(new Card({
            src:`https://picsum.photos/900/300?random=${index+compteur}`,
            srcset:`https://picsum.photos/900/300?random=${index+compteur} 2x`,
            alt:"photo d'un langage de programmation",
            date:"12/10/9992",
            title:"Je suis le titre",
            message:"lorem lorem dez dezpok dpeoz jdpoejkz podkez odkezo kepodk dokz podekzpô",
            link:"/"
        }))
    }
    list.push(l)
}
list[0].forEach(e => {
    document.getElementsByClassName('list_cards_actu')[0].appendChild(e.generateHtml())    
});
})();

document.getElementsByClassName('left_slide')[0].addEventListener('click',()=>{
    let chil = document.getElementsByClassName('list_cards_actu')[0]
    let i = chil.children
    for (let index = 0; index < i.length; index++) {
        const element = i[index];
        element.className = "card transi"
        setTimeout(()=>{
            element.remove() 
        },1000)
    }
    setTimeout(()=>{
        list[1].forEach(e => {
            document.getElementsByClassName('list_cards_actu')[0].appendChild(e.generateHtml())    
        });
    },1000)
})