// JS Goes here - ES6 supported
import 'bootstrap';
//import 'jquery';
import $ from 'jquery';
window.jQuery = $;
window.$ = $;

import ScrollOut from "scroll-out";
import Sticky from "sticky-js";

import home from "./js/home";

//jQuery(document).ready(() => {

home();
//});



ScrollOut({
    /* options */
  });


  ScrollOut({
    targets: ".header",
    offset: 100
  });

 
  var sticky = new Sticky('.sticky');


  let root = document.documentElement;
  const colors = ["#074761","#7d0f4b",  "#36735c", "#d08f4c"];
  const colors_light = [
              "#E6ECEE", //AC-Blue
              "#E8D4DF", //AC-Red
              "#E6EDEA", //AC-Green
              "#F6E8DB", //AC-Yellow
          ];
  let randomColor =  Math.floor(Math.random() * colors.length);       

  root.style.setProperty('--primary', colors[randomColor]);
  root.style.setProperty('--primary-light', colors_light[randomColor]);


  $('.navbar-collapse').on('show.bs.collapse', function(){
    $('.header').addClass('nav-open');
  }).on('hide.bs.collapse', function(){
    $('.header').removeClass('nav-open');
  });



import "./css/main.css";

// Say hello
//console.log("🦊 Hello! Edit me in src/index.js");
