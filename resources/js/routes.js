let Home = () => import(/* webpackChunkName: "loaders" */'./components/Home');
import Project from './components/Project';
import NotFound from './components/NotFound';

import axios from 'axios';

window.axios = axios;
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';


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
