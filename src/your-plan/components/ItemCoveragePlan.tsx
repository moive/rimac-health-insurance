import { useState } from "react";

type Props = {
	title: string;
	iconImage: string;
	description: string;
	fn: () => void;
	isActive: boolean;
};

export const ItemCoveragePlan = ({
	title,
	iconImage,
	description,
	isActive,
	fn,
}: Props) => {
	const [open, setOpen] = useState(false);

	const toggle = () => {
		setOpen(!open);
	};

	return (
		<div className="item-coverage-plan">
			<div className="item-coverage-plan-top">
				<figure className="item-coverage-plan-icon">
					<img src={"/assets/" + iconImage + ".svg"} alt={iconImage} />
				</figure>
				<div className="item-coverage-plan-middle">
					<div className="item-coverage-plan-title">{title}</div>
					<div className="item-coverage-plan-add-remove">
						<button onClick={fn}>
							{isActive ? (
								<>
									<img src="/assets/icon-circle-minus.svg" alt="" />
									<span>quitar</span>
								</>
							) : (
								<>
									<img src="/assets/icon-circle-plus.svg" alt="" />
									<span>agregar</span>
								</>
							)}
						</button>
					</div>
				</div>
				<div className="item-coverage-plan-icon-right">
					<button onClick={() => toggle()} className="toggle-icon-desktop">
						{open ? (
							<img src="/assets/icon-red-arrow-up.svg" alt="" />
						) : (
							<img src="/assets/icon-red-arrow-down.svg" alt="" />
						)}
					</button>
					<span className="toggle-icon-mobile">
						{/* <IOSSwitch checked={open} onChange={toggle} /> */}
					</span>
				</div>
			</div>
			{open ? (
				<div className="item-coverage-plan-description">{description}</div>
			) : (
				""
			)}
		</div>
	);
};
