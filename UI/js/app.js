const sidebarShrinkBtn = document.querySelector('.sidebar-toggle');
const sidebar = document.querySelector('.sidebar');
const header = document.querySelector('.header');
const timer = document.querySelector('.timer');
const richTextEditor = document.querySelector('.rich-text-editor');

sidebarShrinkBtn.addEventListener('click', () => {
  if (sidebarShrinkBtn.classList.contains('shrink')) {
    sidebarShrinkBtn.classList.remove('shrink');
    sidebarShrinkBtn.classList.add('grow');
    sidebar.style.gridColumnEnd = '2';
    header.style.gridColumnStart = '2';
    timer.style.gridColumnStart = '2';
    richTextEditor.style.gridColumnStart = '2';
  } else if (sidebarShrinkBtn.classList.contains('grow')) {
    sidebarShrinkBtn.classList.add('shrink');
    sidebarShrinkBtn.classList.remove('grow');
    sidebar.style.gridColumnEnd = '4';
    header.style.gridColumnStart = '4';
    timer.style.gridColumnStart = '4';
    richTextEditor.style.gridColumnStart = '4';
  }
});
