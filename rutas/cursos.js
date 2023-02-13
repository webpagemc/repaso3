const express = require("express");
const router = express.Router();
const {modeloCurso} = require("../modelos/cursos")

router.get("/",async(req,res)=>{

    const datos = await modeloCurso.find();
    res.send(datos);

})

router.post("/",async(req,res)=>{

    const body = req.body;
    await modeloCurso.create(body);
    res.send("Nuevo curso fue creado");

})

router.delete("/:id",async(req,res)=>{

    const id = req.params.id;
    await modeloCurso.deleteOne({ _id:id });
    res.send(`El curso ${id} fue eliminado`);

})

module.exports = router