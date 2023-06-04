document.addEventListener('DOMContentLoaded', function() {
    // HTML 문서가 로드된 이후에 실행될 코드를 작성하겠음.
    var links = document.querySelectorAll('.nav-link');
    // nav-link라는 클래스를 가진 태그를 모두 가져와서 navLinks로 지정
    links.forEach(function(link) {
      link.addEventListener('click', function(event) {
        // navLinks의 모든 link들을 각각 하나씩 가져와서
        // 이벤트 리스너를 부여할 것.
        const target = event.target
        const href = target.getAttribute('href');

        // 네비게이션바 아이템에 active 클래스 추가
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(function(navLink) {
            if (navLink.getAttribute('href') === href) {
                navLink.classList.add('active');
                navLink.setAttribute('aria-current','page')
            }
            else {
                navLink.classList.remove('active');
                navLink.removeAttribute('aria-current')
            }
        });
      });
    });
  });