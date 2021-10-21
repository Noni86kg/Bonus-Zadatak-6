const slider = document.getElementById("slider");
const pageviews = document.querySelector(".pageviews h3");
const toggle = document.querySelector(".toggle");
const dollars = document.querySelector(".dollars h2");
let multiplier;
let bill;


toggle.addEventListener('click', () => {
    toggle.classList.toggle('active')
    handleUpdate();
})

slider.addEventListener('change', handleUpdate);
slider.addEventListener('mousemove', handleUpdate);

function handleUpdate() {
    toggle.classList.contains('active') ?  multiplier = 0.75 :  multiplier = 1 ;

    switch(slider.value) {
        case '1':
            pageviews.textContent = "10K PAGEVIEWS";
             bill = 8 * multiplier;
            dollars.textContent = `$${bill.toFixed(2)}`
            break;
        case '2':
            pageviews.textContent = "50K PAGEVIEWS";
             bill = 12 * multiplier;
            dollars.textContent = `$${bill.toFixed(2)}`
            break;
        case '3':
            pageviews.textContent = "100K PAGEVIEWS";
             bill = 16 * multiplier;
            dollars.textContent = `$${bill.toFixed(2)}`
            break;
        case '4':
            pageviews.textContent = "500K PAGEVIEWS";
             bill = 24 * multiplier;
            dollars.textContent = `$${bill.toFixed(2)}`
            break;
        case '5':
            pageviews.textContent = "1M PAGEVIEWS";
             bill = 36 * multiplier;
            dollars.textContent = `$${bill.toFixed(2)}`
    }

    let sliderValue = parseInt(slider.value);
    sliderValue = (sliderValue - 1) * 25;
    document.documentElement.style.setProperty('--sliderBG', `linear-gradient(to right, var(--softCyanFullSliderBar) ${sliderValue}%, var(--lightGrayishBlueEmptySliderBar) 0%)`);
}