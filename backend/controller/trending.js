const productlist = require("../model/productlist");

const trendingproduct = async (req, res) => {

    try {

        const trending = await productlist.find({
            trending: true
        });

        res.status(200).json({
            message: "Products fetched successfully",
            products: trending
        });

    } catch (err) {

        res.status(500).json({
            message: err.message
        });

    }

};

const Addtrending = async (req, res) => {
    try {

        const { id } = req.params;

        const Addproduct = await productlist.findByIdAndUpdate(
            id,
            { trending: true },
            { new: true }
        );

        if (!Addproduct) {
            return res.status(404).json({
                message: "Product not found"
            });
        }

        res.status(200).json({
            message: "Product updated successfully",
            product: Addproduct
        });

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }
};

module.exports = {trendingproduct,Addtrending}