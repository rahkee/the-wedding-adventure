document.onreadystatechange = () => {

    if (document.readyState === 'complete') {

        const radioElementNo = document.querySelector('#wedding-attendance-no');
        const radioElementYes = document.querySelector('#wedding-attendance-yes');

        radioElementNo.addEventListener('click', () => {

            // Get first divider
            radioElementNo.parentElement.parentElement.nextElementSibling.classList.remove('hide');

            // Get name form
            radioElementNo.parentElement.parentElement.nextElementSibling.nextElementSibling.classList.remove('hide');

            // Get submit button
            radioElementNo.parentElement.parentElement.nextElementSibling.nextElementSibling.nextElementSibling.classList.remove('hide');
        })

        // const revealElements = Array.from(document.querySelectorAll('.divider'));

        // revealElements.forEach(e => {
        //     e.addEventListener('transitionend', (e) => {
        //         // console.log(e + '\'s animation is over!');
        //     })
        // });
    }
};