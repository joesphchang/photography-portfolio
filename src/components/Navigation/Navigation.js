// Dependencies
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// Icons
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { SidebarData } from './SidebarData';
import { IconContext } from 'react-icons';
// CSS
import './Navigation.css';
// Logo
import Logo from '../../assets/hero-logo.png';

function Navigation() {
	const [sidebar, setSidebar] = useState(false);

	function showSideBar() {
		setSidebar(!sidebar);
	}

	return (
		<>
			<IconContext.Provider value={{ color: 'black' }}>
				<div className='navbar'>
					<Link to='#' className='menu-bars'>
						<FaIcons.FaBars onClick={showSideBar} />
					</Link>
					<nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
						<ul className='nav-menu-items' onClick={showSideBar}>
							<li className='navbar-toggle'>
								<Link to='#' className='menu-bars'>
									<AiIcons.AiOutlineClose />
								</Link>
							</li>
							<img src={Logo} alt='avantogarde logo' className='nav-logo' />
							{SidebarData.map((item, index) => {
								return (
									<li key={index} className={item.cName}>
										<Link to={item.path}>
											{item.icon}
											<span>{item.title}</span>
										</Link>
									</li>
								);
							})}
							<div className='social-links'>
								<a
									href='https://www.linkedin.com/in/joesphchang/'
									target='_blank'
									rel='noopener noreferrer'
									className='social-icons'>
									<FaIcons.FaLinkedin />
								</a>
								<a
									href='https://github.com/joesphchang'
									target='_blank'
									rel='noopener noreferrer'
									className='social-icons'>
									<FaIcons.FaGithubAlt />
								</a>
								<a
									href='https://www.instagram.com/avantogarde/'
									target='_blank'
									rel='noopener noreferrer'
									className='social-icons'>
									<FaIcons.FaInstagramSquare />
								</a>
							</div>
						</ul>
					</nav>
				</div>
			</IconContext.Provider>
		</>
	);
}

export default Navigation;
