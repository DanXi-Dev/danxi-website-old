const html = document.documentElement

// utils
function getElementLeft(element) {
    var actualLeft = element.offsetLeft;
    var current = element.offsetParent;

    while (current !== null) {
        actualLeft += current.offsetLeft;
        current = current.offsetParent;
    }

    return actualLeft;
}

function getElementTop(element) {
    var actualTop = element.offsetTop;
    var current = element.offsetParent;

    while (current !== null) {
        actualTop += current.offsetTop;
        current = current.offsetParent;
    }

    return actualTop;
}


// PAGE-1
const page1 = document.getElementById('page-1');
document.addEventListener('scroll', (e) => {
    let scrolled = (html.scrollTop - getElementTop(page1)) / (page1.clientHeight)
    let progress = scrolled
    if (progress < 0) progress = 0;
    if (progress > 1) progress = 1;
    console.log(progress)
    page1.style.setProperty('--progress-page-1', progress)
})

// PAGE-2
const page2 = document.getElementById('page-2');
const rows = document.querySelectorAll('#page-2 ul li')

document.addEventListener('scroll', (e) => {
    let scrolled = (html.scrollTop - getElementTop(page2)) / (page2.clientHeight * 0.5)
    total = 1 / rows.length
    for (let [index, row] of rows.entries()) {
        let start = total * index
        let end = total * (index + 1)
        let progress = (scrolled - start) / (end - start)
        if (progress > 1) progress = 1;
        if (progress < 0) progress = 0;
        row.style.setProperty('--progress-page-2', progress)
    }
})
