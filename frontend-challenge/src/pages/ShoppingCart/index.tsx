import React, { useState, useEffect } from 'react';
import PageHeader from '../../components/PageHeader/PageHeader';

import './styles.css';
import ProductItem from '../../components/ProductItem';

const ShoppingCart = () => {
	const localStorageData = localStorage.getItem('cart') || '[]';
	const [totalPrice, setTotalPrice] = useState(0);
	const [isOnCart, setIsOnCart] = useState(true);

	

	useEffect(() => {
		let total = 0;
		JSON.parse(localStorageData).map((product: any, index: any) => {
			total = total + Number(product.price.replace(/[^0-9.-]+/g, ''));
		});
		setTotalPrice(total);
	}, [totalPrice]);

	useEffect(() => {
		// TODO: figure logic for remving item from screen once removed with click on button
	}, [isOnCart])

	return (
		<React.Fragment>
			<PageHeader />
			<div className="container py-5 products-list">
				{localStorageData
					? JSON.parse(localStorageData).map((product: any, index: any) => {
							return (
								<ProductItem
									key={index}
									product={product}
									index={index}
									onCart={isOnCart}
								/>
							);
					  })
					: null}

				{totalPrice > 0 ? (
					<div className="total-price">{`Total Cost: R$ ${totalPrice}`}</div>
				) : null}
			</div>
		</React.Fragment>
	);
};

export default ShoppingCart;
