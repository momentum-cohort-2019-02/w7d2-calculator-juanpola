(function() {
    window.onload = function() {
      var total;
      var buttons = Array.prototype.slice.call(document.querySelectorAll('button'));
  
      var Calculate = function(event){
        var value = event.currentTarget.textContent;
        var output = document.querySelector('.output')
        if(value === '='){
          total = eval(total);
          output.innerHTML = total;
          return;
        }
        else if(value === 'clear'){
          total = null;
          output.innerHTML = 'Clearing';
          setTimeout(function() {
            output.innerHTML = '';
          }, 1000);
          return;
        }
        else if(value === '+' || value === '/' || value === '*' || value === '-'){
          total += value;
          output.innerHTML = total;
          return
        }
        else {
          total = output.innerHTML + value;
          output.innerHTML += value;
          return;
        }
      };
  
      buttons.forEach(function(button) {
        button.addEventListener('click', Calculate, false);
      });
    }
  }());
  