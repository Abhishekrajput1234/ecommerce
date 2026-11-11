
import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";

export default function FeatureProduct({ setBuyproduct, cart, setCart }) {

    const [featuredProducts, setFeaturedProducts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    const navigate = useNavigate();

    // 1. Fetch featured products
    const fetchdata = () => {

        fetch(`${import.meta.env.VITE_API_URL}/getfeatureproducts?page=${currentPage}&limit=6`)
            .then((res) => res.json())
            .then((data) => {

                setFeaturedProducts(data.featureproducts || []);
                setTotalPages(data.totalPages || 1);

            })
            .catch((err) => console.log(err));

    };

    // 2. Call API whenever page changes
    useEffect(() => {

        fetchdata();

    }, [currentPage]);


    // 3. Previous Page
    const previousPage = () => {

        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }

    };


    // 4. Next Page
    const nextPage = () => {

        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }

    };


    // 5. Add to Cart
    const addToCart = (item) => {

        const alreadyExists = cart.find(
            (product) => product._id === item._id
        );

        if (alreadyExists) {
            alert("Product already added!");
            return;
        }

        setCart([...cart, item]);

        alert("Product added to cart!");

    };


    return (
        <>

            <div className="max-w-7xl mx-auto px-4 py-8">

                <h1 className="text-4xl text-gray-800 font-bold">
                    <span className="text-gray-700">Featured </span>
                    <span className="text-red-600">Products</span>
                </h1>

                {/* Product Grid */}

                <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                    {featuredProducts.map((item) => (

                        <div
                            key={item._id}
                            className="bg-white rounded-lg shadow-md p-3 overflow-hidden"
                        >

                            <img
                                src={item.image}
                                alt={item.title}
                                className="w-full h-65 object-cover rounded-lg"
                            />

                            <h2 className="text-xl font-bold text-gray-800 mt-3">
                                {item.title}
                            </h2>

                            <div className="flex items-center justify-between mt-2 px-1">

                                <div>
                                    ⭐⭐⭐⭐⭐
                                    <span className="font-medium text-gray-700">
                                        (4.5)
                                    </span>
                                </div>

                                <span className="text-gray-600 text-sm font-bold">
                                    1.2k Reviews
                                </span>

                            </div>

                            <p className="text-gray-600 mt-3">
                                {item.description}
                            </p>

                            <div className="flex items-center gap-3 mt-3">

                                <span className="text-2xl font-bold text-gray-600">
                                    ₹{item.price}
                                </span>

                                <span className="line-through text-gray-400">
                                    ₹{Math.floor(item.price * 1.4)}
                                </span>

                                <span className="text-green-600 font-semibold">
                                    40% Off
                                </span>

                            </div>

                            <div className="flex flex-col">

                                <button
                                    onClick={() => addToCart(item)}
                                    className="bg-yellow-500 w-full text-white px-3 py-2 rounded-lg hover:bg-yellow-600 mt-3 cursor-pointer text-sm font-medium"
                                >
                                    Add to cart
                                </button>

                                <button
                                    onClick={() => {
                                        setBuyproduct(item);
                                        navigate("/buynow");
                                    }}
                                    className="bg-blue-400 text-white px-3 py-2 rounded-lg hover:bg-blue-700 mt-3 w-full cursor-pointer text-sm font-medium"
                                >
                                    Buy Now
                                </button>

                            </div>

                        </div>

                    ))}

                </div>


                {/* 6. Pagination Buttons */}

                {totalPages > 0 && (

                    <div className="flex justify-center items-center gap-5 mt-10">

                        <button
                            onClick={previousPage}
                            disabled={currentPage === 1}
                            className="bg-gray-700 text-white px-6 py-2 rounded-lg disabled:bg-gray-300 disabled:cursor-not-allowed"
                        >
                            Previous
                        </button>

                        <span className="text-lg font-bold text-gray-700">
                            Page {currentPage} of {totalPages}
                        </span>

                        <button
                            onClick={nextPage}
                            disabled={currentPage >= totalPages}
                            className="bg-blue-600 text-white px-6 py-2 rounded-lg disabled:bg-gray-300 disabled:cursor-not-allowed"
                        >
                            Next
                        </button>

                    </div>

                )}

            </div>

        </>
    );

}
