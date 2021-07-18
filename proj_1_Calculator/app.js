var $inp = $('form[name = cal]');
var $input = $inp.find('input');
var $cls_btn = $('.cls_btn');
var $result_btn = $('.result_btn');
var $back = $('.back');
var $result = $inp.find('input[name=result]');

// 계산기 초기화(clear)
function clr() {
    $result.val(0);
}

// 계산기 입력 처리 함수
function calc(value) {

    // 입력이 들어가면 0을 지움
    if($result.val() == 0) 
    $result.val('');

    var val = $result.val() + value;
    $result.val(val);
}

function back() {
    $result.val(Math.floor($result.val()/10));
}

function my_result() {
    var calc = eval($result.val());

    // 결과창에 표시
    $result.val(calc);
}

// 이벤트 핸들러

$('input').click(function() {
    var $input_value = $(this).val();

    // 숫자와 사칙 연산자만 입력 처리
    if($input_value != '=' && $input_value != 'clear' && $input_value != '←') {
        calc($input_value);
    }
});

// 초기화 버튼
$('.cls_btn').click(function() {
    clr();
});

// 하나 빼는 버튼
$('.back').click(function() { // 연산자를 포함한 상태에서 백스페이스 누르면 (NaN)일때 다시 누르면 0으로 초기화
    if($result.val() == 'NaN')
        $result.val(0);
    back();
});

// 결과 버튼
$('.result_btn').click(function() {
    try {
        my_result();
    } catch(err) {
        $result.val('입력 오류');
    }
});

