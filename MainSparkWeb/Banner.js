let stars = document.getElementById('stars');
        let moon = document.getElementById('moon');
        let mountains_behind = document.getElementById('mountains_behind');
        let text = document.getElementById('text');
        let mountains_front = document.getElementById('mountains_front');
        let header = document.querySelector('header');

        window.addEventListener('scroll', function(){
            let value = window.scrollY;
            stars.style.left = value * 0.125 + 'px';
            moon.style.top = value * 0.525 + 'px';
            mountains_behind.style.top = value * 0.25 + 'px';
            mountains_front.style.top = value * 0 + 'px';
            header.style.top = value * 0.25 + 'px';
        })