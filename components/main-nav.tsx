"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ExternalLinkIcon } from "lucide-react";


import { docsConfig } from "@/config/docs";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";


export function MainNav() {
  const pathname = usePathname();

  return (
		<div className="mr-4 hidden md:flex">
			<Link href="/" className="relative mr-6 flex items-center space-x-2">
				{/* <Icons.logo className="size-6" /> */}
				<svg
					className=" size-8"
					viewBox="-20 0 190 190"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<g id="SVGRepo_bgCarrier" strokeWidth={0} />
					<g
						id="SVGRepo_tracerCarrier"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
					<g id="SVGRepo_iconCarrier">
						{" "}
						<path
							fillRule="evenodd"
							clipRule="evenodd"
							d="M91.33 146.9L89.08 145.75C82.15 132.54 74.27 131.31 59.69 146.3L57.49 145.75C50.57 132.54 42.3 132.5 27.71 147.49L20.77 138.49C41.07 111.69 53.6 116.17 60 127.56C75.92 111.69 86.32 117.49 91.9 128.12C112.21 110.01 123.3 121.55 129.24 137.3L120.92 145.75C114 132.54 105.91 131.9 91.33 146.9ZM91.33 108.82L89.08 107.67C82.15 94.4598 74.27 93.2298 59.69 108.22L57.49 107.67C50.57 94.4598 42.3 94.4198 27.71 109.41L20.77 100.41C41.07 73.6098 53.6 78.0898 60 89.4798C75.92 73.6098 86.32 79.4098 91.9 90.0398C112.21 71.9298 123.3 83.4698 129.24 99.2198L120.92 107.67C114 94.4598 105.91 93.8198 91.33 108.82Z"
							fill="#000000"
						/>{" "}
					</g>
				</svg>
				<span className="hidden font-bold md:inline-block">
					{siteConfig.name}
				</span>
				{/* <Badge variant="secondary">Beta</Badge> */}
			</Link>
			<nav className="hidden items-center space-x-6 text-sm font-medium xl:flex">
				{docsConfig.mainNav.map((item) => (
					<Link
						key={item.href}
						href={item.href || ""}
						target={item.external ? "_blank" : undefined}
						className={cn(
							"flex items-center justify-center transition-colors hover:text-foreground/80",
							pathname?.startsWith(item.href!)
								? "text-foreground"
								: "text-foreground/60"
						)}
					>
						{item.title}
						{item.external && <ExternalLinkIcon className="ml-2 size-4" />}
					</Link>
				))}
			</nav>
		</div>
	);
}
