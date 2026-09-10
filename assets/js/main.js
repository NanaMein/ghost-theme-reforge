function initParallax() {
    jarallax(document.querySelectorAll('.has-parallax-feed .gh-card'), {
        speed: 0.8,
    });
}

(function () {
    if (!document.body.classList.contains('has-background-about')) return;

    const about = document.querySelector('.gh-about');
    if (!about) return;

    const image = about.querySelector('.gh-about-image');

    if (!image.naturalWidth) {
        imagesLoaded(image, function () {
            about.style.setProperty('--about-height', image.clientWidth * image.naturalHeight / image.naturalWidth + 'px');
        });
    }
})();

(function () {
    initParallax();
})();

(function () {
    const toggle = document.querySelector('[data-toggle-comments]');
    if (!toggle) return;

    toggle.addEventListener('click', function () {
        document.body.classList.toggle('comments-opened');
    });
})();

(function () {
    const element = document.querySelector('.gh-article-excerpt');
    if (!element) return;

    let text = element.textContent;
    const emojiRE = /\p{EPres}|\p{ExtPict}/gu;

    const emojis = text.match(emojiRE);
    if (!emojis) return;

    emojis.forEach(function (emoji) {
        text = text.replace(emoji, `<span class="emoji">${emoji}</span>`);
    });

    element.innerHTML = text;
})();

(function () {
    pagination(true, initParallax);
})();

(function () {
    var button = document.querySelector('[data-theme-toggle]');
    if (!button) return;

    var STORAGE_KEY = 'solo_theme_mode';
    var NIGHT_COLOR = '#4B0082';

    var root = document.documentElement;
    var lightColor = (getComputedStyle(root).getPropertyValue('--background-color') || '').trim();
    if (!lightColor) lightColor = '#ffffff';

    function normalizeHex(hex) {
        if (!hex) return null;
        hex = hex.trim();
        if (hex[0] === '#') hex = hex.slice(1);
        if (hex.length === 3) {
            hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
        }
        if (hex.length !== 6) return null;
        return '#' + hex.toUpperCase();
    }

    function setContrastClassForColor(hexWithHash) {
        var hex = normalizeHex(hexWithHash);
        if (!hex) return;

        var accentColor = hex.slice(1);
        var r = parseInt(accentColor.substr(0, 2), 16);
        var g = parseInt(accentColor.substr(2, 2), 16);
        var b = parseInt(accentColor.substr(4, 2), 16);
        var yiq = ((r * 299) + (g * 587) + (b * 114)) / 1000;
        var textColor = (yiq >= 128) ? 'dark' : 'light';

        root.classList.remove('has-dark-text', 'has-light-text');
        root.classList.add('has-' + textColor + '-text');
    }

    var currentMode = 'light';

    function applyMode(mode) {
        currentMode = mode;

        var nextColor = mode === 'night' ? NIGHT_COLOR : lightColor;
        root.style.setProperty('--background-color', nextColor);
        setContrastClassForColor(nextColor);

        button.setAttribute('aria-pressed', mode === 'night' ? 'true' : 'false');
        button.dataset.themeMode = mode;
    }

    try {
        var saved = localStorage.getItem(STORAGE_KEY);
        if (saved === 'night' || saved === 'light') {
            currentMode = saved;
        }
    } catch (e) {
        // ignore
    }

    applyMode(currentMode);

    button.addEventListener('click', function () {
        applyMode(currentMode === 'light' ? 'night' : 'light');
        try {
            localStorage.setItem(STORAGE_KEY, currentMode);
        } catch (e) {
            // ignore
        }
    });
})();
