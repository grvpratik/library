import SiteFooter from '@/components/site-footer';
import SiteHeader from '@/components/site-header'
import React from 'react'
interface LandingLayoutProps {
	children: React.ReactNode;
}
import "@/styles/globals.css";
import "@/styles/mdx.css";
const LandingLayout = ({ children }: LandingLayoutProps) => {
	return (
		<>
			<SiteHeader />
            <main className="flex-1">{children}</main>
            <SiteFooter/>
		</>
	);
};

export default LandingLayout