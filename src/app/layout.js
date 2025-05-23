import { Bebas_Neue, Inter, Manrope, Poppins } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/context/themeContext";


const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-bebas-neue",
});

const inter = Inter({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-inter",
});
const manrope = Manrope({
  subsets: ["latin"],
  weight: "200",
  variable: "--font-poppins",
});
const poppins = Poppins({
  subsets: ["latin"],
  weight: "200",
  variable: "--font-poppins",
});


export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <ThemeProvider>
      <html lang="en">
      <body
        className={`${bebasNeue.variable} ${inter.variable} ${manrope.variable} ${poppins.variable} antialiased`}
      >
        {children}
      </body>
    </html>
    </ThemeProvider>
  );
}
