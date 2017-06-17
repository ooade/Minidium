import { h } from 'preact';

const FooterLinks = [
	'Getting Started',
	'Help',
	'Status',
	'Blog',
	'Careers',
	'Privacy',
	'Terms',
	'About'
];

export default () =>
	<footer>
		<ul>
			{FooterLinks.map(link => <li key={link}>{link}</li>)}
		</ul>
	</footer>;
