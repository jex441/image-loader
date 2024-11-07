"use client";

import Image from "next/image";

const cloudinaryLoader = () => {
	const width = 180;
	const quality = 100;
	const params = ["f_auto", "c_limit", `w_${width}`, `q_${quality || "auto"}`];
	return `https://res.cloudinary.com/jeffreywood/image/upload/${params.join(
		","
	)}/v1730744750/Rectangle_247_aet16y.png`;
};

export default function Component() {
	return (
		<Image
			loader={cloudinaryLoader}
			src="/next.svg"
			alt="Next.js logo"
			width={180}
			height={38}
			priority
		/>
	);
}
