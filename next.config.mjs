import { createContentlayerPlugin } from "next-contentlayer";

/** @type {import('next').NextConfig} */
const nextConfig = {
	output: process.env.NODE_ENV === "production" ? "standalone" : undefined,
	reactStrictMode: true,
	swcMinify: true,
	experimental: {
		optimizeCss: true,
		
	},
};

const withContentlayer = createContentlayerPlugin({
	// Additional Contentlayer config options
});

export default withContentlayer(nextConfig);



