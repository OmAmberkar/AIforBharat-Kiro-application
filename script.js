const widthInput = document.getElementById('width');
const heightInput = document.getElementById('height');
const ratioBtns = document.querySelectorAll('.ratio-btn');
const currentRatioText = document.getElementById('current-ratio');

let currentRatio = 16 / 9;

function calculateHeight() {
    const w = parseFloat(widthInput.value);
    if (!isNaN(w)) {
        heightInput.value = Math.round(w / currentRatio);
    }
}

function calculateWidth() {
    const h = parseFloat(heightInput.value);
    if (!isNaN(h)) {
        widthInput.value = Math.round(h * currentRatio);
    }
}

ratioBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Update active state
        ratioBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        // Parse ratio string "16:9" -> 1.777
        const [w, h] = btn.dataset.ratio.split(':').map(Number);
        currentRatio = w / h;
        currentRatioText.textContent = btn.dataset.ratio;

        // Recalculate based on current width
        calculateHeight();
    });
});

widthInput.addEventListener('input', calculateHeight);
heightInput.addEventListener('input', calculateWidth);