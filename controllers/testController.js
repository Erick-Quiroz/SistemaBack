import testModel from "../models/testModel.js";

export const createSupplierController1 = async (req,res) => {
    try{
        const{name,address,phonenumber1, phonenumber2,email, email2} = req.body
        //validations
        if(!name){
            return res.send({error:'name is required'})
        }if(!address){
            return res.send({message:'address is required'})
        }if(!phonenumber1){
            return res.send({error:'phonenumber1 is required'})
        }if(!phonenumber2){
            return res.send({message:'phonenumer2 error is required'})
        }if(!email){
            return res.send({error:'email1 is required'})
        }if(!email2){
            return res.send({message:'email2 is required'})
        } 
        
        
        //check user

        const existingUser = await testModel.findOne({name})
        console.log(existingUser)
           
        //existing user
        
        if(existingUser){
            return res.status(200).send({
                success:false,
                message:'already register please login'
            })
        }

        //save
        const supplier = await new testModel({
            name,address,phonenumber1, phonenumber2,email, email2
        }).save()

        res.status(201).send({
            success:true,
            message:'user register successfully',
            supplier,
        }).save

    }catch(error){
        console.log(error)
        res.status(500).send({
            success:false,
            message:'error in registration',
            error,
        })
    }
}


