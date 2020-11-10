class Producto {
    constructor(codigo, producto, descripcion, cantidad, costo){
        this.codigo = codigo
        this.producto = producto
        this.descripcion = descripcion
        this.cantidad = cantidad
        this.costo = costo
        this.siguiente = null
    }

    calcularPrecio(){
        let producto = this.cantidad
        let costoProducto = this.costo
        let costoTotal = producto * costoProducto
        return costoTotal
    }
}

class Almacen {
    constructor(){
        this.capacidad = []
        this.capacidadMaxima = 30
        this.size = 0
        this.start = null
    }

    agregarProducto(producto){
        if(this.start == null){
            this.start = producto 
        } else {
            let pod = this.start
            while(pod.siguiente !== null) {
                pod = pod.siguiente 
            }
                pod.siguiente = producto
            }
            this.size++
            return Producto.producto
            
    }
    
    insertarProducto(producto, place){
        if(place<0 || this.capacidad.length >= this.size){
            return false
        }else{
            let pod = this.start
            let anterior 

            if(place==0){
                producto.siguiente = pod
                this.start = producto
            }else{
                for(let i=0; i<place; i++){
                    anterior = pod
                    pod = pod.siguiente
                }
                producto.siguiente = pod
                anterior.siguiente = producto
            }
            this.size++
        } return producto.producto
    }
    borrarProducto(idProducto){
        if(idProducto<0 || idProducto>this.size){
            return false
        }
        let pod = this.start
        let anterior = null 

        if(idProducto == 0){
            this.head = pod.siguiente
        }else{
            for(let i=0; i<idProducto; i++){
                anterior = pod
                pod = pod.siguiente
            }
            anterior.siguiente = pod.siguiente
        }
        this.size--
        return pod.producto
    }

    buscarProductoID(codPrducto){
        if(codPrducto<0 || codPrducto>=this.size){
            return false
        }
        let pod = this.start
        let anterior = null 
            if(codPrducto == 0){
                return pod.producto
            } else{
                for(let i=0; i<codPrducto; i++){
                    anterior = pod
                    pod = pod.siguiente
                }
                return pod.producto
            }
        }   

    listarProductos(){
        let pod = this.start
        let list = " "
        while(pod){
            list += pod.producto += ","
            pod = pod.siguiente
        }
        list += " Fin de lista"
        return list
        }
} // final

let pruebaAlmacen = new Almacen()
let a1 = new Producto(556,"agua","agua ciel", 8, 20)
let a2 = new Producto(557,"coca","coca-cola ", 2, 20)
let a3 = new Producto(558,"papas","sabritas", 2, 20)
let a4 = new Producto(559,"fruta","manzana", 1, 20)
pruebaAlmacen.agregarProducto(a1)
pruebaAlmacen.agregarProducto(a2)
pruebaAlmacen.agregarProducto(a3)
pruebaAlmacen.insertarProducto(a4,1)
console.log(pruebaAlmacen.agregarProducto())
console.log(pruebaAlmacen.buscarProductoID(3))
console.log(pruebaAlmacen.listarProductos())

///

var codigo = document.querySelector("#codigo").value
var nombreProducto = document.querySelector("#producto").value
var descripcion = document.querySelector("#descripcion").value
var cantidad = Number(document.querySelector("#cantidad")).value
var precio = Number(document.querySelector("#costo")).value
var producto = new Producto(codigo, nombreProducto, descripcion, cantidad, precio)

var almacen = new Almacen()
var btnAgregar = document.querySelector("#btnAgregar")
var btnCalcular = document.querySelector("#btnCalcular")
var btnInsertar = document.querySelector("#btnInsertar")
var btnBorrar = document.querySelector("#btnBorrar")
var btnBuscar = document.querySelector("#btnBuscar")
var btnListar= document.querySelector("#btnListar")

btnAgregar.addEventListener("click", () => {
    alert(almacen.agregarProducto(producto) + "se ha añadido al almacen.")
})
