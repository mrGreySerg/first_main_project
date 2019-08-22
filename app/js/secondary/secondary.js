
// console.log(jQuery('.active'));
// console.log($('.active'));
// $('.active').css('color', 'red');

// $(function(){}) - аналог реди, выполнение после загрузки страницы.
/* 
$(function(){
    if($('div').hasClass('active'))
        // console.log("we have .active class!!!")

        // $('div').removeClass('active');
        // $('div').addClass('first');

        // $('div').removeClass('active')
        //         .addClass('first');

        // console.log($('a').attr('href'));

        // $('a').attr('href', 'https://yandex.ru');
        // console.log($('a').attr('href'));

        $('a').removeAttr('href');
        console.log($('a').attr('href'));
})
*/

// ================================================================== //
/*
$('.action__button').click(function(){
    console.log("click-click");
});
$('button').on('click', function(){
    console.log('hello');
});

// one - функция выполняется только один раз
$('button').one('click', function(){ 
    console.log('push me');
});
*/

// ================================================================== //
/* $('ul li').each(function(i, elem){
    console.log(i);
    console.log(elem);
})

$('ul li').each(function(i, elem){
    if($(elem).hasClass('action'))
        $(elem).addClass('modify');
})
*/

$(function(){
   
   // скрытие объекта
    $('#fadeOut').on('click', function(){
        $('#circle').fadeOut(1000); // ('slow', 'normal', 'fast') - возможные параметры.
    });

    // появление объекта
    $('#fadeIn').on('click', function(){
        $('#circle').fadeIn();
    });

    // в какое значение прозрачности придти и за какое время.
    $('#fadeTo').on('click', function(){
        $('#circle').fadeTo(1000, .5);
    });

    // переключатель (видно/не видно)
    $('#fadeToggle').on('click', function(){
        $('#circle').fadeToggle();
    });

    // уменьшает размер и прозрачность до 0
    $('#hide').on('click', function(){
        $('#circle').hide(2000);
    });

    // увеличивает и прозрачность 1.
    $('#show').on('click', function(){
        $('#circle').show(2000);
    });

    // slideDown, Up, Toggle - сворачивает как жалюзи.
    $('#slideDown').on('click', function(){
        $('#circle').slideDown(2000);
    });

    $('#slideUp').on('click', function(){
        $('#circle').slideUp(2000);
    });
    
    $('#slideToggle').on('click', function(){
        $('#circle').slideToggle(2000);
    });
})

// animat любых параметров

$(function(){

    $('#size').on('click', function(){
        $('#circle').animate({width: '50px', height: '50px'}, 1000);
    });

    $('#height').on('click', function(){
        $('#circle').animate({height: '150px'}, 1000);
    });

    $('#width').on('click', function(){
        $('#circle').animate({width: '150px'}, 1000);
    });

    $('#marginTop').on('click', function(){
        $('#circle').animate({marginTop: '50px'}, 1000);
    });

    $('#marginLeft').on('click', function(){
        $('#circle').animate({marginLeft: '150px'}, 1000);
    });

    $('#borderRadius').on('click', function(){
        $('#circle').animate({borderRadius: '15px'}, 1000);
    });
    
    $('#stop').on('click', function(){
        $('#circle').stop();
    });


})

// создание маски для ввода (тел., email и т.д.)
$(function(){
    $('#phone').mask('+7(000)000-00-00');
})