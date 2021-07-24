class Student{
    constructor(props){
        this.data = props;
    }
    generateHtml(){
        // create Elements
        let card_student = document.createElement("li"),
            student_img = document.createElement("img"),
            student_name = document.createElement("p"),
            student_link = document.createElement("a");
        // ==== SET CLASS ====
        (()=>{
            card_student.className = "card_student"
                student_img.className = "student_img"
                student_name.className = "student_name"
                student_link.className = "student_link"
        })();
        // ==== SET DATA ====
        (()=>{
            student_img.src= this.data.src;
            student_img.srcset= this.data.srcset;
            student_name.innerText = this.data.student_name;
            student_link.innerText = "En savoir plus";
            student_link.href = this.data.href;
        })();
        // ==== APPEND DATA ====
        (()=>{
            card_student.appendChild(student_img)
            card_student.appendChild(student_name)
            card_student.appendChild(student_link)
        })();
        return card_student;
    }
}

new Slider({
    per_pages:16,
    start:0,
    container : document.getElementsByClassName('list_cards_actu')[0],
    cards:generateCol(12)
    }).init()


function generateCol(nb_elements) {
    let i = []
    for (let index = 0; index < nb_elements; index++) {
        i.push(new Student({
            src:"../assets/home/picture/face.png",
            srcset:"../assets/home/picture/face_2x.png 2x",
            student_name:"Francine Auhi",
            href:"/views/presentation_etudiant.html",
        }).generateHtml(),
        new Student({
            src:"../assets/home/picture/face_1.png",
            srcset:"../assets/home/picture/face_1_2x.png 2x",
            student_name:"Francine Auhi",
            href:"/views/presentation_etudiant.html",
        }).generateHtml(),
        new Student({
            src:"../assets/home/picture/face_2.png",
            srcset:"../assets/home/picture/face_2_2x.png 2x",
            student_name:"Francine Auhi",
            href:"/views/presentation_etudiant.html",
        }).generateHtml(),
        new Student({
            src:"../assets/home/picture/face_3.png",
            srcset:"../assets/home/picture/face_3_2x.png 2x",
            student_name:"Francine Auhi",
            href:"/views/presentation_etudiant.html",
        }).generateHtml())
    }
    return i
}
