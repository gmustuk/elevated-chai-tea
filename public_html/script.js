//* Function to expand all the ingredient items *//
const accordionExpandCollapse = () => {
    const accordionHeader = this.closest('.accordion-header');
    const accordionCollapse = accordionHeader.querySelector('.accordion-collapse');

    if (accordionCollapse.classList.contains('show')) {
        accordionCollapse.classList.remove('show');
    } else {
        accordionCollapse.classList.add('show');
    }
};

document.querySelectorAll('.accordion-expand-collapse').forEach(button => {
    button.addEventListener('click', accordionExpandCollapse);
});