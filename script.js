const faqs = document.querySelectorAll('.faq')

faqs.forEach(faq => {
    faq.addEventListener("click", () =>{
        faqs.forEach(item =>{
            //removendo a classe "open" de todos os elementos
            if (item !== faq && item.classList.contains("open")) {
                item.classList.remove("open");
            }
        });
        //adicionando ou removendo a classe "open" se for clicado
        faq.classList.toggle("open");

    })
})

