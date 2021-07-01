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

class Slider{
    constructor(props){
        this.pages = 0;
        this.per_pages = props.per_pages;
        this.start = props.start;
        this.cards = props.cards;
        this.list = [];
        this.container_card_slider = props.container;
    }
    init(){
        // define the number of pages
        let restant = this.cards.length%this.per_pages;
        this.pages = ((this.cards.length-restant)/this.per_pages)+1
        // Je veux 4 pages donc 
        for (let index = 0; index < this.pages; index++) {
            // PUSH une liste de 6 ELEMENTS
            (()=>{
                let l = []
                for (let index = 0; index < this.per_pages; index++) {
                    const card = this.cards[index];
                    if (card != undefined) l.push(card);
                }
                this.list.push(l)
            })();
        }
        // append cards
        this.list[this.start].forEach(e => {
            this.container_card_slider.appendChild(e.generateHtml())    
        });
        // generate btn
        (()=>{
            const c_cont = document.getElementsByClassName('control')[0]
            let btn_left = document.createElement('button'),
                btn_right = document.createElement('button');
            btn_left.innerText = "<<"
            btn_left.className = "move_slide left_slide"
            btn_right.innerText = ">>"
            btn_right.className = "move_slide right_slide"
            // append
            c_cont.appendChild(btn_left)
                this.list.forEach((o,index) => {
                    let b = document.createElement('button')
                    b.innerText = index+1;
                    b.className = "move_slide dots"
                    c_cont.appendChild(b)
                });
            c_cont.appendChild(btn_right)
        })();
        // Transi
        [...document.getElementsByClassName('move_slide')].forEach(ob=>{
            console.log();
            ob.addEventListener('click',()=>{
                let chil = this.container_card_slider;
                let i = chil.children;
                [...i].forEach(m=>{
                    m.classList.add("transi");
                })
                setTimeout(()=>{
                    [...i].forEach(p => { p.remove()  });
                    this.start = this.start+1===this.pages?0:this.start+1;
                    this.list[this.start].forEach(e => {
                        this.container_card_slider.appendChild(e.generateHtml())    
                    });
                },700)
            })
        })        
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
        date:"12/10/9992",
        title:"Je suis le titre".repeat(2*Math.random()+1),
        message:"lorem lorem dez dezpok dpeoz jdpoejkz podkez odkezo kepodk dokz podekzpô".repeat(6*Math.random()+1),
        link:"/"
    })]
}).init()