import { type ReactNode } from "react";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { Menu } from "lucide-react";

export function Drawer({ children }: { children: ReactNode | ReactNode[] }) {
	return (
		<Sheet>
			<SheetTrigger>
				<Menu />

				<span className="sr-only">Menú</span>
			</SheetTrigger>

			<SheetContent>{children}</SheetContent>
		</Sheet>
	);
}
