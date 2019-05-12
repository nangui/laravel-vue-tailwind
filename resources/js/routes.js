import Home from './components/Home';
import Project from './components/Project';
import NotFound from './components/NotFound';

export default {
    mode: 'history',
    linkActiveClass: 'font-bold',
    routes: [
        {
            path: '*',
            component: NotFound
        },
        {
            name: 'home',
            path: '/',
            component: Home
        },
        {
            name: 'projects',
            path: '/projects',
            component: Project
        }
    ]
};
