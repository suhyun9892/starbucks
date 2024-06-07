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

const badgeEl = document.querySelector('header .badges');

window.addEventListener('scroll', _.throttle(function () {
  console.log('window.scrollY');
  if (window.scrollY > 500) {
    //배지 숨기기
    // gsap.to(요소, 지속시간, 옵션);
    gsap.to(badgeEl, .6, {
      opacity: 0,
      display: 'none'
    });
    gsap.to('#to-top', .2, {
      x: 0
    });
  } else {
    //배지 보이기
    gsap.to(badgeEl, .6, {
      opacity: 1,
      display: 'block'
    });
    // 버튼 숨기기
    gsap.to('#to-top', .2, {
      x: 100
    });
  }
}, 300));
// _.throttle(함수, 시간)
// 스크롤 할 때 마다 함수가 많이 실행되어 프로그램이 무거워지는 것을 방지

const toTop = document.querySelector('#to-top');
toTop.addEventListener('click', function () {
  gsap.to(window, .7, {
    scrollTo: 0
  })
});


const fadeEls = document.querySelectorAll('.visual .fade-in');
fadeEls.forEach(function (fadeEl, index) {
  gsap.to(fadeEl, 1, {
    delay: (index + 1) * .7,
    opacity: 1
  });
});

new Swiper('.notice-line .swiper-container', {
  direction: 'vertical',
  autoplay: true,
  loop: true
});

new Swiper('.promotion .swiper-container', {
  slidesPerView: 3, //한번에 3개의 슬라이드를 보여주겠다
  spaceBetween: 10, // 슬라이드 사이 여백
  centeredSlides: true,//1번 슬라이드가 가운데 보이기
  loop: true,
  // autoplay: {
  //   delay: 5000
  // },
  pagination: {
    el: '.promotion .swiper-pagination',
    clickable: true
  },
  navigation: {
    prevEl: '.promotion .swiper-prev',
    nextEl: '.promotion .swiper-next'
  }
});

new Swiper('.awards .swiper-container', {
  autoplay: true,
  loop: true,
  spaceBetween: 30,
  slidesPerView: 5,
  navigation: {
    prevEl: '.awards .swiper-prev',
    nextEl: '.awards .swiper-next'
  }
});


const promotionEl = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion');
let isHidePromotion = false;
promotionToggleBtn.addEventListener('click', function () {
  isHidePromotion = !isHidePromotion
  if (isHidePromotion) {
    promotionEl.classList.add('hide');
  } else {
    promotionEl.classList.remove('hide');
  }
});

// 범위 랜덤 함수(소수점 2자리까지)
function random(min, max) {
  // `.toFixed()`를 통해 반환된 문자 데이터를,
  // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
  return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}

function floatingObject(selector, delay, size) {
  gsap.to(selector,
    random(1.5, 2.5),
    {
      y: size,
      repeat: -1,
      yoyo: true,
      ease: Power1.easeInout,
      delay: random(0, delay)
    });
}
floatingObject('.floating1', 1, 15);
floatingObject('.floating2', .5, 15);
floatingObject('.floating3', 1.5, 20);

const spyEls = document.querySelectorAll('section.scroll-spy');
spyEls.forEach(function (spyEl) {
  new ScrollMagic
    .Scene({
      triggerElment: spyEl, //보여짐 여부를 감시할 요소를 지정
      triggerHook: .8 //어떤 지점에서 감지되었다는 것을 판단할 것인가 ?
    })
    .setClassToggle(spyEl, 'show')
    .addTo(new ScrollMagic.Controller());
});

const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear();