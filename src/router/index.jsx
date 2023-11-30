import { createBrowserRouter, Navigate } from 'react-router-dom';
import { ServicesView } from '../pages/ServicesView';
import { AboutView } from '../pages/AboutView';
import { ContactView } from '../pages/ContactView';
import { HomeView } from '../pages/HomeView';
import { Root } from '../layout/Root';

const router = createBrowserRouter([
	{ element: <Root />, children: [
		{ path: '/', element: <HomeView /> },
		{ path: '/services', element: <ServicesView /> },
		{ path: '/about', element: <AboutView /> },
		{ path: '/contact', element: <ContactView /> },
		{ path: '*', element: <Navigate to="/" />}
	]}
]);

export default router;
