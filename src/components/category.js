import { h } from 'preact';
import Dummy from './dummy';

export default ({ category }) =>
	<div className="category">
		<div className="category__header">
			<h1 className="category__title">
				{category}
			</h1>
			<div className="pull-right">
				<a>More > </a>
			</div>
		</div>
		<div className="category__body">
			<Dummy />
			<Dummy />
			<Dummy />
			<Dummy />
		</div>
	</div>;
