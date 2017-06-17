window.addEventListener('load', () => {
	const nav = document.querySelector('nav');
	const offsetTop = nav.offsetTop;

	window.addEventListener('scroll', () => {
		if (window.scrollY >= offsetTop) {
			document.body.style.paddingTop = nav.offsetHeight + 'px';
			document.body.classList.add('fixed-nav');
		} else {
			document.body.style.paddingTop = 0;
			document.body.classList.remove('fixed-nav');
		}
	});
});
