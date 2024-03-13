const  {response} =require('express');

exportaciones = require('../models/exportacion')

const getExportacion = async(req, res) =>{


    const exportacion = await exportaciones.find();//obteniendo los datos de la coleccion
     res.json({
        msg: exportacion
      
     })

}
const postExportacion = async(req, res) => {
    const datos= req.query //capturar datos de la url de postman//se cambio de query a body
    let mensaje='Insercion exitosa'
    console.log(datos)
    try{
        const exportacion = new exportaciones(datos)//instaciar el objeto
        await exportacion.save()//guardar la base de datos
        console.log(datos)

    }catch(error){

        mensaje=error
        console.log(error)

    }
  
    res.json({
        msg: mensaje
    })
}


const putExportacion = async(req, res) =>{
    const {producto,kilos,precioKilo,precioDolar}=req.query //desestructurar

try{
        const exportacion = await exportaciones.findOneAndUpdate({producto:producto},{kilos:kilos,precioKilo:precioKilo,precioDolar:precioDolar})//las primeras llaves son el valor por el cual voy a hacer la modificacion el segundo hace referencia a lo que el usuario envio
       
        mensaje = 'actualizacion exitosa'
        
    }catch(error){
        mensaje=error
     }
     res.json({
        msg: mensaje
     })
     
}
   const deleteExportacion = async(req, res) =>{

    const { producto}=req.query //desestructurar

    try{
            const exportacion = await exportaciones.findOneAndDelete({producto:producto})//las primeras llaves son el valor por el cual voy a hacer la modificacion el segundo hace referencia a lo que el usuario envio
            mensaje = 'Eliminacion Exitosa'
            
        }catch(error){
            mensaje=error
         }
         res.json({
            msg: mensaje
         })
         
    }
module.exports={
    getExportacion,
    postExportacion,
    putExportacion,
    deleteExportacion

}