let string = "";
let button = document.querySelectorAll('.button');
Array.from(button).forEach((button)=>{
  button.addEventListener('click', (e)=>{
    if(e.target.innerHTML ==  '='){
      string = eval(string);
      document.querySelector('input').value = string;
    }
    else if(e.target.innerHTML ==  '%'){
      // Split the expression to isolate the number before "%"
      const number = parseFloat(string.split('%')[0]);
      // Calculate the percentage
      const percentage = number / 100;
      // Update the display with the calculated percentage
      document.querySelector('input').value = percentage;
    }
    else if(e.target.innerHTML ==  'C'){
        string = "";
        document.querySelector('input').value = string;
      }
    else{
      console.log(e.target)
      string = string + e.target.innerHTML;
      document.querySelector('input').value = string;
    }
  })
})