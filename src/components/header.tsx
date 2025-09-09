'use client'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { LogOut, User } from 'lucide-react'
import Link from 'next/link'
import { Reveal } from './reveal'
import { Button } from './ui/button'

const Header = () => {
  return (
    <header className="fixed top-0 left-0 z-50 h-16 w-full bg-white/80 backdrop-blur-xl">
      <div className="container mx-auto flex h-full w-full max-w-md items-center justify-between px-6">
        <Reveal>
          <div className="flex items-center space-x-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-900">
              <span className="text-sm font-bold text-white">S</span>
            </div>
            <span className="text-lg font-semibold text-gray-900">Stables</span>
          </div>
        </Reveal>
        <Reveal>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon">
                <User className="h-5 w-5 text-gray-700" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-32" align="center">
              <DropdownMenuItem asChild>
                <Link href="/login" className="w-full">
                  <LogOut className="mr-2 h-4 w-4" />
                  <span className="text-xs font-bold">Log In</span>
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </Reveal>
      </div>
    </header>
  )
}

export default Header
