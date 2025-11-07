
import Link from "next/link";
import { Logo } from "../navbar/logo";

export function Footer() {
    return (
        <footer className="bg-gray-900 text-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="flex flex-col lg:flex-row justify-between items-start gap-8">
                    <div className="lg:max-w-sm">
                        <Logo href="/" size="md" className="text-white" />
                        <p className="mt-4 text-gray-300 text-sm leading-relaxed">
                            Empowering communities through transparent, decentralized crowdfunding.
                            Every donation makes a direct impact on desperate causes worldwide.
                        </p>
                        <div className="flex space-x-4 mt-6">
                            <SocialLink href="#" label="Twitter">
                                <TwitterIcon />
                            </SocialLink>
                            <SocialLink href="#" label="Facebook">
                                <FacebookIcon />
                            </SocialLink>
                            <SocialLink href="#" label="LinkedIn">
                                <LinkedInIcon />
                            </SocialLink>
                            <SocialLink href="#" label="Instagram">
                                <InstagramIcon />
                            </SocialLink>
                        </div>
                    </div>

                    <div className="flex flex-col flex-row gap-12 lg:gap-16">
                        <div>
                            <h3 className="text-lg font-semibold mb-4">Company</h3>
                            <ul className="space-y-3">
                                <FooterLink href="/about" label="About Us" />
                                <FooterLink href="/team" label="Our Team" />
                                <FooterLink href="/careers" label="Careers" />
                                <FooterLink href="/press" label="Press" />
                                <FooterLink href="/contact" label="Contact" />
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-lg font-semibold mb-4">Support</h3>
                            <ul className="space-y-3">
                                <FooterLink href="/help-center" label="Help Center" />
                                <FooterLink href="/faq" label="FAQ" />
                                <FooterLink href="/community" label="Community" />
                                <FooterLink href="/terms" label="Terms of Service" />
                                <FooterLink href="/privacy" label="Privacy Policy" />
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-gray-400 text-sm">
                        © {new Date().getFullYear()} CrowdfundNative. All rights reserved.
                    </p>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <Link href="/sitemap" className="text-gray-400 hover:text-white text-sm transition-colors">
                            Sitemap
                        </Link>
                        <Link href="/accessibility" className="text-gray-400 hover:text-white text-sm transition-colors">
                            Accessibility
                        </Link>
                        <Link href="/cookies" className="text-gray-400 hover:text-white text-sm transition-colors">
                            Cookie Policy
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}

function FooterLink({ href, label }: { href: string; label: string }) {
    return (
        <li>
            <Link
                href={href}
                className="text-gray-300 hover:text-white transition-colors text-sm"
            >
                {label}
            </Link>
        </li>
    );
}


function SocialLink({
    href,
    label,
    children
}: {
    href: string;
    label: string;
    children: React.ReactNode;
}) {
    return (
        <Link
            href={href}
            className="text-gray-400 hover:text-white transition-colors"
            aria-label={label}
        >
            {children}
        </Link>
    );
}

function TwitterIcon() {
    return (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
        </svg>
    );
}

function FacebookIcon() {
    return (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
        </svg>
    );
}

function LinkedInIcon() {
    return (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
        </svg>
    );
}

function InstagramIcon() {
    return (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path fillRule="evenodd" d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987c6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.611-3.189-1.553v3.188c0 .854-.692 1.547-1.547 1.547s-1.547-.693-1.547-1.547v-3.188c-.741.942-1.892 1.553-3.189 1.553-2.095 0-3.794-1.699-3.794-3.794s1.699-3.794 3.794-3.794c1.297 0 2.448.611 3.189 1.553V6.547C5.713 5.693 6.405 5 7.259 5s1.547.693 1.547 1.547v3.188c.741-.942 1.892-1.553 3.189-1.553c2.095 0 3.794 1.699 3.794 3.794s-1.699 3.794-3.794 3.794z" clipRule="evenodd" />
        </svg>
    );
}