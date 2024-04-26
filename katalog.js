document.addEventListener('DOMContentLoaded', function() {
    // Проверяваме дали има хаш-фрагмент в URL-а, указващ да скролваме до долу
    if (window.location.hash === "#scrollToBottom") {
        // Скролваме до долу с плавно движение
        window.scrollTo({
            top: document.body.scrollHeight,
            behavior: 'smooth'
        });
    }
});