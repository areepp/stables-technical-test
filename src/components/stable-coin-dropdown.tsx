'use client'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { ChevronDown } from 'lucide-react'
import { Button, type TButtonProps } from './ui/button'

export type TStableCoin = {
  symbol: string
  name: string
  balance: string
  color: string
}

export const STABLE_COINS: TStableCoin[] = [
  {
    symbol: 'USDC',
    name: 'USD Coin',
    balance: '2,847.32',
    color: 'bg-blue-500',
  },
  {
    symbol: 'USDT',
    name: 'Tether',
    balance: '1,234.56',
    color: 'bg-green-500',
  },
  {
    symbol: 'DAI',
    name: 'Dai Stablecoin',
    balance: '567.89',
    color: 'bg-orange-500',
  },
  {
    symbol: 'BUSD',
    name: 'Binance USD',
    balance: '890.12',
    color: 'bg-yellow-500',
  },
]

type TStableCoinDropdownProps = {
  variant?: TButtonProps['variant']
  value: TStableCoin
  onValueChange: (coin: TStableCoin) => void
}

export function StablecoinDropdown({
  value,
  onValueChange,
  variant = 'outline',
}: Readonly<TStableCoinDropdownProps>) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant={variant} size="sm" className="flex items-center font-bold">
          <span>{value.symbol}</span>
          <ChevronDown className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-40">
        {STABLE_COINS.map((coin) => (
          <DropdownMenuItem
            key={coin.symbol}
            onSelect={() => {
              console.log('coin', coin)
              onValueChange(coin)
            }}
          >
            <span>{coin.symbol}</span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
