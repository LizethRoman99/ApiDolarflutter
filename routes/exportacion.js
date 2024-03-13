const {router, Router}=require('express')

const route = Router()



const { getExportacion, putExportacion, postExportacion, deleteExportacion } = require('../controllers/exportacion')

   //listar todos los datos
/*    route.get('/',(req, res)=>{
        res.json({
            msg:'GET'
        })
 
    })
    */
 //consultar dato
    route.get('/', getExportacion) 
      

    route.post('/', postExportacion)  

    route.put('/', putExportacion)  

    route.delete('/', deleteExportacion)  






//     route.post('/',(req, res) =>{
//         const {documento,nombre,apellidos}=req.query
//         aprendices.push({
//             "documento":documento,
//             "nombre":nombre,
//             "apellidos":apellidos
//         })
//         res.json({
//             msg:aprendices
//         })

//     })//insertar datos
  
//     route.delete('/',(req, res) =>{
//         //implementa la logica


  
//     res.json({
//         msg:'eliminacion exitosa'
//     })
//    })
   module.exports = route


