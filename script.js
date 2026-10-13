document.addEventListener('DOMContentLoaded', () => {
  const tabs = document.querySelectorAll('.tab-btn');
  const tabContents = document.querySelectorAll('.tab-content');
  const btnGoToPunto2 = document.getElementById('go-to-punto2');
  const btnGoToPunto1 = document.getElementById('go-to-punto1');

  function switchTab(targetId) {
    tabs.forEach(t => t.classList.remove('active'));
    tabContents.forEach(c => c.classList.remove('active'));

    const activeBtn = document.querySelector(`[data-tab="${targetId}"]`);
    const activeContent = document.getElementById(targetId);

    if (activeBtn && activeContent) {
      activeBtn.classList.add('active');
      activeContent.classList.add('active');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const targetId = tab.getAttribute('data-tab');
      switchTab(targetId);
    });
  });

  if (btnGoToPunto2) {
    btnGoToPunto2.addEventListener('click', () => {
      switchTab('punto2');
    });
  }

  if (btnGoToPunto1) {
    btnGoToPunto1.addEventListener('click', () => {
      switchTab('punto1');
    });
  }
});