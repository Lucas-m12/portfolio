export const Subtract = ({ children }: Props) => {
	return (
	// <section className="w-[476px] h-[634px] relative overflow-hidden">
	// 	<svg xmlns="http://www.w3.org/2000/svg" width="476" height="634" viewBox="0 0 476 634" fill="none" className="absolute z-10">
	// 		<path d="M370.993 1L371.702 0.294917L371.409 0H370.993V1ZM1 1V0H0V1H1ZM475 105.603H476V105.191L475.709 104.898L475 105.603ZM475 633V634H476V633H475ZM107.979 633L107.27 633.705L107.563 634H107.979V633ZM1 525.408H0V525.821L0.290876 526.113L1 525.408ZM370.993 0H1V2H370.993V0ZM475.709 104.898L371.702 0.294917L370.284 1.70508L474.291 106.308L475.709 104.898ZM476 633V105.603H474V633H476ZM107.979 634H475V632H107.979V634ZM0.290876 526.113L107.27 633.705L108.688 632.295L1.70912 524.703L0.290876 526.113ZM0 1V525.408H2V1H0Z" fill="white" />
	// 	</svg>
	// 	<div className="p-4 absolute w-full h-full overflow-hidden z-0 shrink-0">
	// 		{children}
	// 	</div>
	// </section>

		<section className="w-[476px] h-[634px] relative border-2">
			<div className="w-[150px] h-[150px] absolute -right-[76px] -top-[76px] rotate-45 border-b-2 z-10 bg-black" />
			<div className="w-[150px] h-[150px]  absolute -right-[60px] -top-[60px] rotate-45 bg-black -z-0 " />
			<div className="p-4 -z-20">
				{children}
			</div>
			<div className="w-[150px] h-[150px] absolute -left-[76px] -bottom-[76px] rotate-45 border-t-2 z-10 bg-black" />
			<div className="w-[150px] h-[150px]  absolute -left-[60px] -bottom-[60px] rotate-45 bg-black -z-0 " />
		</section>
	);
};

interface Props {
	children?: React.ReactNode;
}
