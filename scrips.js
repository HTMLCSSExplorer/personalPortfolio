const collapsibles = document.querySelectorAll('.collapsible');
collapsibles.forEach((ele) => {
  ele.addEventListener('click', function () {
    this.classList.toggle('collapsible--expanded');
  });
});
