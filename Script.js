document.querySelector('.theme input').addEventListener('change', function() {
    document.body.classList.toggle('light-theme', this.checked);

    // Эффект затемнения при смене темы
    document.body.classList.add('theme-fade');
    setTimeout(() => document.body.classList.remove('theme-fade'), 400);
});
const log = document.getElementById('log')

log.addEventListener("click", function(){
    window.location.assign('registration.html')
})