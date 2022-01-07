
console.log("test1");
const openBtn = document.getElementById('showForm');
const closeBtn = document.getElementById('closeForm');

openBtn.addEventListener("click", showForm);
closeBtn.addEventListener("click", closeForm);

function showForm() {
    document.getElementById('popup').classList.remove('hidden');
    console.log("test");
}

function closeForm() {
    document.getElementById('popup').classList.add('hidden');
}