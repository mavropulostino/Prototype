document.addEventListener('DOMContentLoaded', function() {
  const faqCards = document.querySelectorAll('.FAQ_Card');

  faqCards.forEach(card => {
    const question = card.querySelector('.FAQ_Question');
    const answer = card.querySelector('.FAQ_Answer');
    const arrow = card.querySelector('.FAQ_Arrow_Up');

    arrow.addEventListener('click', () => {
      const openAnswers = document.querySelectorAll('.FAQ_Answer');
      openAnswers.forEach(openAnswer => {
        if (openAnswer !== answer && openAnswer.style.display === 'block') {
          openAnswer.style.display = 'none';
          openAnswer.previousElementSibling.querySelector('.FAQ_Arrow_Up').innerHTML = '<i class="fa-solid fa-chevron-down"></i>';
        }
      });

      if (answer.style.display === 'none' || answer.style.display === '') {
        answer.style.display = 'block';
        arrow.innerHTML = '<i class="fa-solid fa-chevron-up"></i>';
      } else {
        answer.style.display = 'none';
        arrow.innerHTML = '<i class="fa-solid fa-chevron-down"></i>';
      }
    });
  });
});