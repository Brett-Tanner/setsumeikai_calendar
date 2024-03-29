import type { formOption } from "../../declarations";

interface SelectFieldProps {
	label: string;
	name: string;
	options: formOption[];
	required: boolean;
}

export default function SelectField({
	label,
	name,
	options,
	required,
}: SelectFieldProps) {
	return (
		<div className="flex flex-col basis-[45%] gap-2 text-lg">
			<label htmlFor={name} className="self-start font-semibold">
				<span className="text-ku-secondary text-base">{label}</span>
				<span
					className={`label text-xs ${
						required ? "label-required" : "label-premium"
					}`}
				>
					{required ? "必須" : "任意"}
				</span>
			</label>
			<select
				name={name}
				required={required}
				className="border border-secondary rounded-md p-2 bg-white text-ku-secondary border-secondary focus-visible:shadow-input-orange focus-visible:outline-none focus:shadow-input-orange focus:text-ku-orange"
			>
				<option value="" className="text-black">
					選択してください
				</option>
				{options.map((o) => {
					return (
						<option value={o.value} key={o.value} className="text-black">
							{o.name}
						</option>
					);
				})}
			</select>
		</div>
	);
}
