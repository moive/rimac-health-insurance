import { useEffect, useState } from "react";
import { Footer } from "../../shared/components/Footer";
import Header from "../../shared/components/Header";
import { ContainerHome } from "../components/ContainerHome";

export const Home = () => {
	const [isHome, setIsHome] = useState(false);

	useEffect(() => {
		if (window.location.pathname === "/") {
			setIsHome(true);
		} else {
			setIsHome(false);
		}
	}, []);
	return (
		<main className={isHome ? "is-home" : ""}>
			<div className="gradient-left"></div>
			<div className="gradient-right"></div>
			<Header />
			<ContainerHome />
			<Footer />
		</main>
	);
};
