import { MainNavItem, SidebarNavItem } from "@/types";

interface DocsConfig {
	mainNav: MainNavItem[];
	sidebarNav: SidebarNavItem[];
}

export const docsConfig: DocsConfig = {
	mainNav: [
		{
			title: "Components",
			href: "/components",
		},
		{
			title: "Themes",
			href: "/themes",
		},
		{
			title: "Resources",
			href: "/resources",
			external: false,
		},
	],
	sidebarNav: [
		{
			title: "Getting Started",
			items: [
				{
					title: "Introduction",
					href: "/docs",
					items: [],
				},
				{
					title: "Installation",
					href: "/docs/installation",
					items: [
						{
							title: "React.js",
							href: `/docs/installation/react`,
							items: [],
						},
						{
							title: "Vue.js",
							href: `/docs/installation/vue`,
							items: [],
						},
						{
							title: "Svelte",
							href: `/docs/installation/svelte`,
							items: [],
						},
					],
				},
				{
					title: "CLI",
					href: "/docs/cli",
					items: [],
				},
			],
		},

		{
			title: "Authentication",
			items: [
				{
					title: "Introduction",
					href: "/docs/auth",
					items: [],
				},
				{
					title: "Google 0auth",
					href: `/docs/auth/google`,
					items: [],
					label: "New",
				},
				{
					title: "Credentails",
					href: `/docs/auth/credentails`,
					items: [],
					label: "Comming soon",
					disabled: true,
				},
				{
					title: "Magic links",
					href: `/docs/auth/magiclink`,
					items: [],
					label: "Comming soon",
					disabled: true,
				},
			],
		},
		{
			title: "Components",
			items: [
				{
					title: "Marquee",
					href: `/docs/components/marquee`,
					items: [],
				},
			],
		},

		{
			title: "Buttons",
			items: [
				{
					title: "Shimmer Button",
					href: `/docs/components/shimmer-button`,
					items: [],
				},
			],
		},
	],
};
