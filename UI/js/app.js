const sidebarShrinkBtn = document.querySelector('.sidebar--toggle');
const sidebar = document.querySelector('.sidebar');
const header = document.querySelector('.header');
const timer = document.querySelector('.timer');
const richTextEditor = document.querySelector('.rich-text-editor');
const sidebarList = document.querySelector('.sidebar__list');

sidebarShrinkBtn.addEventListener('click', () => {
  if (sidebarShrinkBtn.classList.contains('shrink')) {
    sidebarShrinkBtn.classList.remove('shrink');
    sidebarShrinkBtn.classList.add('grow');
    sidebarShrinkBtn.style.transform = 'rotate(180deg)';
    sidebar.style.gridColumnEnd = '2';
    header.style.gridColumnStart = '2';
    timer.style.gridColumnStart = '2';
    richTextEditor.style.gridColumnStart = '2';
    sidebarList.style.animation = 'fadeout 300ms ease-in-out forwards ';
  } else if (sidebarShrinkBtn.classList.contains('grow')) {
    sidebarShrinkBtn.classList.add('shrink');
    sidebarShrinkBtn.classList.remove('grow');
    sidebarShrinkBtn.style.transform = 'rotate(0)';
    sidebar.style.gridColumnEnd = '3';
    header.style.gridColumnStart = '3';
    timer.style.gridColumnStart = '3';
    richTextEditor.style.gridColumnStart = '3';
    sidebarList.style.animation = 'fadein 500ms ease-in-out 200ms backwards ';
  }
});

// DROPDOWN MENU
function dropdownToggle() {
  document.getElementById('userDropdown').classList.toggle('show');
}

document
  .querySelector('.dropdown__link')
  .addEventListener('click', dropdownToggle);

// Close the dropdown menu if the user clicks outside of it
window.addEventListener('click', e => {
  if (!e.target.matches('.dropdown__link')) {
    const dropdowns = Array.from(
      document.querySelectorAll('.dropdown__content')
    );
    dropdowns.forEach(dropdown => {
      if (dropdown.classList.contains('show')) {
        dropdown.classList.remove('show');
      }
    });
  }
});
