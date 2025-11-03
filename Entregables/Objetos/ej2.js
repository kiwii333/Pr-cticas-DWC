class Ordenador{
    constructor(marca,modelo,memoria,capacidad,pulgadas){
        this.marca = marca;
        this.modelo = modelo;
        this.memoria = memoria;
        this.capacidad = capacidad;
        this.pulgadas = pulgadas
    }

    toStringOrd(){
        return `Ordenador con la marca ${this.marca}, modelo ${this.modelo}, ${this.memoria} GB de memoria , capacidad de ${this.capacidad} GB y ${this.pulgadas}`;
    }


}

class Portatil extends Ordenador{
    constructor(marca, modelo, memoria = 4, capacidad = 256, pulgadas = 12, autonomia= 4){
        super(marca,modelo,memoria,capacidad,pulgadas);
        this.autonomia = autonomia;
    }

    toStringPort() {
        return `${super.toStringOrd()} + autonomía de ${this.autonomia} horas`;
    }
    
}

var port = new Portatil ('HP','15-fd0283ns');
console.log(port.marca,port.modelo,port.memoria,port.capacidad,port.pulgadas,port.autonomia);
document.body.innerHTML += `<p>${(port.toStringPort())}</p>`;

var ord = new Ordenador('Asus','2025','4','512','17');
console.log(ord.marca,ord.modelo,ord.memoria,ord.capacidad,ord.pulgadas);
document.body.innerHTML += `<p>${(ord.toStringOrd())}</p>`;