import { cn } from '@/lib/utils';
import { DiscIcon } from 'lucide-react';
import Link from 'next/link';
import React from 'react'
import { MainNav } from './main-nav';

const SiteHeader = () => {
  return (
		<header
			className={cn(
				"supports-backdrop-blur:bg-background/90 sticky top-0 z-40 w-full bg-background/40 backdrop-blur-lg"
			)}
		>
			<div className="container flex h-16 items-center">
				 <MainNav />
			{/*	<MobileNav /> */}
				<div className="flex flex-1 items-center justify-between gap-2 md:justify-end">
					

					<div className="w-full flex-1 md:w-auto md:flex-none">
						{/* <CommandMenu /> */}
					</div>
					<nav className="flex items-center gap-1">
						<Link
							href=""
							target="_blank"
							rel="noreferrer"
						>
							<div
								className={cn(
								
									"w-9 px-0"
								)}
							>
								<DiscIcon className="size-4" />
								<span className="sr-only">Discord</span>
							</div>
						</Link>
						<Link
							href=""
							target="_blank"
							rel="noreferrer"
						>
							<div
								className={cn(
									
									"w-9 px-0"
								)}
							>
								{/* <Icons.gitHub className="size-4" /> */}g
								<span className="sr-only">GitHub</span>
							</div>
						</Link>
						<Link
							href=""
							target="_blank"
							rel="noreferrer"
						>
							<div
								className={cn(
									
									"w-9 px-0"
								)}
							>
								{/* <Icons.twitter className="size-4 fill-current" /> */}t
								<span className="sr-only">Twitter</span>
							</div>
						</Link>
						{/* <ModeToggle /> */}
					</nav>
				</div>
			</div>
			<hr className="m-0 h-px w-full border-none bg-gradient-to-r from-neutral-200/0 via-neutral-200/30 to-neutral-200/0" />
		</header>
	);
}

export default SiteHeader