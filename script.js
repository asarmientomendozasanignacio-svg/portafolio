// Script muy sencillo: muestra/oculta el correo y actualiza link de GitHub
document.addEventListener('DOMContentLoaded', function(){
const btn = document.getElementById('showEmail');
const emailBox = document.getElementById('emailBox');
const repoLink = document.getElementById('repoLink');

btn.addEventListener('click', function(){
if(emailBox.classList.contains('hidden')){
emailBox.classList.remove('hidden');
btn.textContent = 'Ocultar correo';
} else {
emailBox.classList.add('hidden');
btn.textContent = 'Mostrar correo';
}
});

// Enlaza el repositorio (ejemplo aleatorio)
repoLink.href = 'https://github.com/alejandro/portfolio';
repoLink.target = '_blank';
});