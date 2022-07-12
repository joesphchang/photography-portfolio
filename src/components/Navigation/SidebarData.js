import React from 'react'
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as MdIcons from 'react-icons/md';


export const SidebarData = [
	{
		title: 'Home',
		path: '/',
		icon: <AiIcons.AiFillHome />,
		cName: 'nav-text',
	},
	{
		title: 'Portfolio',
		path: '/portfolio',
		icon: <FaIcons.FaTh />,
		cName: 'nav-text',
	},
	{
		title: 'Street & Landscapes',
		path: '/street',
		icon: <MdIcons.MdMonochromePhotos />,
		cName: 'nav-text',
	},
	{
		title: 'Projects',
		path: '/projects',
		icon: <FaIcons.FaBox />,
		cName: 'nav-text',
	},
	{
		title: 'Contact',
		path: '/contact',
		icon: <AiIcons.AiFillContacts />,
		cName: 'nav-text',
	},
];
