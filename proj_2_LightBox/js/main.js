// 일반 js 버전

// var indicator = document.querySelectorAll('.indicator button');
// var lightbox = document.querySelector('#lightbox');
// var block = document.querySelector('#block'); 
// // 라이트 박스 배경

// // 라이트 박스 표시
// function lightbox_open(num) {
//     lightbox.setAttribute('class', 'active');
//     block.setAttribute('class', 'active');

//     change_img(num);
//     indicator[num-1].focus();
// }

// // 라이트 박스 닫기
// function lightbox_close() {
//     lightbox.removeAttribute('class');
//     block.removeAttribute('class');
// }

// // 이미지를 버튼 눌렀을때 전환하는 함수
// function change_img(val) {
//     var imgs = document.querySelectorAll('figure > img');

//     for( var i=0; i< imgs.length; i++) {
//         imgs[i].removeAttribute('class');
//     }
//     imgs[val-1].setAttribute('class', 'active');
// }


// 제이쿼리 버전

$(function() {


    //  변수 초기화
    var $indicator = $('.indicator button');
    var $lightbox = $('#lightbox');
    var $block = $('#block'); // 라이트 박스 배경

    // 이미지 클릭시 생기는 라이트박스 이벤트
    $('img.thumb').click(function() {
        var img_num = $(this).index() - 1;
        lightbox_open(img_num);
    });
    
    // 라이트 박스 클릭시 닫기 이벤트
    $('.btn-close').click(function() {
        lightbox_close();
    });
   
    // 인디케이터 클릭 시 click 이벤트 | 라이트 박스 이미지 변경
    $indicator.click(function() {
        var img_num = $(this).index();
        change_img(img_num);
    });

    // 라이트 박스 표시
    function lightbox_open(num) {
        $lightbox.addClass('active');
        $block.addClass('active');
        change_img(num);
        $indicator.eq(num).focus();
    }

    // 라이트 박스 종료
    function lightbox_close() {
        $lightbox.removeAttr('class');
        $block.removeAttr('class');
    }

    // 이미지 전환 함수
    function change_img(val) {
        var $imgs = $('figure > img');

        for( var i = 0; i < $imgs.length; i++ ) {
            $imgs.eq(i).removeAttr('class');
        }

        $imgs.eq(val).attr('class', 'active'); // imgs 배열중 val 값인 것의 클래스를 액티브로 두기
    }

}); // end $()