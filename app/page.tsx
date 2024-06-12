import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/ui/FloatingNav";

import Grid from "@/components/Grid";
import RecentProjects from "@/components/RecentProjects";
import { navItems } from "@/data";
import Clients from "@/components/Clients";

export default function Home() {
	return (
		<main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5 ">
			<div className="max-w-7xl w-full">
				<FloatingNav navItems={navItems} />
				<Hero />
				<Grid />
				<RecentProjects />
				<Clients />
			</div>
		</main>
	);
}

/*
SENTRY_AUTH_TOKEN =
	sntrys_eyJpYXQiOjE3MTgyMTI1MTQuMDkzODUxLCJ1cmwiOiJodHRwczovL3NlbnRyeS5pbyIsInJlZ2lvbl91cmwiOiJodHRwczovL2RlLnNlbnRyeS5pbyIsIm9yZyI6InJ1eGNvZGVzIn0 =
		_bYaSOOGsxXnd + sVVIWGSU8lQsNRpUGXpT0z9Iv87T7s;


*/
