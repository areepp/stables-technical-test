'use client'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { ChevronDown } from 'lucide-react'
import { useState } from 'react'
import { Button } from './ui/button'

const STABLE_COINS = [
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

export function StablecoinDropdown() {
  const [selectedCoin, setSelectedCoin] = useState(STABLE_COINS[0])

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className="flex items-center font-bold">
          <span>{selectedCoin.symbol}</span>
          <ChevronDown className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-40">
        {STABLE_COINS.map((coin) => (
          <DropdownMenuItem key={coin.symbol} onSelect={() => setSelectedCoin(coin)}>
            {/* As requested, only the symbol is shown */}
            <span>{coin.symbol}</span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
