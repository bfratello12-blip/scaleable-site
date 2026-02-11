import { createContext, useCallback, useContext, useMemo, useState, type ReactNode } from "react";
import { DemoVideoModal } from "./DemoVideoModal";

type DemoModalContextValue = {
	openDemo: () => void;
};

const DemoModalContext = createContext<DemoModalContextValue | undefined>(undefined);

export function DemoModalProvider({ children }: { children: ReactNode }) {
	const [isOpen, setIsOpen] = useState(false);

	const openDemo = useCallback(() => {
		setIsOpen(true);
	}, []);

	const closeDemo = useCallback(() => {
		setIsOpen(false);
	}, []);

	const value = useMemo(() => ({ openDemo }), [openDemo]);

	return (
		<DemoModalContext.Provider value={value}>
			{children}
			<DemoVideoModal open={isOpen} onClose={closeDemo} />
		</DemoModalContext.Provider>
	);
}

export function useDemoModal() {
	const context = useContext(DemoModalContext);
	if (!context) {
		throw new Error("useDemoModal must be used within DemoModalProvider");
	}
	return context;
}
