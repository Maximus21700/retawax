document.addEventListener('DOMContentLoaded', function () {
    changeTab('accueil');
  });
  
  function changeTab(tabName) {
    const tabs = document.querySelectorAll('.content');
    tabs.forEach(tab => {
      tab.style.display = 'none';
    });
  
    const currentTab = document.getElementById(tabName);
    currentTab.style.display = 'block';
  
    document.getElementById(tabName).style.display = 'block';
    if (tabName === 'accueil') {
        const accueilImage = currentTab.querySelector('img');
        accueilImage.classList.add('shake');
      }
    }
  