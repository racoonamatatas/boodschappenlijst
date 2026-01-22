import Overview from './pages/Overview.vue';
import Create from './pages/Create.vue';
import Edit from './pages/Edit.vue';

export const routes = [
    {path: '/overview', component: Overview, name: 'grocery.overview'},
    {path: '/create', component: Create},
    {path: '/edit/:id', component: Edit},
];
