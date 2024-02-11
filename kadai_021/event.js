const addBtn = document.getElementById('btn');


addBtn.addEventListener('click', () => {
  setTimeout(() => {
    text.textContent = "ボタンをクリックしました";
  }, 2000);
});