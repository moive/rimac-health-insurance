import { Link } from "react-router-dom";
import "../sass/header.scss";

const Header = () => {
	return (
		<header>
			<div className="container-header">
				<Link to="/" className="logo-rimac">
					<img src="/assets/logo-rimac-red.svg" />
				</Link>
				<div className="purchase">
					<span className="purchase-text">¡Compra por este medio!</span>
					<a href="tel:(01) 411 6001" className="by-calling">
						<img src="/assets/icon-telephone-black.svg" alt="icon-telephone" />
						<span>(01) 411 6001</span>
					</a>
				</div>
			</div>
		</header>
	);
};

export default Header;
