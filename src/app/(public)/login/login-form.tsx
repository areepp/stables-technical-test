'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Separator } from '@/components/ui/separator'
import { Eye, EyeOff } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

export function LoginForm() {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <div className="w-full max-w-md">
      <div className="text-center">
        <h1 className="text-2xl font-bold text-gray-900">Log in to Stables</h1>
      </div>

      <div className="space-y-6">
        <form className="mt-8 space-y-4">
          <div className="space-y-2">
            <Input
              id="email"
              type="email"
              placeholder="Enter your email"
              className="border-gray-200 focus:border-emerald-500 focus:ring-emerald-500"
            />
          </div>
          <div className="space-y-2">
            <div className="relative">
              <Input
                id="password"
                type={showPassword ? 'text' : 'password'}
                placeholder="Enter your password"
                className="border-gray-200 pr-10 focus:border-emerald-500 focus:ring-emerald-500"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute top-1/2 right-3 -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
              </button>
            </div>
          </div>
          <Button type="submit" className="w-full" asChild>
            <Link href="/home">Log in</Link>
          </Button>
        </form>
        <div className="relative">
          <Separator />
          <span className="text-muted-foreground absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gray-50 px-3 text-sm">
            Or continue with
          </span>
        </div>
        <Button variant="outline" className="w-full">
          <Image src="/svg/metamask-icon-fox.svg" alt="Metamask" width={16} height={16} />
          Metamask
        </Button>
      </div>
    </div>
  )
}
