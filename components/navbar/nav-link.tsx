import Link from "next/link";
import { cn } from "@/lib/utils";

interface NavLinkProps {
    href: string;
    children: React.ReactNode;
    className?: string;
    onClick?: () => void;
    variant?: "desktop" | "mobile";
}

export function NavLink({
    href,
    children,
    className,
    onClick,
    variant = "desktop"
}: NavLinkProps) {
    const baseStyles = "transition-colors text-sm font-medium";

    const variants = {
        desktop: "text-white/90 hover:text-white relative group",
        mobile: "text-white/90 hover:text-white py-2 px-2 rounded-lg hover:bg-white/5 block"
    };

    if (variant === "desktop") {
        return (
            <Link href={href} className={cn(baseStyles, variants.desktop, className)} onClick={onClick}>
                {children}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all group-hover:w-full" />
            </Link>
        );
    }

    return (
        <Link href={href} className={cn(baseStyles, variants.mobile, className)} onClick={onClick}>
            {children}
        </Link>
    );
}