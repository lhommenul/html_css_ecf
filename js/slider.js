
/*
======= >  Container pour faire les pages et le contenu
<ul class="list_cards_actu">

</ul>
======= >  Container pour faire apparaitre les bouttons de control 
<div class="control">

</div> 

=> Javascript pour initialiser un slider

// new Slider({
//     per_pages:6,
//     start:0,
//     container : document.getElementsByClassName('list_cards_actu')[0],
//     cards:[]
// }).init()

*/
export {
    Student
}

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