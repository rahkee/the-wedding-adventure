document.onreadystatechange = () => {

    if (document.readyState === 'complete') {

        // If the user wants to decline
        const radioElementNo = document.querySelector('#wedding-attendance-no');
        const formDecline = document.querySelector('.form-decline');
        const formDeclineElements = formDecline.querySelectorAll('.reveal');

        radioElementNo.addEventListener('click', () => {

            // Hide the RSVP fields
            formAcceptElements.forEach((e) => {
                
                setTimeout(() => {
                    e.classList.add('hide');
                }, 250);

            });

            // Show the decline fields
            formDeclineElements.forEach((e) => {

                setTimeout(() => {
                    e.classList.remove('hide');
                }, 500);

            });
        });


        // If the user wants to RSVP
        const radioElementYes = document.querySelector('#wedding-attendance-yes');
        const formAccept = document.querySelector('.form-rsvp');        
        const formAcceptElements = formAccept.querySelectorAll('.reveal');

        radioElementYes.addEventListener('click', () => {

            // Hide the decline fields
            formDeclineElements.forEach((e) => {

                setTimeout(() => {
                    e.classList.add('hide');
                }, 500);

            });

            // Show the RSVP fields
            formAcceptElements.forEach((e) => {
                
                setTimeout(() => {
                    e.classList.remove('hide');
                }, 250);

            });
        });
    }
};