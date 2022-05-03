import React, { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import './Navbar.scss';
import Logo from '../../assets/img/folha.png'


const Navbar = () => {
	const [open, setOpen] = useState(false);

	const handleClick = () => {
		setOpen(!open);
	};

	const closeMenu = () => {
		setOpen(false);
	};

	return (
		<div>
			<div className="logo">
				<img src={Logo} alt="Aroma" />
				<h1>AROMA</h1>
			</div>
			<hr className="separador"></hr>
			<nav className="navbar">
				<div onClick={handleClick} className="nav-icon">
					{open ? <FiX /> : <FiMenu />}
				</div>
				<ul className={open ? 'nav-links active' : 'nav-links'}>
					<li className="nav-item">
						<Link to="/" className="nav-link" onClick={closeMenu}>
							Home
						</Link>
					</li>
					<div className="divisor" role="separator"></div>
					<li className="nav-item">
						<Link to="/o-que-e-aromaterapia" className="nav-link" onClick={closeMenu}>O que é aromaterapia</Link>
					</li>
					<div className="divisor" role="separator"></div>
					<li className="nav-item">
						<Link to="/oleos-essenciais" className="nav-link" onClick={closeMenu}>Óleos essenciais</Link>
					</li>
					<div className="divisor" role="separator"></div>
					<li className="nav-item">
						<Link to="/ajuda-para" className="nav-link" onClick={closeMenu}>
							Ajuda para
						</Link>
					</li>
					<div className="divisor" role="separator"></div>
					<li className="nav-item">
						<Link to="/referencias-bibliograficas" className="nav-link" onClick={closeMenu}>
							Referencias bibliograficas
						</Link>
					</li>
					<div className="divisor" role="separator"></div>
					<li className="nav-item">
						<Link to="/sobre-aroma" className="nav-link" onClick={closeMenu}>
							Sobre Aroma
						</Link>
					</li>
				</ul>
			</nav>
			<hr className="separador"></hr>
		</div>
	);
};

export default Navbar;
