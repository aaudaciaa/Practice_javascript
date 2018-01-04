// 테이블의 행(tr) 아무데나 클릭하면 해당 글 내용 볼 수있도록 만들기

// 내가 한 거
// // tr에 해당하는 부분을 click 하면
// // ** 현재 click한 부분의 id가 몇인지 파악해야 함.
// var content = document.querySelectorAll('.content');
//
// for(var i = 0; i < content.length; i++) {
//   content[i].onclick = function() {
//     var look = this.getAttribute('data-id');
//
//     // 페이지를 이동한다.
//     // **location.href = '/board/?';
//     location.href = '/boards/' + look;
//   }
// }

// 강사님이 한 거
// // 1. tr에 해당하는 HTML element를 찾는다.
// var tr = document.getElementsByClassName('content');
// // 2. HTML element에 click 이벤트 리스너를 달아준다.
// for (var i = 0; tr.length; i++) {
//   tr[i].onclick = function() {
//     // 3. 이벤트 핸들러에서는 해당 HTML element가 가지고 있는 속성
//     var id = this.getAttribute('data-id');
//     // 4. 해당 속성 값으로 url을 만들어서 페이지를 이동한다.
//     location.href = '/boards/' + id;
//   }
// }

// 위의 내용을 jquery로 작성
// $(document).ready(function() { // == $(fucntion(){})
//   // var tr = document.getElementsByClassName('content');
//   $('.table').on('click', '.board', function() {
//     location.href = '/boards/' + $(this).data('id'); // $(this).data('id') == $(this).attr('data-id')
//   })
// })
