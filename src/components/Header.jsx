import React, { useState, useContext } from 'react';
import Menu from '../components/Menu';

import MyOrder from '../containers/MyOrder';

import AppContext from '../context/AppContext'

import '@styles/Header.scss';

//import logo from "@icons/icon_menu.svg";
const Header = () => {
	const [toggle, setToggle] = useState(false);
	const [toggleOrders, setToggleOrders] = useState(false)


	const {state} = useContext(AppContext);
	{console.log(state);}

	const handleToggle = ()=>{
		setToggle(!toggle)
	}

	return (
		<nav>
			{/* <img src={logo} alt="menu" className="menu"/> */}
			<div className="navbar-left">
				{/* <img src={logo} alt="logo" className="nav-logo" /> */}
				<ul>
					<li>
						<a href="/">All</a>
					</li>
					<li>
						<a href="/">Clothes</a>
					</li>
					<li>
						<a href="/">Electronics</a>
					</li>
					<li>
						<a href="/">Furnitures</a>
					</li>
					<li>
						<a href="/">Toys</a>
					</li>
					<li>
						<a href="/">Others</a>
					</li>
				</ul>
			</div>
			<div className="navbar-right">
				<ul>
					<li className="navbar-email" onClick={handleToggle}>platzi@example.com</li>
					<li className="navbar-shopping-cart" onClick={()=>setToggleOrders(!toggleOrders)}>
						<img src="./icons/icon_shopping_cart.svg" alt="shopping cart" />
						<div>{state.card.lenght > 0 ? <div>{state.card.lenght}</div> : null}</div>
					</li>
				</ul>
				{toggle && <Menu/>}
				{toggleOrders && <MyOrder/>}
			</div>
		</nav>
	);
}

export default Header;
