
const productlist = require("../model/productlist");

const getfeatureproducts = async (req, res) => {
    try {
        // Get page and limit from query parameters
        const page = Math.max(1, Number(req.query.page) || 1);
        const limit = Math.min(50, Math.max(1, Number(req.query.limit) || 6));

        // Calculate skip
        const skip = (page - 1) * limit;

        // Count total featured products
        const totalProducts = await productlist.countDocuments({
            featured: true
        });

        // Calculate total pages
        const totalPages = Math.ceil(totalProducts / limit);

        // Fetch featured products
        const featureproducts = await productlist
            .find({ featured: true })
            .sort({ _id: 1 })
            .skip(skip)
            .limit(limit);

        // Send response
        return res.status(200).json({
            success: true,
            message: "Featured products retrieved successfully",
            featureproducts,
            currentPage: page,
            totalPages,
            totalProducts,
            limit
        });

    } catch (err) {
        console.error("Featured Products Error:", err);

        return res.status(500).json({
            success: false,
            message: "Failed to fetch featured products",
            error: err.message
        });
    }
};

module.exports = getfeatureproducts;
