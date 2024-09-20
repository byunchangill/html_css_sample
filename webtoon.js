document.addEventListener('DOMContentLoaded', function() {
    // 요일별 웹툰 데이터 객체
    const webtoons = {
        monday: [
            { title: '월요일 웹툰 1', author: '작가 1', image: 'monday-webtoon1.jpg' },
            { title: '월요일 웹툰 2', author: '작가 2', image: 'monday-webtoon2.jpg' }
        ],
        tuesday: [
            { title: '화요일 웹툰 1', author: '작가 3', image: 'tuesday-webtoon1.jpg' },
            { title: '화요일 웹툰 2', author: '작가 4', image: 'tuesday-webtoon2.jpg' }
        ],
        // 수요일부터 일요일까지 비슷한 구조로 추가
    };

    // 웹툰을 표시할 컨테이너 요소 선택
    const container = document.getElementById('webtoon-container');
    // 요일 링크 요소들 선택
    const dayLinks = document.querySelectorAll('.day-list a');

    // 특정 요일의 웹툰을 표시하는 함수
    function showWebtoons(day) {
        // 컨테이너 내용 초기화
        container.innerHTML = '';
        // 선택된 요일의 웹툰 배열을 순회
        webtoons[day].forEach(webtoon => {
            // 각 웹툰을 위한 새로운 div 요소 생성
            const webtoonElement = document.createElement('div');
            // 클래스 이름 추가
            webtoonElement.className = 'webtoon-item';
            // 웹툰 정보를 HTML로 구성
            webtoonElement.innerHTML = `
                <img src="${webtoon.image}" alt="${webtoon.title}">
                <h4>${webtoon.title}</h4>
                <p>${webtoon.author}</p>
            `;
            // 생성된 웹툰 요소를 컨테이너에 추가
            container.appendChild(webtoonElement);
        });
    }

    // 각 요일 링크에 이벤트 리스너 추가
    dayLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // 기본 링크 동작 방지
            e.preventDefault();
            // 클릭된 링크의 data-day 속성 값 가져오기
            const day = this.getAttribute('data-day');
            // 해당 요일의 웹툰 표시
            showWebtoons(day);
        });
    });

    // 페이지 로드 시 초기에 월요일 웹툰 표시
    showWebtoons('monday');
});
