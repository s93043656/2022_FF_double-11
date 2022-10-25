$(".Popupbtn").click(function() {
    $("div[id=" + $(this).attr("data-activity") +"]").fadeIn(200);
    });
$(".popup_close").click(function() {
    $(".mask").fadeOut(200);
});

$(window).bind('scroll', function() {
    var currentTop = $(window).scrollTop();
    var elems = $('.secblock');
    elems.each(function(index){
        var elemTop   = $(this).offset().top;
        var elemBottom  = elemTop + $(this).height();
        var id    = $(this).attr('id');
        var navElem = $('ul.menubox li[id="#' + id+ '"]');
        navElem.removeClass( 'active' )
        if(currentTop >= elemTop && currentTop <= elemBottom){
        navElem.addClass('active');
        }
    })
});

// 選擇框
$('select').each(function(){
    var $this = $(this), numberOfOptions = $(this).children('option').length;

    $this.addClass('select-hidden'); 
    $this.wrap('<div class="select"></div>');
    $this.after('<div class="select-styled"></div>');

    var $styledSelect = $this.next('div.select-styled');
    $styledSelect.text($this.children('option').eq(0).text());

    var $list = $('<ul />', {
        'class': 'select-options'
    }).insertAfter($styledSelect);

    for (var i = 0; i < numberOfOptions; i++) {
        $('<li />', {
            text: $this.children('option').eq(i).text(),
            rel: $this.children('option').eq(i).val()
        }).appendTo($list);
    }

    var $listItems = $list.children('li');

    $styledSelect.click(function(e) {
        e.stopPropagation();
        $('div.select-styled.active').not(this).each(function(){
            $(this).removeClass('active').next('ul.select-options').hide();
        });
        $(this).toggleClass('active').next('ul.select-options').toggle();
    });

    $listItems.click(function(e) {
        e.stopPropagation();
        $styledSelect.text($(this).text()).removeClass('active');
        $this.val($(this).attr('rel'));
        $list.hide();
    });

    $(document).click(function() {
        $styledSelect.removeClass('active');
        $list.hide();
    });
});


var splitCookie = document.cookie.split("timeCookie=");
// 檢查cookie有無資料,有就續跑
if($.isNumeric(splitCookie[1])){
    cookieTimer(splitCookie[1])
}

// 只執行一次的click
// $(".btn").one("click", function () {
//     $(".till_font").css("display","none");
// });

// 點擊刷新
$(".btn.refresh").on("click", function () {
    document.cookie = "timeCookie=900";
    location.reload()
});

function cookieTimer(setTime){
// 計時器
    const startTime = new Date().getTime();
    const targetSeconds = setTime;
    var timer = function (startTime) {
        var currentTime = new Date().getTime();
        var diffSec = Math.round((currentTime - startTime) / 1000);
        var remainingTime = targetSeconds - diffSec;

        update(remainingTime);   
        if (remainingTime == 0) {
            clearInterval(timerId);
            document.cookie = "timeCookie=0";
            $(".msg").text("時間到囉(☍﹏⁰)");
            $(".lockbg , .btn_o").addClass('lockon');
        } 
    }

    var timerId = setInterval( function () { 
        timer(startTime);
    }, 1000);
        function update (seconds) {
        barRenderer(seconds);
        textRenderer(seconds);
    }

    function barRenderer (seconds) {
    //   遞減計算。
    //   var percent = (seconds / targetSeconds) * 100;
    //   $(".bar").css("width", percent + "%");
    //   遞增計算。
        var percent_2 = (1 - (seconds / targetSeconds)) * 100;
        $(".bar_2").css("width", percent_2 + "%");
    }

    function textRenderer (seconds) {
        document.cookie = "timeCookie=" + seconds + "";
        var sec = seconds % 60;  
        var min = Math.floor(seconds / 60); 
        min = min.toString().padStart(2, '0');
        sec = sec.toString().padStart(2, '0');
        $(".text").text(min + ":" + sec);		
    }
}

var currentTop = $(window).scrollTop();
var elems = $('.secblock');
elems.each(function(index){
    var elemTop   = $(this).offset().top;
    var elemBottom  = elemTop + $(this).height();
    var id    = $(this).attr('id');
    var navElem = $('ul.menubox li[id="#' + id+ '"]');
    navElem.removeClass( 'active' )
    if(currentTop >= elemTop && currentTop <= elemBottom){
        navElem.addClass('active');
    }
})

$(document).ready(function(){
    $('.menubtn01').click(function(){ 
        $('html,body').animate({scrollTop:$('.sec02-block').offset().top}, 500);
    });
    $('.menubtn02').click(function(){ 
        $('html,body').animate({scrollTop:$('.sec03-block').offset().top}, 500);
    });
    $('.menubtn03').click(function(){ 
        $('html,body').animate({scrollTop:$('.sec04-block').offset().top}, 500);
    });
    $('.menubtn05').click(function(){ 
        $('html,body').animate({scrollTop:$('.sec01-block').offset().top}, 500);
    });
    $('.page01btn').click(function(){ 
        $('html,body').animate({scrollTop:$('.sec02-block').offset().top}, 500);
    });
});

$(document).scroll(function() {
    var topy = $(this).scrollTop();
    if (topy > 800) {
        $('.menubox li.menubtn05').addClass('appear');
    } else {
        $('.menubox li.menubtn05').removeClass('appear');
    }
});

particlesJS("particles-js", {
    "particles": {
    "number": {
        "value": 355,
        "density": {
        "enable": true,
        "value_area": 789.1476416322727
        }
    },
    "color": {
        "value": "#ffffff"
    },
    "shape": {
        "type": "circle",
        "stroke": {
        "width": 0,
        "color": "#000000"
        },
        "polygon": {
        "nb_sides": 5
        },
        "image": {
        "src": "img/github.svg",
        "width": 100,
        "height": 100
        }
    },
    "opacity": {
        "value": 0.48927153781200905,
        "random": false,
        "anim": {
        "enable": true,
        "speed": 0.2,
        "opacity_min": 0,
        "sync": false
        }
    },
    "size": {
        "value": 2,
        "random": true,
        "anim": {
        "enable": true,
        "speed": 2,
        "size_min": 0,
        "sync": false
        }
    },
    "line_linked": {
        "enable": false,
        "distance": 150,
        "color": "#ffffff",
        "opacity": 0.4,
        "width": 1
    },
    "move": {
        "enable": true,
        "speed": 0.2,
        "direction": "none",
        "random": true,
        "straight": false,
        "out_mode": "out",
        "bounce": false,
        "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
        }
    }
    },
    "interactivity": {
    "detect_on": "canvas",
    "events": {
        "onhover": {
        "enable": true,
        "mode": "bubble"
        },
        "onclick": {
        "enable": true,
        "mode": "push"
        },
        "resize": true
    },
    "modes": {
        "grab": {
        "distance": 400,
        "line_linked": {
            "opacity": 1
        }
        },
        "bubble": {
        "distance": 83.91608391608392,
        "size": 1,
        "duration": 3,
        "opacity": 1,
        "speed": 3
        },
        "repulse": {
        "distance": 200,
        "duration": 0.4
        },
        "push": {
        "particles_nb": 4
        },
        "remove": {
        "particles_nb": 2
        }
    }
    },
    "retina_detect": true
});