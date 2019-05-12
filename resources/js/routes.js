import Home from './components/Home';
import Project from './components/Project';

export default {
    mode: 'history',

    routes: [
        {
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
