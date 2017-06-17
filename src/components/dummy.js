import { h } from 'preact';

export default () =>
	<div className="dummy">
		<div className="dummy__image" />
		<div className="dummy__body">
			<div className="dummy__title">
				Lorem ipsum dolor sit amet, consectetur adipisicing elit
			</div>
			<div className="dummy__description">
				Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum
				explicabo...
			</div>
			<div className="dummy__author">
				<div className="dummy__author-image" />
				<div className="dummy__author-body">
					<div className="dummy__author-name">
						John Doe
					</div>
					<div className="dummy__author-date">
						June 17 &middot; 7 min read
					</div>
				</div>
			</div>
		</div>
	</div>;
