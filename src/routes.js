import Home from './pages/Home.svelte';
import AboutMe from './pages/AboutMe.svelte';
import NotFound from './pages/NotFound.svelte';
import Project from './pages/Project.svelte';

const routes = {
	'/': Home,
	'/projects': Project,
	'/about-me': AboutMe,
	'*': NotFound,
};
export default routes;
