import React from "react";
import { FiShoppingCart } from "react-icons/fi";
import { Link } from "react-router-dom";
import "../assets/styles/Shop.styles.css";

import productImage1 from "../assets/images/product1.jpeg";
import productImage2 from "../assets/images/product2.jpeg";
import productImage3 from "../assets/images/product3.jpeg";
import productImage4 from "../assets/images/product4.jpeg";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { useSelector } from "react-redux";
const Shop = () => {
	const products = [
		{
			id: 1,
			title: "Mug",
			price: "$9.99",
			image: productImage1,
		},
		{
			id: 2,
			title: "T-Shirts",
			price: "$19.99",
			image: productImage2,
		},
		{
			id: 3,
			title: "Accessories & Beatz",
			price: "$14.99",
			image: productImage3,
		},
		{
			id: 4,
			title: "Home Accounts",
			price: "$24.99",
			image: productImage4,
		},
	];

	return (
		<>
			<Nav
				show={
					useSelector((state) => state.auth.isAuthenticated)
						? "authenticated"
						: "not-authenticated"
				}
			/>
			<div className="shop-container">
				<div className="shop-header">
					<h2 className="shop-title">Our Shop</h2>

					<Link
						to={"/cart"}
						children={
							<FiShoppingCart
								className="shopping-cart-icon"
								style={{
									color: "#010101",
								}}
							/>
						}
						style={{
							textDecoration: "none",
						}}
					/>
				</div>
				<div className="product-list">
					{products.map((product) => (
						<Link
							to={`/shop/${product.id}`}
							className="product-card"
							key={product.id}
						>
							<div className="product-image">
								<img src={product.image} alt={product.title} />
							</div>
							<div className="product-info">
								<h3 className="product-title">{product.title}</h3>
								<p className="product-price">{product.price}</p>
							</div>
						</Link>
					))}
				</div>
			</div>
			<Footer />
		</>
	);
};

export default Shop;
