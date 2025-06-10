import { Mail} from "lucide-react";
const footerLinks = [
    { href: "#menu", label: "Menu" },
    { href: "#events", label: "Events" },
    { href: "#gallery", label: "Gallery" },
    { href: "#", label: "Contact" },
];

export default function Footer() {
    return (
        <section className="py-16">
            <div className="container">
                <div className="flex flex-col md:flex-row items-center md:justify-between gap-4">
                    <div className="">
                        <h1 className="text-accent text-3xl font-bold">
                            The Groove
                        </h1>
                    </div>
                    <div className="">
                        <nav className="flex gap-6 ">
                            {footerLinks.map((link) => (
                                <a
                                    href={link.href}
                                    key={link.label}
                                    className="text-white/50 text-md"
                                >
                                    {" "}
                                    {link.label}{" "}
                                </a>
                            ))}
                        </nav>
                    </div>
                    <div className="flex justify-center gap-6">
                        {/* Email */}
                        <a
                            href="mailto:info@thegroovebar.ca"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-lime-400 transition"
                        >
                            <Mail size={24} />
                        </a>

                        {/* Instagram */}
                        <a
                            href="https://www.instagram.com/thegroovebarto/"
                            target="_blank"
                            aria-label="Instagram"
                            rel="noopener noreferrer"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="text-white hover:text-lime-400"
                                viewBox="0 0 24 24"
                            >
                                <rect
                                    x="2"
                                    y="2"
                                    width="20"
                                    height="20"
                                    rx="5"
                                    ry="5"
                                />
                                <path d="M16 11.37a4 4 0 1 1-4.73-4.73 4 4 0 0 1 4.73 4.73z" />
                                <line x1="17.5" y1="6.5" x2="17.5" y2="6.5" />
                            </svg>
                        </a>
                    </div>
                    <div>
                        <p>
                            Site created and maintained by{" "}
                            <a
                                href="https://portfolio.monilpatel.dev/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="underline text-accent"
                            >
                                Monil Patel
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
