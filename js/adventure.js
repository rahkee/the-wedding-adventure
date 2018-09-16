document.onreadystatechange = () => {

    if (document.readyState === 'complete') {

        const navButtons = document.querySelectorAll('button');

        navButtons.forEach(button => {
            button.addEventListener('click', showPage);
        });

        hideAllMainElements();

        const homePage = document.querySelector('.home');
        homePage.classList.remove('delete');
        homePage.classList.add('show');
    }
};

function showPage (e) {

    const elementClass = '.' + e.target.dataset.attributeName;
    const visibleMainElement = document.querySelector(elementClass);
    const mainElements = document.querySelectorAll('main');

    mainElements.forEach(mainElement => {

        if (mainElement.classList.contains('show')) {
            mainElement.classList.remove('show');

            setTimeout(() => {
                mainElement.classList.add('delete');
            }, 400);
            // TODO: Convert milliseconds to stylesheet var
        }
    })

    visibleMainElement.classList.remove('delete');
    visibleMainElement.classList.add('show');
}

function hideAllMainElements() {
    const mainElements = document.querySelectorAll('main');

    mainElements.forEach(mainElement => {
        mainElement.classList.remove('show');
        mainElement.classList.add('delete');
    })
}