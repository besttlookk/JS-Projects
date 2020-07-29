const inputElement = document.getElementById('input')
const selectElement = document.getElementById('select')
const kgElement = document.getElementById('kg')
const gmElement = document.getElementById('gm')
const pdElement = document.getElementById('pd')
const onceElement = document.getElementById('once')
const resultElement = document.getElementById('result')

class Converter {

    static kgTogm(kg){
        return kg * 1000;
    }

    static kgToonce(kg){
       
        return kg * 35.274;
    }

    static kgTopd(kg){
        return kg * 2.2046;
    }

    static gmTokg(gm){
        return gm / 1000;
    }

    static gmToonce(gm){
        return gm * 0.035274;
    }

    static gmTopd(gm){
        return gm * 0.00220462;
    }
 

    static pdTokg(pd){
        return pd / 2.2046;
    }

    static pdTogm(pd){
        return pd * 453.592;
    }

    static pdToonce(pd){
        return pd * 16;
    }

  
    static onceTogm(once){
        return once / 0.035274;
    }

    static onceTokg(once){
        return once * 0.0283495;

    }

    static onceTopd(once){
       return once * 0.0625;
    }

    
}


inputElement.addEventListener('input',(e)=>{
    const inputValue = e.target.value;
    const unit = selectElement.value;
    console.log(unit)
    console.log(inputValue)
    if(inputValue){
      resultElement.style.display = 'block';
      kgElement.style.display = 'block'
      gmElement.style.display = 'block'
      pdElement.style.display = 'block'
      onceElement.style.display = 'block'

      switch(unit){
          case 'kg':
              kgElement.style.display = 'none';
              document.getElementById('gramResult').innerText = Converter.kgTogm(inputValue);
              document.getElementById('poundResult').innerText = Converter.kgTopd(inputValue);
              document.getElementById('ounceResult').innerText = Converter.kgToonce(inputValue);
              break;

        case 'gm':
              gmElement.style.display = 'none';
              document.getElementById('kgResult').innerText = Converter.gmTokg(inputValue);
              document.getElementById('poundResult').innerText = Converter.gmTopd(inputValue);
              document.getElementById('ounceResult').innerText = Converter.gmToonce(inputValue);

              break;

        case 'pd':

              pdElement.style.display = 'none';
              document.getElementById('gramResult').innerText = Converter.pdTogm(inputValue);
              document.getElementById('kgResult').innerText = Converter.pdTokg(inputValue);
              document.getElementById('ounceResult').innerText = Converter.pdToonce(inputValue);
              break;

        case 'once':

            onceElement.style.display= 'none';
            document.getElementById('gramResult').innerText = Converter.onceTogm(inputValue);
            document.getElementById('kgResult').innerText = Converter.onceTokg(inputValue);
            document.getElementById('poundResult').innerText = Converter.onceTopd(inputValue);
            break;
    }
     
}
else{
      resultElement.style.display = 'none'

    }

})


