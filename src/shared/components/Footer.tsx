import { useState } from "react";
import "../sass/footer.scss";

export const Footer = () => {
	const [year] = useState(new Date().getFullYear());
	return (
		<footer>
			<div className="container-footer">
				<figure>
					<img src="/assets/logo-rimac-white.svg" alt="rimac logo white" />
				</figure>
				<span>&copy; {year} RIMAC Seguros y Reaseguros.</span>
			</div>
		</footer>
	);
};
