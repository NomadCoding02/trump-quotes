const bodyElement = document.querySelector('body');
let isDayMode = true;

export function switchToDayMode() {
    if (!isDayMode) {
        bodyElement.classList = 'day-mode';
        isDayMode = !isDayMode;
    }
}

export function switchToNightMode() {
    if (isDayMode) {
        bodyElement.classList = 'night-mode';
        isDayMode = !isDayMode;
    }
}