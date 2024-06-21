document.addEventListener('DOMContentLoaded', function () {
    const sections = document.querySelectorAll('section');
    let isScrolling = false;

    window.addEventListener('scroll', function () {
        if (isScrolling) return;

        const scrollPosition = window.pageYOffset;
        const windowHeight = window.innerHeight;

        sections.forEach((section, index) => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;

            if (scrollPosition >= sectionTop - windowHeight/2 && scrollPosition < sectionTop + sectionHeight - windowHeight/2) {
                isScrolling = true;
                window.scrollTo({
                    top: sectionTop,
                    behavior: 'smooth'
                });
                setTimeout(() => {
                    isScrolling = false;
                }, 6000); // Adjust timeout as needed
            }
        });
    });
});