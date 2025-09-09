'use client'

import { STABLE_COINS, StablecoinDropdown } from '@/components/stable-coin-dropdown'
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { thousandSeparatorMaskOptions } from '@/lib/maskito'
import { useMaskito } from '@maskito/react'
import { DialogTrigger } from '@radix-ui/react-dialog'
import { ArrowUpRight } from 'lucide-react'
import { useState } from 'react'

export function SendModal() {
  const [isOpen, setIsOpen] = useState(false)
  const [recipient, setRecipient] = useState('')
  const [amount, setAmount] = useState('')
  const [selectedCoin, setSelectedCoin] = useState(STABLE_COINS[0])

  const inputRef = useMaskito({ options: thousandSeparatorMaskOptions })

  const handleSend = () => {
    //  just close modal for now
    console.log('Sending', amount, selectedCoin.symbol, 'to', recipient)
    setIsOpen(false)
    setRecipient('')
    setAmount('')
  }

  const handleOpenChange = (open: boolean) => {
    setIsOpen(open)
    if (!open) {
      setTimeout(() => {
        setRecipient('')
        setAmount('')
        setSelectedCoin(STABLE_COINS[0])
      }, 200)
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>
        <Button size="lg" variant="outline-no-shadow">
          <ArrowUpRight className="mr-2 h-5 w-5" />
          Send
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-xs">
        <DialogHeader>
          <DialogTitle>Send</DialogTitle>
        </DialogHeader>

        <div className="mt-4 space-y-3">
          <Input
            id="recipient"
            placeholder="Recipient wallet address"
            value={recipient}
            onChange={(e) => setRecipient(e.target.value)}
          />

          <div className="mt-6 flex justify-center">
            <StablecoinDropdown
              variant="default"
              value={selectedCoin}
              onValueChange={setSelectedCoin}
            />
          </div>

          <div className="flex flex-col items-center justify-center space-y-1">
            <input
              ref={inputRef}
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="0.00"
              className="w-full border-0 text-center text-3xl font-bold italic [moz-appearance:textfield] focus:outline-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
            />
            <div className="text-muted-foreground text-xs">
              Balance: {selectedCoin.balance} {selectedCoin.symbol}
            </div>
          </div>

          <Button
            onClick={handleSend}
            disabled={!recipient || !amount || Number.parseFloat(amount) <= 0}
            className="mt-4 w-full"
          >
            <ArrowUpRight className="mr-2 h-4 w-4" />
            Send {selectedCoin.symbol}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
