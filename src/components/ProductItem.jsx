import React, {useContext} from 'react';
import '../styles/ProductItem.scss';
import AppContext from '../context/AppContext'

const ProductItem = ({product}) => {
	const image = product.category.image
	const price = product.price
	const title = product.title
	const description = product.description

	const {appToCard} = useContext(AppContext);

	const hanleClick = (item) => {
		addToCard(item);
	}
	return (
		<div className="ProductItem">
			{/* <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" /> */}
			<img src={image} alt={title}/>
			<div className="product-info">
				<div>
					<p>$ {price} ARS</p>
					<p>{title}</p>
				</div>
				<div>
					<p>Description</p>
					<p>{description}</p>
				</div>
				<figure onClick={()=>hanleClick(product)}>
					{/* <img src="../assets/icons/bt_add_to_cart.svg" alt="" /> */}
					<span>Comprar</span>
				</figure>
			</div>
		</div>
	);
}

export default ProductItem;
