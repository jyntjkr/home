import Link from "next/link";

const AboutPage = () => {
  const quotes = [
    "Less is more.",
    "Discipline is the highest form of self-respect.",
    "The true aim of education is transformation, not accumulation.",
    "Just because something works, doesn't mean it can't be improved.",
    "No amount of training can substitute for having the right values and the courage to act on them.",
    "My need to show what I can do is keeping me from finding out what other people can do and what we can do together.",
    "A man is likely to mind his own business when it is worth minding. When it is not, he takes his mind off his own meaningless affairs by minding other people's business. This minding of other people's business expresses itself in gossip, snooping and meddling, and also in feverish interest in communal, national and racial affairs. In running away from ourselves, we either fall on our neighbor's shoulder or fly at his throat.",
  ];

  return (
    <main className="min-h-screen bg-cream flex justify-center px-6 py-16">
      <div className="max-w-lg w-full">
        <Link href="/" className="text-gray-500 hover:text-black transition-colors">
          &larr; Back to home
        </Link>

        <h1 className="text-4xl mt-8 font-bold">My Guiding Principles</h1>
    
        <div className="mt-16 space-y-8">
          {quotes.map((quote, index) => (
            <blockquote key={index} className="border-l-4 border-gray-300 pl-4">
              <p className="font-serif italic text-lg text-gray-700">
                {quote}
              </p>
            </blockquote>
          ))}
        </div>

        <p className="mt-16 text-sm text-gray-400">
          Last updated: December 2025.
        </p>
      </div>
    </main>
  );
};

export default AboutPage;