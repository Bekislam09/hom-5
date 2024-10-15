let a = document.getElementById('input1');
let x = document.getElementById('input2');
let z = document.getElementById('ks');
let h = document.getElementById('h');



let btn = document.getElementById('btn').onclick = ()=>{
    if (z.value == '*'){
        h.textContent = a.value * x.value;  
    }
    else if (z.value == '+') {
      h.textContent = +a.value + +x.value; 
    }
    else if (z.value == '-') {
        h.textContent = a.value - x.value;        
    }
    else  if(z.value == '/') {
        h.textContent = a.value / x.value;
    }
    else  if(z.value == '**') {
        h.textContent = a.value * a.value ;
    }
    else  if(z.value == '***') {
        h.textContent = a.value * a.value *  a.value ;
    }
    else  if(z.value == '√') {
        h.textContent = (Math.pow(a.value , 1/x.value)).toFixed(3) ;
    }
    
};