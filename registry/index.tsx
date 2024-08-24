import * as React from "react";
import { Registry } from "./schema";



const ui: Registry = {
	marquee: {
		name: "marquee",
		type: "components:ui",
		files: ["registry/components/ui/marquee.tsx"],
	},
};
const example: Registry = {
	"marquee-demo": {
		name: "marquee-demo",
		type: "components:example",
		registryDependencies: ["marquee"],
		files: ["registry/components/example/marquee-demo.tsx"],
		component: React.lazy(
			() => import("@/registry/components/example/marquee-demo")
		),
	},
};
export const registry: Registry = {
  ...ui,
  ...example,
};

const resolvedExamples = Object.entries(example).map(([key, value]) => ({
  ...value,
  component: () => void 0,
}));
const updatedExample: Registry = resolvedExamples.reduce(
  (acc, curr) => ({ ...acc, [curr.name]: curr }),
  {},
);
export const downloadRegistry: Registry = { ...ui, ...updatedExample };

export type ComponentName = keyof (typeof ui & typeof example);
