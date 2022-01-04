
console.log("test1");
const openBtn = document.getElementById('showForm');
const closeBtn = document.getElementById('closeForm');

openBtn.addEventListener("click", showForm);
closeBtn.addEventListener("click", closeForm);

function showForm() {
    document.getElementById('form').classList.remove('hidden');
    console.log("test");
}

function closeForm() {
    document.getElementById('form').classList.add('hidden');
}