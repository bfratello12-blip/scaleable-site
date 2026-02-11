/// <reference types="vite/client" />

declare module "*.png" {
	const src: string;
	export default src;
}

declare global {
	interface Window {
		gtag?: (
			command: "event",
			eventName: string,
			params?: Record<string, unknown>
		) => void;
	}
}
