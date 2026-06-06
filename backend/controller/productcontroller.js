const productlist = require("../model/productlist")

const productview = async(req,res)=>{

    try{

        await productlist.create([

            // ================= Boys Products =================

            {
                title:"Mens Casual Shirt",
                price:999,
                image:"https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf",
                description:"Stylish cotton casual shirt with comfortable fitting, breathable fabric, and modern design perfect for office wear and everyday fashion styling.",
                featured:false,
                
                
            },

            {
                title:"Mens Blue Jeans",
                price:1499,
                image:"https://images.unsplash.com/photo-1542272604-787c3835535d",
                description:"Premium slim fit blue jeans with stretchable fabric, durable stitching, and trendy style suitable for casual wear, travel, and daily comfort.",
                featured:true,
                
            },

            {
    title:"Mens Sneakers",
    price:2499,
    image:"https://images.unsplash.com/photo-1542291026-7eec264c27ff",
    description:"Comfortable lightweight sneakers with breathable material, cushioned sole, and stylish sporty design ideal for running,  and casual wear.",
     featured:false,

},

            // ================= Girls Products =================

            {
                title:"Girls Stylish Top",
                price:799,
                image:"https://images.unsplash.com/photo-1483985988355-763728e1935b",
                description:"Trendy girls fashion top featuring soft fabric, elegant design, and comfortable fitting perfect for parties, casual outings, college, and everyday styling.",
                featured:true,
            },

            {
                title:"Girls Kurti",
                price:1299,
                image:"https://images.unsplash.com/photo-1529139574466-a303027c1d8b",
                description:"Beautiful traditional printed kurti crafted with premium fabric, attractive patterns, and comfortable fitting suitable for festivals, and casual occasions.",
                featured:false,
                
            },

            {
                title:"Girls Handbag",
                price:1999,
                image:"https://images.unsplash.com/photo-1584917865442-de89df76afd3",
                description:"Premium leather handbag with spacious compartments, elegant finishing, stylish appearance, and  office, and parties.",
                featured:true,
                
            },

            // ================= Grocery Products =================

            {
                title:"Fresh Apples",
                price:199,
                image:"https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6",
                description:"Fresh organic apples rich in vitamins, natural taste, and nutrition ideal for healthy diets, fruit salads, juices, and daily energy needs.",
              featured:false,
                
            },

            {
                title:"Milk Packet",
                price:60,
                image:"https://images.unsplash.com/photo-1550583724-b2692b85b150",
                description:"Fresh dairy milk packed with calcium, protein, and nutrients suitable for tea, coffee,  sweets, and healthy daily consumption.",
                 featured:false,
            
            },

            {
                title:"Rice Bag",
                price:899,
                image:"https://images.unsplash.com/photo-1586201375761-83865001e31c",
                description:"Premium basmati rice with rich aroma, long grains, and delicious taste perfect for biryani, pulao, , and special family occasions.",
                 featured:false,
                
            }

        ])

        res.status(200).json({
            message:"Products added successfully"
        })

    }

    catch(err){

        res.status(500).json({
            error:err.message
        })

    }

}

const getproducts = async(req,res)=>{

    try{

        const products = await productlist.find()

        res.status(200).json({
            message:"products retrieved successfully",
            products
        })

    }

    catch(err){

        res.status(500).json({
            error:err.message
        })

    }

}

module.exports = { productview, getproducts }