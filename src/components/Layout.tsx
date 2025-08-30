"use client";

import { useState } from "react";
import { Navbar } from "~/components/Navbar";
import { Footer } from "~/components/Footer";
import { Button } from "~/components/ui/button";
import { Menu, X } from "lucide-react";
import { useLanguage } from "~/contexts/LanguageContext";
import Link from "next/link";

interface LayoutProps {
  children: React.ReactNode;
}

const navItems = [
  { href: "/about", label: "about" },
  { href: "/experience", label: "experience" },
  { href: "/education", label: "education" },
  { href: "/projects", label: "projects" },
  { href: "/contact", label: "contact" },
];

export function Layout({ children }: LayoutProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { translations } = useLanguage();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <Navbar />
      
      {/* Main Content */}
      <main className="flex-1 w-full md:pt-14 overflow-auto">
        {children}
      </main>
      
      {/* Footer */}
      <Footer />
      
      {/* Mobile Floating Menu Button */}
      <div className="md:hidden fixed bottom-6 right-6 z-50">
        <Button
          size="icon"
          className="h-14 w-14 rounded-full shadow-lg"
          onClick={toggleMobileMenu}
        >
          {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
      </div>
      
      {/* Mobile Sliding Menu */}
      {isMobileMenuOpen && (
        <>
          {/* Backdrop */}
          <div 
            className="md:hidden fixed inset-0 bg-black/50 z-40"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          
          {/* Sliding Menu */}
          <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-background border-t border-border rounded-t-2xl shadow-xl animate-in slide-in-from-bottom duration-300">
            <div className="p-6 pb-8">
              <div className="flex justify-center mb-6">
                <div className="w-12 h-1 bg-muted-foreground/30 rounded-full" />
              </div>
              
              <nav className="space-y-1">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="flex items-center px-4 py-4 text-lg font-medium rounded-lg hover:bg-muted transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {translations.navbar[item.label as keyof typeof translations.navbar]}
                  </Link>
                ))}
              </nav>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
