import Slider from '/js/slider.js'
class Card{
    constructor(props){
        this.data = props;
    }
    generateHtml(){
        // create Elements
        let card = document.createElement("li"),
            main_img_card = document.createElement("img"),
            card_title = document.createElement("h3"),
            card_message = document.createElement("p"),
            link_card_next = document.createElement("a"),
                text_link_card_next = document.createElement("span"),
                icon_link_card = document.createElement("img");
        // ==== SET CLASS ====
        (()=>{
            card.className = "card"
            main_img_card.className = "main_img_card"
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
            card_title.innerText = this.data.title;
            card_message.innerText =  this.data.message;
            link_card_next.href = this.data.link;
            icon_link_card.src = "../assets/home/icon/right_circle.svg"
            text_link_card_next.innerText = "Lire la suite"
        })();
        // ==== APPEND DATA ====
        (()=>{
            card.appendChild(main_img_card)
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
        src:`/assets/home/picture/Keyboard_bottom.png`,
        srcset:`/assets/home/picture/Keyboard_bottom_2x.png 2x`,
        alt:"photo d'un langage de programmation",
        title:"Module JavaScript",
        message:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, …",
        link:"/"
    }),new Card({
        src:`/assets/home/picture/Code_bottom.png`,
        srcset:`/assets/home/picture/Code_bottom_2x.png 2x`,
        alt:"photo d'un langage de programmation",
        title:"Module HTML/CSS",
        message:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, …",
        link:"/"
    }),new Card({
        src:`/assets/home/picture/Code_bottom.png`,
        srcset:`/assets/home/picture/Code_bottom_2x.png 2x`,
        alt:"photo d'un langage de programmation",
        title:"Module HTML/CSS",
        message:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, …",
        link:"/"
    }),new Card({
        src:`/assets/home/picture/Keyboard_bottom.png`,
        srcset:`/assets/home/picture/Keyboard_bottom_2x.png 2x`,
        alt:"photo d'un langage de programmation",
        title:"Module JavaScript",
        message:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, …",
        link:"/"
    }),new Card({
        src:`/assets/home/picture/Code_bottom.png`,
        srcset:`/assets/home/picture/Code_bottom_2x.png 2x`,
        alt:"photo d'un langage de programmation",
        title:"Module HTML/CSS",
        message:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, …",
        link:"/"
    }),new Card({
        src:`/assets/home/picture/Code_bottom.png`,
        srcset:`/assets/home/picture/Code_bottom_2x.png 2x`,
        alt:"photo d'un langage de programmation",
        title:"Module HTML/CSS",
        message:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, …",
        link:"/"
    }),new Card({
        src:`/assets/home/picture/Keyboard_bottom.png`,
        srcset:`/assets/home/picture/Keyboard_bottom_2x.png 2x`,
        alt:"photo d'un langage de programmation",
        title:"Module JavaScript",
        message:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, …",
        link:"/"
    }),new Card({
        src:`/assets/home/picture/Code_bottom.png`,
        srcset:`/assets/home/picture/Code_bottom_2x.png 2x`,
        alt:"photo d'un langage de programmation",
        title:"Module HTML/CSS",
        message:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, …",
        link:"/"
    }),new Card({
        src:`/assets/home/picture/Code_bottom.png`,
        srcset:`/assets/home/picture/Code_bottom_2x.png 2x`,
        alt:"photo d'un langage de programmation",
        title:"Module HTML/CSS",
        message:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, …",
        link:"/"
    }),new Card({
        src:`/assets/home/picture/Keyboard_bottom.png`,
        srcset:`/assets/home/picture/Keyboard_bottom_2x.png 2x`,
        alt:"photo d'un langage de programmation",
        title:"Module JavaScript",
        message:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, …",
        link:"/"
    }),new Card({
        src:`/assets/home/picture/Code_bottom.png`,
        srcset:`/assets/home/picture/Code_bottom_2x.png 2x`,
        alt:"photo d'un langage de programmation",
        title:"Module HTML/CSS",
        message:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, …",
        link:"/"
    }),new Card({
        src:`/assets/home/picture/Code_bottom.png`,
        srcset:`/assets/home/picture/Code_bottom_2x.png 2x`,
        alt:"photo d'un langage de programmation",
        title:"Module HTML/CSS",
        message:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, …",
        link:"/"
    }),new Card({
        src:`/assets/home/picture/Keyboard_bottom.png`,
        srcset:`/assets/home/picture/Keyboard_bottom_2x.png 2x`,
        alt:"photo d'un langage de programmation",
        title:"Module JavaScript",
        message:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, …",
        link:"/"
    }),new Card({
        src:`/assets/home/picture/Code_bottom.png`,
        srcset:`/assets/home/picture/Code_bottom_2x.png 2x`,
        alt:"photo d'un langage de programmation",
        title:"Module HTML/CSS",
        message:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, …",
        link:"/"
    }),new Card({
        src:`/assets/home/picture/Code_bottom.png`,
        srcset:`/assets/home/picture/Code_bottom_2x.png 2x`,
        alt:"photo d'un langage de programmation",
        title:"Module HTML/CSS",
        message:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, …",
        link:"/"
    }),new Card({
        src:`/assets/home/picture/Code_bottom.png`,
        srcset:`/assets/home/picture/Code_bottom_2x.png 2x`,
        alt:"photo d'un langage de programmation",
        title:"Module JavaScript",
        message:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, …",
        link:"/"
    }),new Card({
        src:`/assets/home/picture/Code_bottom.png`,
        srcset:`/assets/home/picture/Code_bottom_2x.png 2x`,
        alt:"photo d'un langage de programmation",
        title:"Module HTML/CSS",
        message:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, …",
        link:"/"
    }),new Card({
        src:`/assets/home/picture/Code_bottom.png`,
        srcset:`/assets/home/picture/Code_bottom_2x.png 2x`,
        alt:"photo d'un langage de programmation",
        title:"Module HTML/CSS",
        message:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, …",
        link:"/"
    })]
}).init()


{/* <li class="card">
<img src="../assets/home/picture/Keyboard_bottom.png" src="../assets/home/picture/Keyboard_bottom_2x.png 2x" alt="photo d'un clavier d'ordinateur">
<h3 class="card_space">Module JavaScript</h3>
<p class="card_space">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, labore similique! Quo sequi, tempore repudiandae officiis assumenda delectus, eveniet nisi fugit perspiciatis esse vitae adipisci, facere quam odit. Magni, quibusdam.</p>
<a href="" class="link_card_next">Lire la suite <img class="icon_link_card" src="../assets/home/icon/right_circle.svg" alt="flèche vers la droite"></a>
</li> */}