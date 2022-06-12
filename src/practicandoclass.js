class Phone {
    constructor (marca,modelo,tamañopantalla,resolucioncamara,sistemaoperativo){
        this.marca = marca;
        this.modelo = modelo;
        this.tamañopantalla = tamañopantalla;
        this.resolucioncamara = resolucioncamara;
        this.sistemaoperativo = sistemaoperativo;
    }
    descripcion(){
        return "Movil marca "+ this.marca+ " ,modelo "+ this.modelo; 
    }
}

class Precios extends Phone {
    constructor(marca,modelo,precio){
        super(marca,modelo);
        this.precio = precio;
    }
    costo(){
        return this.descripcion() +" y su precio es de "+"<b>"+this.precio+"</b>";
    }
}

const phone1 = new Phone ("Samsung","S10","5'","10Mg Pixeles","Android");
const phone2 = new Phone ("Xiaomi","Note9","5.5'","8Mg Pixeles","Android");
const phone3 = new Phone ("Apple","Iphone9","6'","15Mg Pixeles","IOS");
const phonep1 = new Precios ("Samsung","S10","500$");
const phonep2 = new Precios ("Xiaomi","Note9","450$");
const phonep3 = new Precios ("Apple","Iphone9","900$");

document.write( `<h1>Movil list</h1><br><br>
<h3>Movil 1</h3><br>Marca: <b>${phone1.marca}</b><br>Modelo: <b>${phone1.modelo}</b><br>Tamaño de Pantalla: <b>${phone1.tamañopantalla}</b><br>Resolucion de Camara: <b>${phone1.resolucioncamara}</b><br>Sistema Operativo: <b>${phone1.sistemaoperativo}</b><br>Descripcion: ${phonep1.costo()}`)
