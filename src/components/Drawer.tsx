import { type ReactNode } from "react";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { Menu } from "lucide-react";
import { Button } from "./ui/button";

export function Drawer({ children }: { children: ReactNode | ReactNode[] }) {
	return (
		<Sheet>
			<SheetTrigger asChild>
				<Button variant="ghost" size="icon">
					<Menu className="h-4 w-4" />

					<span className="sr-only">Menú</span>
				</Button>
			</SheetTrigger>

			<SheetContent>{children}</SheetContent>
		</Sheet>
	);
}
