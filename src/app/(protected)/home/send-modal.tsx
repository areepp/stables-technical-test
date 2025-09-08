'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { ArrowUpRight, ChevronDown } from 'lucide-react'
import { DialogTrigger } from '@radix-ui/react-dialog'

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

export function SendModal() {
  const [isOpen, setIsOpen] = useState(false)
  const [recipient, setRecipient] = useState('')
  const [amount, setAmount] = useState('')
  const [selectedCoin, setSelectedCoin] = useState(STABLE_COINS[0])

  const handleSend = () => {
    //  just close modal for now
    console.log('Sending', amount, selectedCoin.symbol, 'to', recipient)
    setIsOpen(false)
    setRecipient('')
    setAmount('')
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button size="lg">
          <ArrowUpRight className="h-5 w-5 mr-2" />
          Send
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Send</DialogTitle>
        </DialogHeader>

        <div className="space-y-4">
          <div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="outline"
                  className="w-full justify-between py-8"
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-8 h-8 rounded-full ${selectedCoin.color} flex items-center justify-center text-white text-sm font-bold`}
                    >
                      {selectedCoin.symbol[0]}
                    </div>
                    <div className="text-left">
                      <div className="font-medium text-card-foreground text-sm">
                        {selectedCoin.symbol}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {selectedCoin.name}
                      </div>
                    </div>
                  </div>
                  <ChevronDown className="h-4 w-4 text-muted-foreground" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-full min-w-[var(--radix-dropdown-menu-trigger-width)]">
                {STABLE_COINS.map((coin) => (
                  <DropdownMenuItem
                    key={coin.symbol}
                    onClick={() => setSelectedCoin(coin)}
                    className="flex items-center gap-3 p-3"
                  >
                    <div
                      className={`w-6 h-6 rounded-full ${coin.color} flex items-center justify-center text-white text-xs font-bold`}
                    >
                      {coin.symbol[0]}
                    </div>
                    <div className="flex-1">
                      <div className="font-medium text-sm">{coin.symbol}</div>
                      <div className="text-xs text-muted-foreground">
                        {coin.name}
                      </div>
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {coin.balance}
                    </div>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          <div className="space-y-1">
            <Label
              htmlFor="recipient"
              className="text-sm text-muted-foreground"
            >
              Recipient Address
            </Label>
            <Input
              id="recipient"
              placeholder="8H2uQsm8XJc9vK4L2nP7fR6tE3wY9..."
              value={recipient}
              onChange={(e) => setRecipient(e.target.value)}
            />
          </div>

          <div className="space-y-1">
            <Label htmlFor="amount" className="text-sm text-muted-foreground">
              Amount
            </Label>
            <div className="relative">
              <Input
                id="amount"
                type="number"
                placeholder="0.00"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />
            </div>
            <div className="text-xs text-muted-foreground">
              Balance: {selectedCoin.balance} {selectedCoin.symbol}
            </div>
          </div>

          <Button
            onClick={handleSend}
            disabled={!recipient || !amount || Number.parseFloat(amount) <= 0}
            className="w-full"
          >
            <ArrowUpRight className="h-4 w-4 mr-2" />
            Send {selectedCoin.symbol}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
