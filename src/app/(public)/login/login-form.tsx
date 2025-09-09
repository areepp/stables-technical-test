'use client'

import { Button } from '@/components/ui/button'
import { Input, PasswordInput } from '@/components/ui/input'
import { Separator } from '@/components/ui/separator'
import Image from 'next/image'
import Link from 'next/link'

export function LoginForm() {
  return (
    <div className="w-full max-w-md">
      <div className="text-center">
        <h1 className="text-2xl font-bold text-gray-900">Log in to Stables</h1>
      </div>

      <div className="space-y-6">
        <form className="mt-8 space-y-4">
          <Input
            id="email"
            type="email"
            placeholder="Enter your email"
            className="border-gray-200 focus:border-emerald-500 focus:ring-emerald-500"
          />
          <PasswordInput id="password" placeholder="Enter your password" />
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
