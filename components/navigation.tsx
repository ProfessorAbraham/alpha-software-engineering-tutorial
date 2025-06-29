"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Menu, X, ChevronDown, BookOpen } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

const navItems = [
  { name: "Home", href: "/" },
  {
    name: "Programs",
    href: "/programs",
    submenu: [
      { name: "Data Science Package", href: "/programs/data-science" },
      { name: "AI Package", href: "/programs/artificial-intelligence" },
      { name: "Premium Bundle", href: "/programs/premium-bundle" },
    ],
  },
  { name: "About", href: "/about" },
  { name: "Success Stories", href: "/testimonials" },
  { name: "Contact", href: "/contact" },
]

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
              <BookOpen className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              ASET
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <div key={item.name} className="relative group">
                {item.submenu ? (
                  <div
                    className="flex items-center cursor-pointer"
                    onMouseEnter={() => setActiveSubmenu(item.name)}
                    onMouseLeave={() => setActiveSubmenu(null)}
                  >
                    <span
                      className={`font-medium transition-colors ${
                        pathname.startsWith(item.href) ? "text-blue-600" : "text-gray-700 hover:text-blue-600"
                      }`}
                    >
                      {item.name}
                    </span>
                    <ChevronDown className="w-4 h-4 ml-1 text-gray-500" />

                    <AnimatePresence>
                      {activeSubmenu === item.name && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-xl border border-gray-100 py-2"
                        >
                          {item.submenu.map((subItem) => (
                            <Link
                              key={subItem.name}
                              href={subItem.href}
                              className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className={`font-medium transition-colors ${
                      pathname === item.href ? "text-blue-600" : "text-gray-700 hover:text-blue-600"
                    }`}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link href="/contact">
              <Button
                variant="outline"
                className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white bg-transparent"
              >
                Talk to Support
              </Button>
            </Link>
            <Link href="/enroll">
              <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white">
                Enroll Now
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white border-t border-gray-100"
            >
              <div className="py-4 space-y-2">
                {navItems.map((item) => (
                  <div key={item.name}>
                    {item.submenu ? (
                      <div>
                        <button
                          onClick={() => setActiveSubmenu(activeSubmenu === item.name ? null : item.name)}
                          className="flex items-center justify-between w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-50"
                        >
                          {item.name}
                          <ChevronDown
                            className={`w-4 h-4 transition-transform ${
                              activeSubmenu === item.name ? "rotate-180" : ""
                            }`}
                          />
                        </button>
                        <AnimatePresence>
                          {activeSubmenu === item.name && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              className="bg-gray-50"
                            >
                              {item.submenu.map((subItem) => (
                                <Link
                                  key={subItem.name}
                                  href={subItem.href}
                                  className="block px-8 py-2 text-gray-600 hover:text-blue-600"
                                  onClick={() => setIsOpen(false)}
                                >
                                  {subItem.name}
                                </Link>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <Link
                        href={item.href}
                        className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-blue-600"
                        onClick={() => setIsOpen(false)}
                      >
                        {item.name}
                      </Link>
                    )}
                  </div>
                ))}
                <div className="px-4 py-4 space-y-2 border-t border-gray-100">
                  <Link href="/contact" onClick={() => setIsOpen(false)}>
                    <Button variant="outline" className="w-full border-blue-600 text-blue-600 bg-transparent">
                      Talk to Support
                    </Button>
                  </Link>
                  <Link href="/enroll" onClick={() => setIsOpen(false)}>
                    <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                      Enroll Now
                    </Button>
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  )
}
