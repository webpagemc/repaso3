const mongoose = require("mongoose");

const cursosSchema = new mongoose.Schema(

    {
        curso:{type:String},
        profesor:{type:String}
    },
    {
        versionKey:false
    }

)

const modeloCurso = mongoose.model("cursos",cursosSchema)

module.exports = {modeloCurso}

