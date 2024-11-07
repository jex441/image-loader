import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	/* config options here */
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "vastphotos.com",
				port: "",
				pathname: "/files/*",
			},
		],
	},
};

export default nextConfig;
