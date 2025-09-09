'use client'

import { STABLE_COINS, StablecoinDropdown } from '@/components/stable-coin-dropdown'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Eye, EyeOff } from 'lucide-react'
import { useState } from 'react'
import { ReceiveModal } from './receive-modal'
import { SendModal } from './send-modal'

export default function BalanceAndActions() {
  const [selectedCoin, setSelectedCoin] = useState(STABLE_COINS[0])
  const [showBalance, setShowBalance] = useState(true)

  return (
    <Card className="bg-primary relative gap-1 border-0 p-4 pb-10 shadow-none">
      <div className="flex items-center">
        <span className="text-muted-foreground">Balance</span>
        <Button
          onClick={() => setShowBalance(!showBalance)}
          variant="ghost"
          size="icon"
          className="hover:bg-transparent"
        >
          {showBalance ? (
            <EyeOff className="text-muted-foreground h-4 w-4 scale-90" />
          ) : (
            <Eye className="text-muted-foreground h-4 w-4 scale-90" />
          )}
        </Button>
      </div>
      <div className="flex items-center justify-between">
        <div className="text-card-foreground text-2xl font-bold">
          {showBalance ? selectedCoin.balance : '*****'} {selectedCoin.symbol}
        </div>
        <StablecoinDropdown value={selectedCoin} onValueChange={setSelectedCoin} />
      </div>
      <div className="absolute bottom-0 left-0 grid w-full translate-y-1/2 grid-cols-2 gap-4 px-6">
        <ReceiveModal />
        <SendModal />
      </div>
    </Card>
  )
}
