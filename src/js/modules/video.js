export default class Video {
    constructor(open, overlay) {
        this.openBtns = document.querySelectorAll(open);
        this.overlay = document.querySelector(overlay);
        this.closeBtns = this.overlay.querySelectorAll('.close');
    }

    init() {
        const tag = document.createElement('script');

        tag.src = "https://www.youtube.com/iframe_api";
        const firstScriptTag = document.getElementsByTagName('script')[0];
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

        this.openBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                console.log(btn.getAttribute('data-url'))
                if (document.querySelector('iframe#frame')) {
                    this.overlay.style.display = 'flex';
                } else {
                    this.overlay.style.display = 'flex';
                    this.play(btn.getAttribute('data-url'));
                }
            });
        });

        this.closeBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                this.overlay.style.display = 'none';
                this.play.stopVideo();
            });
        });
    }

    play(url) {
        this.player = new YT.Player('frame', {
            height: '100%',
            width: '100%',
            videoId: `${url}`,
        });
    }
}