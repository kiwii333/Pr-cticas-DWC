
class Rectangulo{
    constructor(width, heigth){
        this.width = width;
        this.heigth = heigth;
    }

    cambiarDimensiones(width,heigth){
        this.width = width;
        this.heigth = heigth;
        console.log(width,heigth);

        
        
    }

    calcularArea(){
        let area_rec = (this.width * this.heigth);
        return area_rec;
    }

    copia(){
        const recCopia = new Rectangulo (this.width,this.heigth);
        return recCopia;
    }

    comparar(area_rec){
        const width = (Math.random()*20)+1;
        const heigth = this.heigth = (Math.random()*20)+1;
        const rec2 = new Rectangulo (width,heigth);
        
        let area_rec2 = (rec2.width * rec2.heigth);
        if(area_rec2 > area_rec){
            return 'mayor'
        }if(area_rec2 < area_rec){
            return 'menor'
        }if(area_rec2 == area_rec){
            return 'iguales'
        }
    }
    

    

}

const rec= new Rectangulo(23,23);
console.log(rec.width,rec.heigth);
document.body.innerHTML += `<p>${(rec.cambiarDimensiones(10,20))}</p>`;
document.body.innerHTML += `<p>${(rec.calcularArea())}</p>`;
document.body.innerHTML += `<p>${(rec.copia())}</p>`;
document.body.innerHTML += `<p>${(rec.comparar(200))}</p>`;

