import {Student} from '/js/slider.js'

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
