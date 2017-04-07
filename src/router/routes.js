import HomePage from 'page/HomePage';
import Pages from 'data/enum/Pages';
import PageNames from 'data/enum/PageNames';
import AboutPage from '../page/AboutPage';
import ContactPage from '../page/ContactPage';

export default [
	{
		path: Pages.HOME,
		component: HomePage,
		name: 'home',
	},
	{
		path: Pages.ABOUT,
		component: AboutPage,
		name: 'about',
	},
	{
		path: Pages.CONTACT,
		component: ContactPage,
		name: 'contact',
	},
];
