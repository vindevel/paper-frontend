"use client";

import { useState } from "react"
import { Menu, X } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const navItems = [
    { href: "/", label: "메인화면" },
    { href: "/about", label: "소개" },
    { href: "/usage", label: "사용방법" },
    { href: "/try", label: "체험하기" },
  ]

  const isActive = (href: string) => pathname === href

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <img
              src="/logo.png"        // public/logo.png 경로에 이미지가 있다고 가정
              alt="논문한입 로고"
              className="w-18 h-18 object-contain"
            />
            <span className="font-medium text-xl text-[#030303]hidden sm:inline">논문한입</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`transition-all pb-1 ${
                  isActive(item.href)
                    ? "text-yellow-600 border-b-2"
                    : "text-gray-700 hover:text-yellow-600 border-b-2 border-transparent"
                }`}
                style={isActive(item.href) ? { borderBottomColor: "#FDC324" } : {}}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`block px-4 py-2 rounded transition-all ${
                  isActive(item.href)
                    ? "text-yellow-600 bg-yellow-50"
                    : "text-gray-700 hover:text-yellow-600 hover:bg-gray-50"
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}
