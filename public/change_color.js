// 세개의 버튼 HTML element를 찾아서
var btns = document.querySelectorAll('.color-btn');
// console.dir(btns);
// var btn = document.querySelector('.color-btn');
// console.log(btn);

// 각각의 버튼에 해당하는 색상을 정하고
// 빨강 -> text-danger
// 파랑 -> text-primary
// 노랑 -> text-warning
// 버튼 하나에 마우스를 올렸을 때
for(var i = 0; i < btns.length; i++) {
  // console.dir(btns[i])
  btns[i].onmouseover = function() {
    // console.dir(this); // this는 이벤트가 발생한 바로 그 친구를 가리킴
    var color = this.getAttribute('kaka');
    // 각각의 정해진 색상 class를 table에 넣어준다.
    var table = document.getElementsByTagName('table')[0];
    // console.log(table);
    table.setAttribute('class', "table table-hover " + color);
  }
}
