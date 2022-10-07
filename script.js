const imgs = document.getElementById("img");
const img = document.querySelectorAll("#img img");

let idx = 0;

function carrossel(){
  idx++;

  if(idx > img.length - 3){
    idx = 0;
  }

  imgs.style.transform = `translateX(${-idx * 500}px)`;

}

setInterval(carrossel, 1800);

function handleReset() {

  const inputFields = document.querySelectorAll('input');

  if (inputFields) {
      inputFields.forEach(field => {
          field.reset();
      });
  }
  
  
}