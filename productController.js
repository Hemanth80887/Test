const productDatabseFolder = require("../models/productModel")


const createProduct = async(req, res) =>{
    try {
        const newproduct = new productDatabseFolder(req.body);
        await newproduct.save();

        res.status(200).json({
            isSuccess:true,
            message:"product created successfully.",
            createdproduct:newproduct
        })
    } catch (error) {
        res.status(500).json({
            isSuccess:false,
            message:error.message
        })
    }
}



const getAllProducts = async(req, res) =>{
    try {
        const allProducts = await productDatabseFolder.find();
        if(!allProducts){
            res.status(404).json({
                isSuccess:true,
                message:"no products found"
            });
            return;
        }


        res.status(200).json({
            isSuccess:true,
            products:allProducts,
            message:"products fetched successfully"
        })
    } catch (error) {
         res.status(500).json({
            isSuccess:false,
            message:error.message
        })
    }
}


const getSingleProduct = async(req, res) =>{
    const {id} = req.params;
    try {
            const product = await productDatabseFolder.findById(id);

            if(!product){
            res.status(404).json({
                isSuccess:true,
                message:" product not found in this id"
            });
            return;
        }


        res.status(200).json({
            isSuccess:true,
            product:product,
            message:"product fetched successfully"
        })
    } catch (error) {
        res.status(500).json({
            isSuccess:false,
            message:error.message
        })
    }
}



const deleteproduct = async(req, res) =>{
     const {id} = req.params;
    try {
            const product = await productDatabseFolder.findById(id);

            if(!product){
            res.status(404).json({
                isSuccess:true,
                message:" product not found in this id"
            });
            return;
        }

        const dltproduct = await productDatabseFolder.findByIdAndDelete(id)
        res.status(200).json({
            isSuccess:true,
            deletedproduct:dltproduct,
            message:"product fetched successfully"
        })
    } catch (error) {
        res.status(500).json({
            isSuccess:false,
            message:error.message
        })
    }
}

module.exports = {createProduct, getAllProducts, getSingleProduct, deleteproduct};