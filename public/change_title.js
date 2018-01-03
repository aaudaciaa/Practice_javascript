// 제목 바꾸기 버튼을 클릭했을 때 바꿀 제목을 입력하라는 팝업창이 나오고 팝업창에 바꿀 제목을 입력하고 확인을 누르면
// 모든 글의 제목이 입력한 제목으로 바뀜.

// // alert("여기는 인덱스 페이지입니다.");
// // 1. 이벤트를 넣어줄 HTML element를 찾는다.
// var btn = document.getElementById('change-title');
//
// // 2. 해당 element에 원하는 이벤트를 달아준다.
// btn.onclick = function() {
//   // 실행문을 여기에 작성하면 된다. // 3. 이벤트가 발생했을 경우 실행하는 함수(function())를 만들어준다.
//   // 버튼을 누르면 prompt 창이 떠서 입력 메시지를 입력할 수 있고,
//   var title = prompt("바꿀 제목을 입력하세요.");
//   // 바꿀 내용물 (html element) 가 어디에 있는지 찾아야 한다.
//   // console.log(document.getElementById('tt'));
//   var titles = document.getElementsByClassName('title');
//   for(var i=0; i<titles.length; i++) {
//     // 해당 내용으로 모든 제목을 바꿔버립니다.
//     titles[i].textContent = title;
//   }
// }

// 위에 거를 jquery로 작성

// 내가 한 거
// $(document).ready(function() {
//   var btn = $('#change-title').click(function() {
//     var title = prompt("바꿀 제목을 입력하세요.");
//     $('title').textContent = title;
//   })
// })

// 강사님 한 거
$(document).ready(function() {
  var btn = $('#change-title').on('click', function() {
    var title = prompt("바꿀 제목을 입력하세요.");
    $('.title').text(title);
  })
})
