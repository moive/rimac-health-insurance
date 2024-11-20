import "../sass/breadcrumbs.scss";

type Props = {
	id: string;
};

interface Breadcrumbs {
	name: string;
	title: string;
}

const items: Breadcrumbs[] = [
	{ name: "planes", title: "Planes y coberturas" },
	{ name: "resumen", title: "Resumen" },
];

export const Breadcrumbs = ({ id }: Props) => {
	return (
		<section className="wrapper-breadcrumbs">
			<ul className="navbar">
				{items.map((item, idem) => (
					<li
						key={item.name}
						className={item.name == id ? "navbar-item active" : "navbar-item"}
					>
						<span className="navbar-item-number">{idem + 1}</span>
						<span className="navbar-item-text">{item.title}</span>
						{idem + 1 !== items.length ? (
							<img
								className="line-progress"
								src="./assets/line-progress.svg"
								alt="line-progress"
							/>
						) : null}
					</li>
				))}
			</ul>
		</section>
	);
};
