import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";

const footerLinks = [{ title: "LinkedIn", href: "" }];

export const Footer = () => {
  return (
    <footer className="relative z-0 overflow-x-clip">
      <div className="absolute h-[400px] w-[1600px] bottom-0 left-1/2 -translate-x-1/2 bg-emerald-300/30 [mask-image:radial-gradient(50%_50%_at_bottom_center,black,transparent)] -z-10 pointer-events-none" />
      <div className="container">
        <div className="border-t border-white/15 py-6 text-sm flex flex-col md:flex-row md:justify-between items-center gap-8 z-10">
          <div className="text-white/40">&copy; 2025. Adrian Prisacaru</div>
          <nav className="flex flex-col items-center gap-8 md:flex-row">
            {footerLinks.map((footerLink) => (
              <a
                href="https://www.linkedin.com/in/adrian-prisacaru-a9a45815b/"
                key={footerLink.title}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5"
              >
                <span className="font-semibold">{footerLink.title}</span>
                <ArrowUpRightIcon className="size-4" />
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
};
