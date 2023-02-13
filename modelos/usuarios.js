const mongoose = require("mongoose");

const usuariosSchema = new mongoose.Schema(

    {
        nombre:{type:String},
        apellido:{type:String},
        edad:{type:String},
        cursos:{
            type:[
                {
                    curso:{
                        type:mongoose.Schema.Types.ObjectId,
                        ref:"cursos"
                    },
                    nombreDelCurso:{type:String ,ref:"cursos"},
                    _id:false
                }
            ],
            default:[]
        }
    },
    {
        versionKey:false
    }

)

const modeloUsuario = mongoose.model("usuarios",usuariosSchema)

module.exports = {modeloUsuario}

