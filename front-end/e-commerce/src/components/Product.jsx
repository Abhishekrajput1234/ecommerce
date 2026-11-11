
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Product({ setBuyproduct, setCart, cart }) {

    const [products, setProducts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    const navigate = useNavigate();

    // Fetch products according to current page
    const fetchdata = () => {

        fetch(
            `${import.meta.env.VITE_API_URL}/getproducts?page=${currentPage}&limit=6`
        )
            .then((res) => res.json())
            .then((json) => {

                console.log(json);

                setProducts(json.products || json.productget || []);
                setCurrentPage(json.currentPage || currentPage);
                setTotalPages(json.totalPages || 1);

            })
            .catch((err) => console.log(err));
    };

    useEffect(() => {
        fetchdata();
    }, [currentPage]);

    // Buy Now
    const buynow = (item) => {
        setBuyproduct(item);
        navigate("/buynow");
    };

    // Add to Cart
    const addToCart = (item) => {

        const alreadyExists = cart.find(
            (product) => product._id === item._id
        );

        if (alreadyExists) {

            const updatedCart = cart.map((product) =>
                product._id === item._id
                    ? {
                        ...product,
                        quantity: product.quantity + 1
                    }
                    : product
            );

            setCart(updatedCart);
            return;
        }

        setCart([
            ...cart,
            {
                ...item,
                quantity: 1
            }
        ]);

        alert("Product added to cart!");
    };

    // Previous Page
    const previousPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    // Next Page
    const nextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    return (
        <>

            <h1 className="text-3xl font-bold text-center my-5">
                <span className="text-gray-700 font-bold text-4xl">
                    Product
                </span>
                <span className="text-red-700 font-bold text-4xl">
                    {" "}List
                </span>
            </h1>

            {/* Products */}
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-5">

                {products.map((item) => (

                    <div
                        key={item._id}
                        className="bg-white shadow-lg rounded-lg p-4"
                    >

                        <img
                            src={item.image}
                            alt={item.title}
                            className="w-full h-60 object-cover rounded"
                        />

                        <h2 className="text-xl font-semibold mt-3">
                            {item.title}
                        </h2>

                        <div className="flex items-center justify-between gap-4 mt-3 px-1">
                            <div>
                                <span>⭐⭐⭐⭐⭐</span>
                                <span className="font-medium text-gray-700 ml-2">
                                    (4.5)
                                </span>
                            </div>

                            <span className="text-gray-600 text-sm font-bold">
                                1.2k Reviews
                            </span>
                        </div>

                        <p className="text-gray-600 mt-2">
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

                        <div className="flex flex-col items-center justify-between mt-2 px-2">

                            <button
                                onClick={() => addToCart(item)}
                                className="bg-yellow-500 w-full text-white px-3 py-2 rounded-lg hover:bg-yellow-600 mt-3 cursor-pointer text-sm font-medium"
                            >
                                Add to cart
                            </button>

                            <button
                                onClick={() => buynow(item)}
                                className="bg-blue-400 text-white px-3 py-2 rounded-lg hover:bg-blue-700 mt-3 w-full cursor-pointer text-sm font-medium"
                            >
                                Buy Now
                            </button>

                        </div>

                    </div>

                ))}

            </div>

            {/* Pagination Buttons */}
            <div className="flex max-w-7xl  justify-end items-center gap-5 my-10 ">

                <button
                    onClick={previousPage}
                    disabled={currentPage === 1}
                    className="bg-gray-700 text-white px-6 py-2 rounded-lg disabled:bg-gray-300 disabled:cursor-not-allowed hover:bg-gray-900"
                >
                    Previous
                </button>

                <span className="font-bold text-lg">
                    Page {currentPage} of {totalPages}
                </span>

                <button
                    onClick={nextPage}
                    disabled={currentPage === totalPages}
                    className="bg-blue-600 text-white px-6 py-2 rounded-lg disabled:bg-gray-300 disabled:cursor-not-allowed hover:bg-blue-800"
                >
                    Next
                </button>

            </div>

        </>
    );
}
