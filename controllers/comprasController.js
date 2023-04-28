import comprasModel from "../models/comprasModel.js";
import slugify from "slugify";



//create  compra
export const createCompraController = async(req,res)=>{
    try{

        const {name} = req.body
        const {supplier} = req.body
        const {quantity} = req.body
        const {total} = req.body
        const {state} = req.body;


        if(!name){
            return res.status(401).send({message:'name is required'})
        }

        //const existingCategory = await comprasModel.findOne({name})
        //if(existingCategory){
        //    return res.status(200).send({
        //        success:true,
        //        message:'La compra ya existe'

        //    })
        //}


        const compras = await new comprasModel({name, slug:slugify(name),supplier,quantity,total,state,}).save()

        res.status(201).send({
            succes:true,
            message:'La compra fue creada',
            compras
        })
    }catch(error){
        console.log(error)
        res.status(500).send({
            success:false,
            error,
            message:'Error en compras'
        })
    }
}


// get all compras
export const comprasGetControlller = async (req, res) => {
    try {
      const compras = await comprasModel.find({});
      res.status(200).send({
        success: true,
        message: "All compras List",
        compras,
      });
    } catch (error) {
      console.log(error);
      res.status(500).send({
        success: false,
        error,
        message: "Error while getting all categories",
      });
    }
  }



