"use client";

import AidMethods from "./AidMethods";

export default function Methods() {
	return (
		<>
			<div id="donar" className="md:py-24 md:px-40 px-8 py-12">
				<h2 className="text-4xl md:text-5xl font-bold text-center text-secondary">
					¿Cómo donar?
				</h2>
				<p className="text-center font-extralight text-2xl md:text-3xl my-2">
					Realiza tu donación a través de estós métodos
				</p>
				<div className="grid grid-cols-1 gap-4 md:grid-cols-4 md:gap-10 my-14">
					<AidMethods />
				</div>
			</div>
			
		</>
	);
}
