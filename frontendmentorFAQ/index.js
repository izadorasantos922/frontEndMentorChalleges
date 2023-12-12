const faqs = document.querySelectorAll('.faq');
const answer = document.querySelectorAll('.answer')

faqs.forEach((faq) => {
    faq.addEventListener("click", ()=> {
        faqs.forEach((faqItem) =>{
            if(faqItem !== faq){
                faqItem.classList.remove("active")
            }
        })
        faq.classList.toggle("active");
    })
})


