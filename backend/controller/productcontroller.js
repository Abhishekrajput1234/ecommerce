const XLSX = require("xlsx");
const productlist = require("../model/productlist");

const bulkUploadProducts = async (req, res) => {
    try {

        // Check file
        if (!req.file) {
            return res.status(400).json({
                success: false,
                message: "Please upload an Excel file"
            });
        }

        // Read Excel file
        const workbook = XLSX.read(req.file.buffer, {
            type: "buffer"
        });

        // Get first sheet
        const sheetName = workbook.SheetNames[0];

        const sheet = workbook.Sheets[sheetName];

        // Convert Excel into JSON
        const products = XLSX.utils.sheet_to_json(sheet);

        // Check data
        if (products.length === 0) {
            return res.status(400).json({
                success: false,
                message: "Excel file is empty"
            });
        }

        console.log("Excel Products:", products);

        // Save products in MongoDB
        const savedProducts = await productlist.insertMany(products);

        res.status(201).json({
            success: true,
            message: "Products uploaded successfully",
            totalImported: savedProducts.length
        });

    } catch (error) {

        console.log("Bulk Upload Error:", error);

        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};


const getproducts = async (req, res) => {

    try{

        const productget = await productlist.find();

        if(productget.length > 0){

            res.status(200).json({message:"Products retrieved successfully", productget})
        }

        else{
            res.status(401).json({message:"No products found"})
        }


    }

    catch(err){ 
        res.status(500).json({message:"Error occurred while retrieving products", error: err.message})
    }
}




    







module.exports = {
    bulkUploadProducts,
    getproducts
};