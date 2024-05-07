function toggleSections() {
    var sectionA = document.getElementById('secA');
    var sectionB = document.getElementById('secB');

    if (sectionA.classList.contains('visible')) {
      sectionA.classList.remove('visible');
      sectionA.classList.add('hiddenS');
      sectionB.classList.remove('hiddenS');
      sectionB.classList.add('visible');
    } else {
    
      sectionB.classList.remove('visible');
      sectionB.classList.add('hiddenS');
      sectionA.classList.remove('hiddenS');
      sectionA.classList.add('visible');
    }
  }
