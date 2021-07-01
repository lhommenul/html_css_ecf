import {Slider} from '/js/slider.js'

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

new Slider({
    per_pages:6,
    start:0,
    container : document.getElementsByClassName('list_cards_actu')[0],
    cards:[new Card({
        src:`/assets/home/picture/Computer.png`,
        srcset:`/assets/home/picture/Computer_2x.png 2x`,
        alt:"photo d'un langage de programmation",
        date:"12/02/2020",
        title:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr",
        message:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, …",
        link:"/"
    }),new Card({
        src:`/assets/home/picture/Keyboard.png`,
        srcset:`/assets/home/picture/Keyboard_2x.png 2x`,
        alt:"photo d'un langage de programmation",
        date:"12/02/2020",
        title:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr",
        message:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, …",
        link:"/"
    }),new Card({
        src:`/assets/home/picture/Code.png`,
        srcset:`/assets/home/picture/Code_2x.png 2x`,
        alt:"photo d'un langage de programmation",
        date:"12/02/2020",
        title:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr",
        message:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, …",
        link:"/"
    }),new Card({
        src:`/assets/home/picture/Computer.png`,
        srcset:`/assets/home/picture/Computer_2x.png 2x`,
        alt:"photo d'un langage de programmation",
        date:"12/02/2020",
        title:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr",
        message:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, …",
        link:"/"
    }),new Card({
        src:`/assets/home/picture/Keyboard.png`,
        srcset:`/assets/home/picture/Keyboard_2x.png 2x`,
        alt:"photo d'un langage de programmation",
        date:"12/02/2020",
        title:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr",
        message:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, …",
        link:"/"
    }),new Card({
        src:`/assets/home/picture/Code.png`,
        srcset:`/assets/home/picture/Code_2x.png 2x`,
        alt:"photo d'un langage de programmation",
        date:"12/02/2020",
        title:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr",
        message:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, …",
        link:"/"
    }),new Card({
        src:`/assets/home/picture/Computer.png`,
        srcset:`/assets/home/picture/Computer_2x.png 2x`,
        alt:"photo d'un langage de programmation",
        date:"12/10/9992",
        title:"Je suis le jsqpo jdpojksq podksqo k".repeat(2*Math.random()+1),
        message:"lordekzpô".repeat(6*Math.random()+1),
        link:"/"
    }),new Card({
        src:`/assets/home/picture/Keyboard.png`,
        srcset:`/assets/home/picture/Keyboard_2x.png 2x`,
        alt:"photo d'un langage de programmation",
        date:"12/10/9992",
        title:"Je suis le jsqpo jdpojksq podksqo k".repeat(2*Math.random()+1),
        message:"lorem lorem dez dezpok dpeoz jdpoejkz podkez odkezo kepodk dokz podekzpô".repeat(6*Math.random()+1),
        link:"/"
    }),new Card({
        src:`/assets/home/picture/Code.png`,
        srcset:`/assets/home/picture/Code_2x.png 2x`,
        alt:"photo d'un langage de programmation",
        date:"12/10/9992",
        title:"Je suis le jsqpo jdpojksq podksqo k".repeat(2*Math.random()+1),
        message:"lorem lorem dez dezpok dpeoz jdpoejkz podkez odkezo kepodk dokz podekzpô".repeat(6*Math.random()+1),
        link:"/"
    }),new Card({
        src:`/assets/home/picture/Computer.png`,
        srcset:`/assets/home/picture/Computer_2x.png 2x`,
        alt:"photo d'un langage de programmation",
        date:"12/10/9992",
        title:"Je suis le jsqpo jdpojksq podksqo k".repeat(2*Math.random()+1),
        message:"lorem lorem dez dezpok dpeoz jdpoejkz podkez odkezo kepodk dokz podekzpô".repeat(6*Math.random()+1),
        link:"/"
    }),new Card({
        src:`/assets/home/picture/Keyboard.png`,
        srcset:`/assets/home/picture/Keyboard_2x.png 2x`,
        alt:"photo d'un langage de programmation",
        date:"12/10/9992",
        title:"Je suis le jsqpo jdpojksq podksqo k".repeat(2*Math.random()+1),
        message:"lorem lorem dez dezpok dpeoz jdpoejkz podkez odkezo kepodk dokz podekzpô".repeat(6*Math.random()+1),
        link:"/"
    }),new Card({
        src:`/assets/home/picture/Code.png`,
        srcset:`/assets/home/picture/Code_2x.png 2x`,
        alt:"photo d'un langage de programmation",
        date:"12/10/9992",
        title:"Je suis le jsqpo jdpojksq podksqo k".repeat(2*Math.random()+1),
        message:"lorem lorem dez dezpok dpeoz jdpoejkz podkez odkezo kepodk dokz podekzpô".repeat(6*Math.random()+1),
        link:"/"
    }),new Card({
        src:`/assets/home/picture/Computer.png`,
        srcset:`/assets/home/picture/Computer_2x.png 2x`,
        alt:"photo d'un langage de programmation",
        date:"12/10/9992",
        title:"Je suis le titre".repeat(2*Math.random()+1),
        message:"lorem lorem dez dezpok dpeoz jdpoejkz podkez odkezo kepodk dokz podekzpô".repeat(6*Math.random()+1),
        link:"/"
    }),new Card({
        src:`/assets/home/picture/Keyboard.png`,
        srcset:`/assets/home/picture/Keyboard_2x.png 2x`,
        alt:"photo d'un langage de programmation",
        date:"12/10/9992",
        title:"Je suis le titre".repeat(2*Math.random()+1),
        message:"lorem lorem dez dezpok dpeoz jdpoejkz podkez odkezo kepodk dokz podekzpô".repeat(6*Math.random()+1),
        link:"/"
    }),new Card({
        src:`/assets/home/picture/Code.png`,
        srcset:`/assets/home/picture/Code_2x.png 2x`,
        alt:"photo d'un langage de programmation",
        date:"12/10/9992",
        title:"Je suis le titre".repeat(2*Math.random()+1),
        message:"lorem lorem dez dezpok dpeoz jdpoejkz podkez odkezo kepodk dokz podekzpô".repeat(6*Math.random()+1),
        link:"/"
    })]
}).init()
