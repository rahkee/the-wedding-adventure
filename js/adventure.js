window.addEventListener('click', (e) => {

    let dataAttributeName = e.target.dataset.attributeName;

    if (dataAttributeName === 'home') {
        console.log("Load Home!");
    }

    if (dataAttributeName === 'lodging') {
        console.log("Load Lodging!");
    }

    if (dataAttributeName === 'getting-there') {
        console.log("Load Getting There!");
    }

    if (dataAttributeName === 'book-your-adventure') {
        console.log("Load Book!");
    }

    if (dataAttributeName === 'schedule') {
        console.log("Load Schedule!");
    }

    if (dataAttributeName === 'gallery') {
        console.log("Load Gallery!");
    }

    if (dataAttributeName === 'contact-us') {
        console.log("Load Contact Us!");
    }

    if (dataAttributeName === 'faqs') {
        console.log("Load FAQs!");
    }
})