import  Flickity from 'flickity-fade';
export default function() {
  
   if($('.main-carousel').length) {

        var flkty = new Flickity( '.main-carousel', {
            wrapAround: true,
            fade: true,
            adaptiveHeight: false,
            autoPlay: 3900,
            pauseAutoPlayOnHover: false,
            prevNextButtons: false,
            pageDots: $('.main-carousel .carousel-cell').length > 1 ? true : false,
            draggable: false,
        });


        setTimeout(function(){
            flkty.resize();
        },1000);
    }

    if($('.testimonial-carousel .carousel-cell').length > 1){
     
        var flkty_testimonial = new Flickity( '.testimonial-carousel', {
            wrapAround: true,
            fade: true,
            adaptiveHeight: false,
            autoPlay: 4200,
            pauseAutoPlayOnHover: false,
            prevNextButtons: false,
        });
    }
}
