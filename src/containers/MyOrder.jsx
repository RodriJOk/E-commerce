import React , {useContext} from 'react';
import OrderItem from '../components/OrderItem';
import AppContext from '../context/AppContext';
import '../styles/MyOrder.scss';

const MyOrder = () => {
	const {state} = useContext(AppContext);
	const sumTotal =()=>{
		const reducer = (accumulador, currentValue)=> accumulador + currentValue.price;
		const sum = state.card.reduce(reducer, 0);
		return sum; 
	}

	return (
		<aside className="MyOrder">
			<div className="title-container">
				<img src="./icons/flechita.svg" alt="arrow" />
				<p className="title">My order</p>
			</div>
			<div className="my-order-content">
				{state.card.map(product=>(
					<OrderItem product={product} key={`orderItem-${product.id}`}/>
				))}
				<div className="order">
					<p>
						<span>Total</span>
					</p>
					<p>$ {sumTotal()}</p>
				</div>
				<button className="primary-button">
					Checkout
				</button>
			</div>
		</aside>
	);
}

export default MyOrder;
