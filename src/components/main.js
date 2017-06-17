import { h } from 'preact';
import Category from './category';

export const categories = [
	'Popular on Minidium',
	'Audio',
	'Members Only',
	'Handpicked By Minidium Staff',
	'Technology',
	'Creativity',
	'Entrepreneurship',
	'Culture',
	'Self'
];

export default () =>
	<div className="main">
		{categories.map(category => <Category category={category} />)}
	</div>;
