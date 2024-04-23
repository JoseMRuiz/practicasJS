class Producto {
    static contadorProductos = 0;
    constructor (nombre,precio){
        this._idProducto = ++Producto.contadorProductos;
        this._nombre = nombre;
        this._precio = precio;
    }
    get idProducto(){
        return this._idProducto;
    }

    get nombre(){
        return this._nombre;
    }

    set nombre(nombre){
        this._nombre = nombre;
    }
    get precio(){
        return this._precio
    }
    set precio(precio){
        return this._precio = precio;
    }
    toString(){
        return `idProducto ${this._idProducto}, nombre: ${this._nombre}, precio: ${this._precio} `;
    }
}

class Orden{
    static contadorOrdenes=0;
    static get MAX_productos(){
        return 5;
    }
    constructor(){
        this._idOrden = ++Orden.contadorOrdenes;
        this._productos = [];
        // this._contadorProductosAgregados=0;
    }
    get idOrden(){
        return this._idOrden;
    }

    agregarProducto(Producto){
        if( this._productos.length < Orden.MAX_productos){
            this._productos.push(Producto);
            //this._productos[this._contadorProductosAgregados++]=producto;
        }
        else{
            console.log('no se puede agregar mas productos')
        }
    }
    calcularTotal(){
        let totalVenta = 0;
        for(let producto of this._productos){
            totalVenta += producto.precio;
        }
        return totalVenta;
    }
    mostrarOrden(){
        let productosOrden= '';
        for( let producto of this._productos){
            productosOrden += '\n{' + producto.toString() + ' } ';
        }
        console.log( `Orden= ${this._idOrden} total: ${this.calcularTotal()}, productos: ${productosOrden}; `)
    }
    

}

let producto1 =new Producto('pantalon',200);
let producto2 =new Producto('camisa',150);
let producto3 =new Producto('camisa',350);

let orden1= new Orden();
orden1.agregarProducto(producto1);
orden1.agregarProducto(producto2);
orden1.agregarProducto(producto3);
orden1.mostrarOrden();

