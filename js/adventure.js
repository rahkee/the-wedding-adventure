document.onreadystatechange = () => {

    if (document.readyState === 'complete') {

        // Get all buttons
        const navButtons = document.querySelectorAll('button');

        // Add a listener to all buttons
        navButtons.forEach(button => {
            button.addEventListener('click', showPage);
        });

        // Get all main elements
        const mainElements = document.querySelectorAll('main');

        // Hide all main elements
        mainElements.forEach(mainElement => {
            mainElement.classList.remove('show');
            mainElement.classList.add('delete');
        })

        // Show the home page
        const homePage = document.querySelector('.home');
        homePage.classList.remove('delete');
        homePage.classList.add('show');
    }

};

function showPage (e) {
    // Get the button attribute name and convert it to string (".class")
    const elementClass = '.' + e.target.dataset.attributeName;

    // Find the main element to show using the (".class")
    const visibleMainElement = document.querySelector(elementClass);

    // Get all main elements
    const mainElements = document.querySelectorAll('main');

    TODO

    // Hide all main elements
    mainElements.forEach(mainElement => {
        setTimeout(() => {
            mainElement.classList.add('delete');
        }, 100);

        mainElement.classList.remove('show');
    })

    setTimeout(() => {
        visibleMainElement.classList.add('show');
    }, 100);

    visibleMainElement.classList.remove('delete');
}