
function clicked(){
  const img = document.getElementById('progressive-image');
  img.src="https://api.qrserver.com/v1/create-qr-code/?data=hemlo&amp;&size=0x0";
  const input=document.querySelector('.input');
  const ink=input.value;
  input.select();

    console.log(input);
    if(ink.length<=0){
        alert("please enter url or text")
    }

    else{
         
    const intervalId = setInterval(myFunction, 200);

    let callCount = 0;
    const maxCalls = 4;
    let s=0;

    function myFunction() { 
      loadProgressiveImage(s); 
     
      callCount++;
      s+=50;
      if (callCount === maxCalls) {
        clearInterval(intervalId); 
      }
    }
    //   loadProgressiveImage();
    //   setTimeout(, 1000); 
}

    }
   
    function loadProgressiveImage(s) {
        const input=document.querySelector('input').value;

        const img = document.getElementById('progressive-image');
        const highQualitySrc = `https://api.qrserver.com/v1/create-qr-code/?data=${input}&size=${s}x${s}`;
     
        console.log(highQualitySrc);
        img.src = highQualitySrc;
        
    }
    
   
// Define the function you want to call

  

  