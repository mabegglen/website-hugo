import  Flickity from 'flickity-fade';
export default function() {
  
   if($('.main-carousel').length) {

        var flkty = new Flickity( '.main-carousel', {
            wrapAround: true,
            fade: true,
            adaptiveHeight: false,
            autoPlay: 3200,
            pauseAutoPlayOnHover: false,
            prevNextButtons: false,
            pageDots: $('.main-carousel .carousel-cell').length > 1 ? true : false,
        });
    }

    if($('.testimonial-carousel .carousel-cell').length > 1){
     
        var flkty_testimonial = new Flickity( '.testimonial-carousel', {
            wrapAround: true,
            fade: true,
            adaptiveHeight: false,
            autoPlay: 3500,
            pauseAutoPlayOnHover: false,
            prevNextButtons: false,
        });
    }
}