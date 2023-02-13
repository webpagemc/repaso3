const express = require("express");
const router = express.Router();
const {modeloUsuario} = require("../modelos/usuarios")
const {modeloCurso} = require("../modelos/cursos")

router.put("/alumno/:idalumno/curso/:idcurso",async(req,res)=>{

    //tomamos los datos de la url
    const id_alumno = req.params.idalumno;
    const id_curso = req.params.idcurso;
    
    //seleccionamos al alumno
    const alumno = await modeloUsuario.findOne({_id:id_alumno});
    if(!alumno){res.send("El alumno no existe")}

    //seleccionamos el curso
    const curso = await modeloCurso.findOne({_id:id_curso})
    if(!curso){res.send("El curso no existe")}

    //revisamos si el alumno ya tiene el curso
    const cursoExistente = alumno.cursos.find( element => element.curso.toString() === id_curso.toString())

    if(cursoExistente){ res.send("El curso ya existe") } else{

    alumno.cursos.push({curso:id_curso,nombreDelCurso:curso.curso})
    
    await modeloUsuario.updateOne({_id:id_alumno},alumno)

    res.send({mensaje:`Alumno ${id_alumno} Actualizado`,alumno:alumno})

    }

})

router.put("/eliminarCurso/alumno/:idalumno/curso/:idcurso",async(req,res)=>{

    //tomamos los datos de la url
    const id_alumno = req.params.idalumno;
    const id_curso = req.params.idcurso;
    
    //seleccionamos al alumno
    const alumno = await modeloUsuario.findOne({_id:id_alumno});

    const cursosActualizados = alumno.cursos.filter( element => element.curso.toString() !== id_curso.toString() )
    alumno.cursos = cursosActualizados

    await modeloUsuario.updateOne({_id:id_alumno},alumno)

    res.send({mensaje:`Alumno ${id_alumno} Actualizado`,alumno:alumno})

})

module.exports = router