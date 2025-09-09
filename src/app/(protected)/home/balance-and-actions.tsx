'use client'

import { STABLE_COINS, StablecoinDropdown } from '@/components/stable-coin-dropdown'
import { Card } from '@/components/ui/card'
import { useState } from 'react'
import { ReceiveModal } from './receive-modal'
import { SendModal } from './send-modal'

export default function BalanceAndActions() {
  const [selectedCoin, setSelectedCoin] = useState(STABLE_COINS[0])

  return (
    <Card className="bg-primary relative gap-1 border-0 p-4 pb-8 shadow-none">
      <span className="text-muted-foreground text-sm">Balance</span>
      <div className="flex items-center justify-between">
        <div className="text-card-foreground text-xl font-bold">
          {selectedCoin.balance} {selectedCoin.symbol}
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
