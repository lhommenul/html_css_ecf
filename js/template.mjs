// ======== HEADER TEMPLATE ========
let source = "<div class='to_center'><a href='/' class='header_title_site'>DWWM</a><nav class='header_nav'><ul class='header_nav_list'><li class='header_list_items'><a class='header_nav_link' href='/'>ACCUEIL</a></li><li class='header_list_items'><a class='header_nav_link' href='/views/formation.html'>LA FORMATION</a></li><li class='header_list_items'><a class='header_nav_link' href='/views/student.html'>LES ETUDIANTS</a></li><li class='header_list_items'><a class='header_nav_link' href='/views/actu.html'>ACTUALITES</a></li><li class='header_list_items'><a class='header_nav_link' href='/views/contact.html'>NOUS CONTACTER</a></li></ul></nav></div>";
let template = Handlebars.compile(source);
const data_header = document.getElementsByTagName('header')[0].innerHTML;
document.getElementsByTagName('header')[0].innerHTML = template()+ data_header;

// ======== FOOTER TEMPLATE ========

source = "<div class='content_footer'><adress class='container_list_adress'><ul class='list_adress'><li class='item_list_adress'>Développeur Web et Web Mobile</li><li class='item_list_adress'>CEFIM</li><li class='item_list_adress'>32 Avenue Marcel Dassault</li><li class='item_list_adress'>37200 Tours</li><li class='item_list_adress'><a href='tel:024402680'>T : 02 47 40 26 80</a></li></ul></adress><ul class='list_mention'><li><a href='' class='list_mention_link'>Mentions légales</a></li><li><a href='' class='list_mention_link'>Politique de confidentialité</a></li></ul><ul class='list_social'><li class='item_list_social'><a href=''><img src='/assets/home/icon/facebook.svg' alt='icon facebook'></a></li><li class='item_list_social'><a href=''><img src='/assets/home/icon/twitter.svg' alt='icon twitter'></a></li><li class='item_list_social'><a href=''><img src='/assets/home/icon/linkedin.svg' alt='icon linkedin'></a></li></ul></div>"
template = Handlebars.compile(source);
const data_footer = document.getElementsByTagName('footer')[0].innerHTML;
document.getElementsByTagName('footer')[0].innerHTML = template()+ data_footer;
