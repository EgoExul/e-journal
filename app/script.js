
/* Когда пользователь нажимает на кнопку,
переключение между скрытием и отображением раскрывающегося содержимого */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Закройте выпадающее меню, если пользователь щелкает за его пределами
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
        for (i = 0; i < dropdowns.length; i++) {
    var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
};


  
function disable() {
            document.getElementById("score").disabled = true; document.getElementById("score-0").disabled = true;
            document.getElementById("score1").disabled = true; document.getElementById("score-1").disabled = true;
            document.getElementById("score2").disabled = true; document.getElementById("score-2").disabled = true;
            document.getElementById("score3").disabled = true; document.getElementById("score-3").disabled = true;
            document.getElementById("score4").disabled = true; document.getElementById("score-4").disabled = true;
            document.getElementById("score5").disabled = true; document.getElementById("score-5").disabled = true;
            document.getElementById("score6").disabled = true; document.getElementById("score-6").disabled = true;
            document.getElementById("score7").disabled = true; document.getElementById("score-7").disabled = true;
            document.getElementById("score8").disabled = true; document.getElementById("score-8").disabled = true;
            document.getElementById("score9").disabled = true; document.getElementById("score-9").disabled = true;
            document.getElementById("score10").disabled = true; document.getElementById("score-10").disabled = true;
            document.getElementById("score11").disabled = true; document.getElementById("score-11").disabled = true;

        }
function enable() {
            document.getElementById("score").disabled = false; document.getElementById("score-0").disabled = false;
            document.getElementById("score1").disabled = false; document.getElementById("score-1").disabled = false;
            document.getElementById("score2").disabled = false; document.getElementById("score-2").disabled = false;
            document.getElementById("score3").disabled = false; document.getElementById("score-3").disabled = false;
            document.getElementById("score4").disabled = false; document.getElementById("score-4").disabled = false;
            document.getElementById("score5").disabled = false; document.getElementById("score-5").disabled = false;
            document.getElementById("score6").disabled = false; document.getElementById("score-6").disabled = false;
            document.getElementById("score7").disabled = false; document.getElementById("score-7").disabled = false;
            document.getElementById("score8").disabled = false; document.getElementById("score-8").disabled = false;
            document.getElementById("score9").disabled = false; document.getElementById("score-9").disabled = false;
            document.getElementById("score10").disabled = false; document.getElementById("score-10").disabled = false;
            document.getElementById("score11").disabled = false; document.getElementById("score-11").disabled = false;

        };



/* Когда пользователь нажимает на кнопку,
переключение между скрытием и отображением раскрывающегося содержимого */
function myFunction2() {
  document.getElementById("myDropdown2").classList.toggle("show");
}

// Закройте выпадающее меню, если пользователь щелкает за его пределами
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
        for (i = 0; i < dropdowns.length; i++) {
    var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
};

