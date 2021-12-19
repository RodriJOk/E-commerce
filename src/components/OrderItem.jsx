import React, { useContext } from 'react';
import AppContext from '../context/AppContext'

import '../styles/OrderItem.scss';

const OrderItem = ({product}) => {
	const {removeFromCard} = useContext(AppContext);
	const handleRemove =  product =>{
		removeFromCard(product);
	}
	
	return (
		<div className="OrderItem">
			<figure>
				<img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt={product.title} />
			</figure>
			<p>{product.title}</p>
			<p>{product.price}</p>
			<img src="./icons/icon_close.png" alt="close" onClick={()=>handleRemove(product)}/>
		</div>
	);
}

export default OrderItem;
