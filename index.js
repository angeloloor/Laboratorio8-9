const express = require("express");
const app = express();
const PORT = process.env.PORT || 4000;

const productos = [
    {
        id: 1,
        nombre: "Laptop Dell XPS 13",
        categoria: "Computadoras",
        precio: 1200,
        descripcion: "Laptop ultraligera con pantalla InfinityEdge y procesador Intel i7.",
    },
    {
        id: 2,
        nombre: "Smartphone iPhone 13",
        categoria: "Celulares",
        precio: 999,
        descripcion: "Smartphone de Apple con pantalla Super Retina XDR y chip A15 Bionic.",
    },
    {
        id: 3,
        nombre: "Tablet Samsung Galaxy Tab S7",
        categoria: "Tabletas",
        precio: 650,
        descripcion: "Tablet con pantalla de 11 pulgadas y soporte para S Pen.",
    },
    {
        id: 4,
        nombre: "Smartwatch Apple Watch Series 7",
        categoria: "Relojes Inteligentes",
        precio: 399,
        descripcion: "Reloj inteligente con pantalla Always-On Retina y monitoreo de salud.",
    },
    {
        id: 5,
        nombre: "Audífonos Sony WH-1000XM4",
        categoria: "Audio",
        precio: 350,
        descripcion: "Audífonos inalámbricos con cancelación de ruido líder en la industria.",
    }
];

const integrantes =[
    {
        id:1,
        nombre:"Angel",
        apellido:"Villamil",
        edad:21
    },
    {
        id:2,
        nombre:"Richard",
        apellido:"Robalino",
        edad:38
    },
    {
        id:3,
        nombre:"Angelo",
        apellido:"Loor",
        edad:21
    },
    {
        id:4,
        nombre:"Christian",
        apellido:"Marquez",
        edad:21
    }
];

app.get('/',(req,res)=>{
    res.send("Landing page - Grupo 1")
})

app.get('/integrantes',(req,res)=>{
    res.json(integrante)
})

app.get('/integrantes/:id', (req, res) => {
    const id = parseInt(req.params.id); 
    const integrante = integrantes.find(i => i.id === id); 

    if (integrante) {
        res.json(integrante); 
    } else {
        res.status(404).json({ error: "Integrante no encontrado" });
    }
});

app.get('/products',(req,res)=>{
    res.send(productos)
})

app.get('/products/:id', (req, res) => {
    const id = parseInt(req.params.id); 
    const producto = productos.find(i => i.id === id); 

    if (producto) {
        res.json(producto); 
    } else {
        res.status(404).json({ error: "Producto no encontrado" }); 
    }
});


app.listen(PORT, () => {
    console.log(`server started on port ${PORT}`);
});