import Vue from 'vue';
import VueRouter from 'vue-router';

// Layout import
// import UnAuthLayout from './layout/UnAuthLayout';
import Landing from './layout/Landing';

// Pages import
import Home from './pages/Home';
// import Dashboard from './pages/dashboard/Dashboard';
// import Therapist from '@/pages/dashboard/Therapist';
// import TherapistPreview from '@/pages/dashboard/TherapistPreview';
// import InviteTherapist from '@/pages/dashboard/InviteTherapist';
// import User from './pages/dashboard/Users';
Vue.use(VueRouter);

export default new VueRouter({
	mode: 'history',
	routes: [
		{
			path: '/',
			component: Landing,
			children: [
				{
					path: '',
					component: Home,
					name: 'Home',
				},
				// {
				// 	path: '/login',
				// 	component: Login,
				// 	name: 'Login',
				// },
			],
		},
		// {
		// 	path: '/dashboard',
		// 	component: Landing,
		// 	children: [
		// 		{
		// 			path: '',
		// 			name: 'Dashboard',
		// 			component: Dashboard,
		// 		},
		// 		{
		// 			path: '/therapist',
		// 			name: 'Therapist',
		// 			component: Therapist,
		// 			children: [],
		// 		},
		// 		{
		// 			path: '/invite',
		// 			name: 'Invite Therapist',
		// 			component: InviteTherapist,
		// 		},
		// 		{
		// 			path: '/preview',
		// 			name: 'Preview Details',
		// 			component: TherapistPreview,
		// 		},
		// 		{
		// 			path: '/user',
		// 			name: 'User',
		// 			component: User,
		// 		},
		// 	],
		// },
	],
});
