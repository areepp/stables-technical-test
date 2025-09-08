'use client'

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Copy, Check, ArrowDownLeft } from 'lucide-react'
import { useState } from 'react'
import QRCode from 'react-qr-code'
import { MOCK_WALLET_ADDRESS } from '@/lib/constants'
import useCopyToClipboard from '@/hooks/use-copy-to-clipboard'

export function ReceiveModal() {
  const [isOpen, setIsOpen] = useState(false)

  const { isCopied, copyToClipboard } = useCopyToClipboard()

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger>
        <Button size="lg" variant="outline" className="w-full">
          <ArrowDownLeft className="h-5 w-5 mr-2" />
          Receive
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-center text-xl font-semibold">
            Receive
          </DialogTitle>
        </DialogHeader>

        <div className="flex flex-col items-center space-y-6 py-4">
          <div className="w-48 h-48 bg-muted rounded-lg flex items-center justify-center border-2 border-dashed border-border">
            <QRCode
              value={MOCK_WALLET_ADDRESS}
              style={{ height: 'auto', maxWidth: '100%', width: '100%' }}
            />
          </div>

          <div className="w-full space-y-2">
            <div className="flex items-center space-x-2 p-3 bg-muted rounded-lg">
              <code className="flex-1 text-sm font-mono break-all">
                {MOCK_WALLET_ADDRESS}
              </code>
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

          <p className="text-xs text-muted-foreground text-center max-w-sm">
            Share this wallet address or QR code to receive payments.
          </p>
        </div>
      </DialogContent>
    </Dialog>
  )
}
