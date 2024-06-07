const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');
// seachEl 안에서 input 찾는다는 뜻

searchEl.addEventListener('click', function () {
  searchInputEl.focus();
});

searchInputEl.addEventListener('focus', function () {
  searchEl.classList.add('focused');
  // 한번 검색요소를 잡았으면 js 명령을 통해서 focused 클래스를 추가하라는 뜻
  searchInputEl.setAttribute('placeholder', '통합검색');
  // html 속성 지정
});
searchInputEl.addEventListener('blur', function () {
  searchEl.classList.remove('focused');
  searchInputEl.setAttribute('placeholder', '');
});

const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear();