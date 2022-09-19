let section = document.querySelectorAll('.section');
let lists = document.querySelectorAll('.nav-item');
let links = document.querySelectorAll('.nav-link');

function selectedLink(li) {
  lists.forEach((item) => {item.classList.remove('selected')});
  links.forEach((item) => {item.classList.remove('selected')});
  li.classList.add('selected');
  li.querySelector('.nav-link').classList.add('selected');
}

window.onscroll = () => {
  section.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if (top >= offset - 1 && top < offset + height) {
      const target = document.querySelector(`[href='#${id}']`).parentElement;
      selectedLink(target);
    }
  })
};