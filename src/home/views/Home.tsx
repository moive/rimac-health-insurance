import { useEffect, useState } from "react";
import { Footer } from "../../shared/components/Footer";
import Header from "../../shared/components/Header";

export const Home = () => {
	const [isHome, setIsHome] = useState(false);

	useEffect(() => {
		console.log(22);
		if (window.location.pathname === "/") {
			setIsHome(true);
		} else {
			setIsHome(false);
		}
	}, []);
	return (
		<main className={isHome ? "is-home" : ""}>
			<Header />
			<Footer />
		</main>
	);
};
