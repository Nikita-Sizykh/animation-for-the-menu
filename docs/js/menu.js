$(document).ready(function() {

   function open() {
        $('.open').click(function(){
            $('.open').hide( 'slow' );
            $('.open').addClass('.open-none');
            $('.close').show( 'slow' ).addClass('.close-block');
            $('.close-block').removeClass('.close');
        })
   }
    
    function close() {
        $('.close').click( function(){
            $('.close').hide( 'slow' );
            $('.close').removeClass('.close-block');
            $('.open').show( 'slow' ).removeClass('.open-none');
        
        })
    }
    
    open();
    close();

    
    
    
})