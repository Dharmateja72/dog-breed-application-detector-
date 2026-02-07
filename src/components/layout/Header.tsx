import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, PawPrint, LogOut, User } from "lucide-react";
import Link from "next/link";
import { CartDrawer } from "@/components/marketplace/CartDrawer";
import { useUser } from "@/context/UserContext";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function Header() {
    const { user, logout } = useUser();

    const navLinks = [
        { href: "/marketplace", label: "Marketplace" },
        { href: "/world-breeds", label: "World Map" },
        { href: "/blog", label: "Blog" },
        { href: "/reviews", label: "Reviews" },
        { href: "/faq", label: "FAQ" },
    ];

    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
                <Link href="/" className="flex items-center gap-2">
                    <PawPrint className="h-8 w-8 text-primary" />
                    <span className="text-xl font-bold tracking-tight text-primary">
                        WoofWise
                    </span>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-6">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="text-sm font-medium transition-colors hover:text-primary"
                        >
                            {link.label}
                        </Link>
                    ))}
                    <div className="flex items-center gap-2 ml-4 pl-4 border-l">
                        <CartDrawer />

                        <Link href="/profile" title="My Profile">
                            <Avatar className="h-9 w-9 cursor-pointer hover:ring-2 hover:ring-primary transition-all">
                                <AvatarImage src={user.avatar} alt={user.name} />
                                <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                            </Avatar>
                        </Link>

                        <Button variant="ghost" size="icon" onClick={logout} title="Sign Out">
                            <LogOut className="h-5 w-5 text-muted-foreground hover:text-destructive" />
                        </Button>
                    </div>
                </nav>

                {/* Mobile Navigation */}
                <div className="flex items-center gap-2 md:hidden">
                    <CartDrawer />
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button variant="ghost" size="icon">
                                <Menu className="h-6 w-6" />
                                <span className="sr-only">Toggle menu</span>
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="right">
                            <div className="flex flex-col h-full">
                                <div className="flex items-center gap-2 mb-8">
                                    <PawPrint className="h-6 w-6 text-primary" />
                                    <span className="text-lg font-bold text-primary">WoofWise</span>
                                </div>
                                <nav className="flex flex-col gap-6">
                                    {navLinks.map((link) => (
                                        <Link
                                            key={link.href}
                                            href={link.href}
                                            className="text-lg font-medium transition-colors hover:text-primary"
                                        >
                                            {link.label}
                                        </Link>
                                    ))}
                                    <Link
                                        href="/profile"
                                        className="text-lg font-medium transition-colors hover:text-primary flex items-center gap-2"
                                    >
                                        Profile
                                    </Link>
                                </nav>
                                <div className="mt-auto">
                                    <Button className="w-full" size="lg" variant="destructive" onClick={logout}>
                                        <LogOut className="mr-2 h-4 w-4" /> Sign Out
                                    </Button>
                                </div>
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </header>
    );
}
