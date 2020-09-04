//import 'jquery';
import  Flickity from 'flickity-fade';
export default function() {
    // element argument can be a selector string
    //   for an individual element

   if($('.main-carousel').length){

        var flkty = new Flickity( '.main-carousel', {
            wrapAround: true,
            fade: true,
            adaptiveHeight: false,
            autoPlay: 2500,
            pauseAutoPlayOnHover: false,
            prevNextButtons: false,
        });
    }
    if($('.testimonial-carousel .carousel-cell').length > 1){
        var flkty_testimonial = new Flickity( '.testimonial-carousel', {
            wrapAround: true,
            fade: true,
            adaptiveHeight: false,
            autoPlay: 2500,
            pauseAutoPlayOnHover: false,
            prevNextButtons: false,
        });
    }
}