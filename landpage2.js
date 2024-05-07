function addBackgroundImage() {
  setTimeout(function() {
      document.body.classList.add('bg-loaded');
  }, 3000);
}
window.addEventListener('load', addBackgroundImage);

document.addEventListener("DOMContentLoaded", function() {
    const ica = document.getElementById("ic1");
    const vida = document.getElementById("vid1");
  
    ica.addEventListener("mouseover", function() {
      vida.style.display = "block";
      vida.play(); 
    });
  
    ica.addEventListener("mouseout", function() {
      vida.style.display = "none";
      vida.pause(); 
    });
  });


document.addEventListener("DOMContentLoaded", function() {
    const bic = document.getElementById("ic2");
    const vib = document.getElementById("vid2");
  
    bic.addEventListener("mouseover", function() {
      vib.style.display = "block";
      vib.play(); 
    });
  
    bic.addEventListener("mouseout", function() {
      vib.style.display = "none";
      vib.pause(); 
    });
  });

document.addEventListener("DOMContentLoaded", function() {
    const cic = document.getElementById("ic3");
    const vci = document.getElementById("vid3");
  
    cic.addEventListener("mouseover", function() {
      vci.style.display = "block";
      vci.play(); 
    });
  
    cic.addEventListener("mouseout", function() {
      vci.style.display = "none";
      vci.pause(); 
    });
  });


document.addEventListener("DOMContentLoaded", function() {
    const dic = document.getElementById("ic4");
    const david = document.getElementById("vid4");
  
    dic.addEventListener("mouseover", function() {
      david.style.display = "block";
      david.play(); 
    });
  
    dic.addEventListener("mouseout", function() {
      david.style.display = "none";
      david.pause(); 
    });
  });


  document.addEventListener("DOMContentLoaded", function() {
    const bgDefault = document.getElementById("defaultBg");
  
    setTimeout(function() {
      bgDefault.parentNode.removeChild(bgDefault);
    }, 7000);
  });



  document.addEventListener("DOMContentLoaded", function() {
    const icons = document.getElementsByClassName("fa-circle");
    const map = document.getElementById("map");
  
    Array.from(icons).forEach(function(icons) {
      icons.addEventListener("mouseover", function() {
        map.style.opacity = "0.5";
        });
    
        icons.addEventListener("mouseout", function() {
          map.style.opacity = "1";
        });
    });
});

document.addEventListener("DOMContentLoaded", function() {
  const aic = document.getElementById("ic1");
  const before = document.getElementById("bf1");

  aic.addEventListener("mouseover", function() {
    before.style.display = "none"; 
  });

  aic.addEventListener("mouseout", function() {
    before.style.display = "block";
  });
});

document.addEventListener("DOMContentLoaded", function() {
  const bic = document.getElementById("ic2");
  const beforeS = document.getElementById("bf2");

  bic.addEventListener("mouseover", function() {
    beforeS.style.display = "none"; 
  });

  bic.addEventListener("mouseout", function() {
    beforeS.style.display = "block";
  });
});

document.addEventListener("DOMContentLoaded", function() {
  const acic = document.getElementById("ic3");
  const beforeD = document.getElementById("bf3");

  acic.addEventListener("mouseover", function() {
    beforeD.style.display = "none"; 
  });

  acic.addEventListener("mouseout", function() {
    beforeD.style.display = "block";
  });
});

document.addEventListener("DOMContentLoaded", function() {
  const acid = document.getElementById("ic4");
  const acidBF = document.getElementById("bf4");

  acid.addEventListener("mouseover", function() {
    acidBF.style.display = "none"; 
  });

  acid.addEventListener("mouseout", function() {
    acidBF.style.display = "block";
  });
});


    var buttonA = document.getElementById('ic1');
    var secA = document.getElementById('secA');
    var secB = document.getElementById('secBB');

    buttonA.addEventListener('mouseenter', function() {
        secA.style.display = 'none';
        secB.style.display = 'block';
    });

    buttonA.addEventListener('mouseleave', function() {
        secA.style.display = 'block';
        secB.style.display = 'none';
    });

    var buttonB = document.getElementById('ic2');
    var secAb = document.getElementById('secA');
    var secBa = document.getElementById('secCC');

    buttonB.addEventListener('mouseenter', function() {
        secAb.style.display = 'none';
        secBa.style.display = 'block';
    });

    buttonB.addEventListener('mouseleave', function() {
        secAb.style.display = 'block';
        secBa.style.display = 'none';
    });

    var buttonD = document.getElementById('ic3');
    var secAbd = document.getElementById('secA');
    var secBad = document.getElementById('secD');

    buttonD.addEventListener('mouseenter', function() {
        secAbd.style.display = 'none';
        secBad.style.display = 'block';
    });

    buttonD.addEventListener('mouseleave', function() {
        secAbd.style.display = 'block';
        secBad.style.display = 'none';
    });

    var buttonE = document.getElementById('ic4');
    var secAbe = document.getElementById('secA');
    var secBae = document.getElementById('secE');

    buttonE.addEventListener('mouseenter', function() {
        secAbe.style.display = 'none';
        secBae.style.display = 'block';
    });

    buttonE.addEventListener('mouseleave', function() {
        secAbe.style.display = 'block';
        secBae.style.display = 'none';
    });