const scrollDown = (currentScrollHeight) => {window.scrollTo({
          top: currentScrollHeight - (40 + 40),
          behavior: 'smooth',
});
}
        
export default scrollDown;