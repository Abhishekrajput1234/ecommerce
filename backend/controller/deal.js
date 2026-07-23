const Deal = require("../model/deal");

const createDeal = async (req, res) => {

    try {

        const deals = [

            {
                title: "Nike Running Shoes",
                image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600",
                price: 1999,
                discount: 40
            },

            {
                title: "Wireless Headphones",
                image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600",
                price: 2499,
                discount: 35
            },

            {
                title: "Smart Watch",
                image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600",
                price: 2999,
                discount: 30
            },

            {
                title: "Gaming Mouse",
                image: "https://images.unsplash.com/photo-1527814050087-3793815479db?w=600",
                price: 999,
                discount: 25
            },

            {
                title: "Bluetooth Speaker",
                image: "https://images.unsplash.com/photo-1589003077984-894e133dabab?w=600",
                price: 1499,
                discount: 45
            }

        ];

        await Deal.insertMany(deals);

        res.status(201).json({
            success: true,
            message: "Deals inserted successfully"
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

};




const getDeals = async (req, res) => {

    try {

        const deals = await Deal.find();

        res.status(200).json(deals);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

}

module.exports = getDeals;



module.exports = {createDeal , getDeals}