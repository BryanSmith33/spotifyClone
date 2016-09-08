import { provideRouter, RouterConfig } from '@angular/router';
import { SearchComponent } from './components/search/search.component';
import { AboutComponent } from './components/about/about.component';

const routes = [
	{
		path:'',
		component:SearchComponent
	},
	{
		path:'about',
		component: AboutComponent
	}
];

export const appRoutingProviders: any[] = [
	provideRouter(routes)
];