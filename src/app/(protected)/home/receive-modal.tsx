'use client'

import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import useCopyToClipboard from '@/hooks/use-copy-to-clipboard'
import { MOCK_WALLET_ADDRESS } from '@/lib/constants'
import { ArrowDownLeft, Check, Copy } from 'lucide-react'
import { useState } from 'react'
import QRCode from 'react-qr-code'

export function ReceiveModal() {
  const [isOpen, setIsOpen] = useState(false)

  const { isCopied, copyToClipboard } = useCopyToClipboard()

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger>
        <Button size="lg" variant="outline-no-shadow" className="w-full">
          <ArrowDownLeft className="mr-2 h-5 w-5" />
          Receive
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-xs">
        <DialogHeader>
          <DialogTitle>Receive</DialogTitle>
        </DialogHeader>

        <div className="flex flex-col items-center space-y-6 py-4">
          <div className="bg-muted border-border flex h-32 w-32 items-center justify-center rounded-lg border-2 border-dashed">
            <QRCode
              value={MOCK_WALLET_ADDRESS}
              style={{ height: 'auto', maxWidth: '100%', width: '100%' }}
            />
          </div>

          <div className="w-full space-y-2">
            <div className="bg-muted flex items-center space-x-2 rounded-lg p-3">
              <code className="flex-1 font-mono text-sm break-all">{MOCK_WALLET_ADDRESS}</code>
              <Button
                size="sm"
                variant="ghost"
                onClick={() => copyToClipboard(MOCK_WALLET_ADDRESS)}
                className="shrink-0"
              >
                {isCopied ? (
                  <Check className="h-4 w-4 text-green-500" />
                ) : (
                  <Copy className="h-4 w-4" />
                )}
              </Button>
            </div>
          </div>

          <p className="text-muted-foreground max-w-sm text-center text-xs">
            Share this wallet address or QR code to receive payments.
          </p>
        </div>
      </DialogContent>
    </Dialog>
  )
}
