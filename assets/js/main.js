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
    
    // --- CONFIGURE YOUR NIGHT PALETTE HERE ---
    var NIGHT_BG = '#111111';      // Dark background color
    var NIGHT_ACCENT = '#70A5FF';  // Accent color in dark mode (links, buttons)

    var root = document.documentElement;

    // Capture original light theme values from the stylesheet (not computed)
    // These are the values Ghost Admin set — we restore them when switching back to light
    var lightBg = null;
    var lightAccent = null;

    function captureLightValues() {
        // Read from the stylesheet's :root rule, not from computed style
        // (computed style may already be overridden by night mode)
        var sheets = document.styleSheets;
        for (var i = 0; i < sheets.length; i++) {
            try {
                var rules = sheets[i].cssRules || sheets[i].rules;
                for (var j = 0; j < rules.length; j++) {
                    if (rules[j].selectorText === ':root') {
                        var bg = rules[j].style.getPropertyValue('--background-color');
                        if (bg && bg.trim()) lightBg = bg.trim();
                        var accent = rules[j].style.getPropertyValue('--ghost-accent-color');
                        if (accent && accent.trim()) lightAccent = accent.trim();
                    }
                }
            } catch (e) {
                // Cross-origin stylesheet, skip
            }
        }
        // Fallback to hardcoded defaults if not found in stylesheet
        if (!lightBg) lightBg = '#ffffff';
        if (!lightAccent) lightAccent = '#15171A';
    }

    captureLightValues();

    // Helper function to calculate if text should be white or black on this background
    function normalizeHex(hex) {
        if (!hex) return null;
        hex = hex.trim();
        if (hex[0] === '#') hex = hex.slice(1);
        if (hex.length === 3) {
            hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
        }
        return hex.length === 6 ? '#' + hex.toUpperCase() : null;
    }

    function updateTextContrast(bgHex) {
        var hex = normalizeHex(bgHex);
        if (!hex) return;

        var rawHex = hex.slice(1);
        var r = parseInt(rawHex.substr(0, 2), 16);
        var g = parseInt(rawHex.substr(2, 2), 16);
        var b = parseInt(rawHex.substr(4, 2), 16);
        var yiq = ((r * 299) + (g * 587) + (b * 114)) / 1000;

        // Apply Ghost's contrast utility classes
        var textColor = (yiq >= 128) ? 'dark' : 'light';
        root.classList.remove('has-dark-text', 'has-light-text');
        root.classList.add('has-' + textColor + '-text');
    }

    var currentMode = 'light';

    function applyMode(mode) {
        currentMode = mode;
        var isNight = mode === 'night';

        // Select the active colors
        var activeBg = isNight ? NIGHT_BG : lightBg;
        var activeAccent = isNight ? NIGHT_ACCENT : lightAccent;

        // Apply CSS custom variables directly to :root
        root.style.setProperty('--background-color', activeBg);
        root.style.setProperty('--ghost-accent-color', activeAccent);

        // Toggle night-mode class on <html> for header/navbar overrides
        root.classList.toggle('night-mode', isNight);

        // Adjust text contrast classes so headings and body copy remain readable
        updateTextContrast(activeBg);

        // Update accessibility attributes
        button.setAttribute('aria-pressed', isNight ? 'true' : 'false');
        button.dataset.themeMode = mode;
    }

    // Load saved preference if it exists
    try {
        var saved = localStorage.getItem(STORAGE_KEY);
        if (saved === 'night' || saved === 'light') {
            currentMode = saved;
        }
    } catch (e) {
        // Fallback gracefully if localStorage is blocked
    }

    applyMode(currentMode);

    button.addEventListener('click', function () {
        var nextMode = (currentMode === 'light') ? 'night' : 'light';
        applyMode(nextMode);
        try {
            localStorage.setItem(STORAGE_KEY, nextMode);
        } catch (e) {}
    });
})();
