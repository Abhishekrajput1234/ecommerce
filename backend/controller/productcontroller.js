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
    try {
        // Get page and limit from URL
        const page = Number(req.query.page) || 1;
        const limit = Number(req.query.limit) || 8;

        // Calculate skip
        const skip = (page - 1) * limit;

        // Total products
        const totalProducts = await productlist.countDocuments();

        // Fetch products for current page
        const productget = await productlist
            .find()
            .skip(skip)
            .limit(limit);

        res.status(200).json({
            success: true,
            productget,
            currentPage: page,
            totalPages: Math.ceil(totalProducts / limit),
            totalProducts
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

// Delete ALL products
const deleteAllProducts = async (req, res) => {
    try {
        const result = await productlist.deleteMany({});

        res.status(200).json({
            success: true,
            message: "All products deleted successfully",
            totalDeleted: result.deletedCount
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: "Error occurred while deleting products",
            error: err.message
        });
    }
};




    







module.exports = {
    bulkUploadProducts,
    getproducts,
    deleteAllProducts
};