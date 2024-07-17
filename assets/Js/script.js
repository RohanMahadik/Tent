// Client Slider JS
$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    autoplay: true,
    navText: ['<span class="icon-arrow-left2"></span>', '<span class="icon-arrow-right2"></span>'],
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        }
    }
})

// Video Js 
var player = videojs('my-video');

player.on('play', function () {
    var playButton = document.querySelector('.vjs-play-control');
    if (playButton) {
        playButton.style.display = 'none';
    }
});

player.on('pause', function () {
    var playButton = document.querySelector('.vjs-play-control');
    if (playButton) {
        playButton.style.display = 'block';
    }
});