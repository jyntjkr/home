import Link from "next/link";
import Image from "next/image";

const HeroSection = () => {
  const socialLinks = [
    { name: "Email", href: "mailto:jyntjkr@gmail.com" },
    { name: "Twitter", href: "https://x.com/jyntjkr" },
    { name: "GitHub", href: "https://github.com/jyntjkr" },
    { name: "Dribbble", href: "https://dribbble.com/jyntjkr" },
    { name: "LinkedIn", href: "https://www.linkedin.com/in/jayantjakhar/" },
  ];

  return (
    <section className="min-h-dvh bg-cream flex items-center justify-center px-6">
      <div className="max-w-lg w-full">
        {/* Name */}
        <div className="flex items-center gap-x-4">
          <h1 className="font-serif text-5xl md:text-6xl text-foreground tracking-tight">
            Jayant
          </h1>
          <Image
            src="/guy.webp"
            alt="Jayant's profile picture"
            width={80}
            height={64}
            className="w-16 h-12 md:w-20 md:h-16"
          />
        </div>

        {/* Phonetic */}
        <p className="font-serif italic text-gray-500 text-lg mt-4">
          /ˈdʒə.jənt̪ /
        </p>

        <p className=" font-serif mt-12 text-foreground">
        I spent my college years exploring design, development, and product. But education has always been my primary interest. So I have committed to this path.
        </p>
        <p className="font-serif mt-4 text-foreground">
        
        </p>

        {/* Part of speech */}
        <p className="font-serif text-muted-foreground mt-4">
        I’m stepping back to study CS deeply, build strong fundamentals, and earn the right to do meaningful work in this space.
        </p>

        {/* <p className="font-serif mt-4 text-foreground">
          Read more about my principles{" "}
          <Link href="/principles" className="underline decoration-dotted underline-offset-4 text-blue-500 hover:text-black transition-colors">
            here
          </Link>
          .
        </p> */}

        <ul className="mt-8 space-y-2 list-disc list-inside text-blue-500">
          <li>
            <a href="https://rubberducks.vercel.app" className="underline decoration-dotted underline-offset-4 hover:text-black transition-colors">
              Interview Gym
            </a>
          </li>
          <li>
            <a href="https://aftermark.studio" className="underline decoration-dotted underline-offset-4 hover:text-black transition-colors">
              Aftermark Studio
            </a>
          </li>
        </ul>

        {/* See also */}
        <div className="mt-10 flex flex-wrap items-center gap-x-4 text-gray-500">
          
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="underline decoration-dotted underline-offset-4 hover:text-black transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
