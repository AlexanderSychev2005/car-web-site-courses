// Added --scrollTop valuable to body element with our scrolling
window.addEventListener('scroll', e => {
    document.body.style.cssText = `--scrollTop: ${this.scrollY}px`
})