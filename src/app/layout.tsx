import { Rubik as FontSans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});
export const metadata = {
  title:
    "Adwokat Marcin Hećman: Specjalista ds. Prawa dla ciebie | Profesjonalna Obrona i Doradztwo Prawne w Całej Polsce",
  description:
    "Marcin Hećman to doświadczony adwokat, którego kancelaria znajduje się w Ożarowie Mazowieckim, ale oferuje swoje usługi na terenie całego kraju, w tym w Warszawie. Specjalizuje się w szerokim zakresie dziedzin prawnych, w tym w prawie karnym, karnoskarbowym, cywilnym, gospodarczym, rodzinno-opiekuńczym, spadkowym, pracy, ubezpieczeń społecznych oraz administracyjnym. Jego zaangażowanie i doświadczenie pozwalają na skuteczne radzenie sobie z trudnymi i złożonymi sprawami prawnymi. Marcin Hećman zaprasza do kontaktu wszystkich, którzy potrzebują profesjonalnej pomocy prawnej, oferując konsultacje, które mogą przynieść realne korzyści dla Twojej sytuacji prawnej.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <body
        className={cn(
          "min-h-screen flex flex-col bg-background antialiased",
          fontSans.variable
        )}
        style={{ fontFamily: "var(--font-sans)" }}
      >
        <Nav />
        <div className="relative">
          <main className="max-w-screen-xl w-full mx-auto flex-grow mb-12 z-10 md:mb-16">
            {children}
          </main>
          <div className="pointer-events-none absolute inset-0 h-full overflow-hidden">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-0 -top-[200px] -z-10 transform-gpu overflow-hidden blur-3xl lg:-top-10"
            >
              <div
                style={{
                  clipPath:
                    "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                }}
                className="relative left-[calc(50%-5rem)] aspect-[1155/678] -translate-x-2/3 rotate-[45deg] lg:rotate-[115deg] bg-gradient-to-tr from-[#08a045] to-[#08a045] opacity-30 lg:left-[calc(50%-30rem)] w-[72.1875rem]"
              ></div>
            </div>
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-0 top-[200px] -z-10 transform-gpu overflow-hidden blur-3xl lg:top-[100vh]"
            >
              <div
                style={{
                  clipPath:
                    "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                }}
                className="relative left-[calc(50%-5rem)] aspect-[1155/678] translate-x-2/3 rotate-[45deg] lg:rotate-[85deg] bg-gradient-to-tr from-[#08a045] to-[#08a045] opacity-30 lg:left-[calc(50%-30rem)] w-[72.1875rem]"
              ></div>
            </div>
          </div>
        </div>
        <Footer />
      </body>
    </html>
  );
}
