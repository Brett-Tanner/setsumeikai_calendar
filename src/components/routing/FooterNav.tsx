import BackLink from "./BackLink";
import ForwardLink from "./ForwardLink";
import type { selections } from "../../declarations";

interface props {
	currentStep: string;
	selections: selections;
}

export default function FooterNav({ currentStep, selections }: props) {
	return (
		<nav className="z-40 sticky bottom-0 flex justify-between gap-1 py-2 px-3 md:p-2 bg-main-background">
			<BackLink currentStep={currentStep} selections={selections} />
			<div className="flex-grow" />
			<ForwardLink currentStep={currentStep} selections={selections} />
		</nav>
	);
}
