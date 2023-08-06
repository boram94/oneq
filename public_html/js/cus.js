/* scripts.js 건들지 말고 여기다가 추가하세용! */

// 상단메뉴 바 클릭 시 현재위치 효과
const btnActive = () => {

    // url 읽어오기
    let url = window.location.href;
    // ?로 구분짓고 쿼리스트링 부분가져오기
    let queryString = url.split('?')[1];
    // &으로 구분하여 배열에 넣기
    let params = new URLSearchParams(queryString);
    // 키값이 m인 값 가져오기
    let menu = params.get('m');

    if(menu != null) {
        // 기존 active 클래스 지우기
        $('.navbar-nav').find('.active').removeClass('active');
    
        // menu에 들어있는 버튼에 active 주기
        $('#'+menu).addClass('active');

    }else{
        $('#home').addClass('active');
    }

}

// 페이지 이동
const pageMove = (m) => {

    // url 담기
    location.href = window.location.pathname + "?m=" + m;
    
}
