import { Card } from '@/components/ui/card'
import { ChevronDown } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { SendModal } from './send-modal'
import { ReceiveModal } from './receive-modal'

export default function BalanceAndActions() {
  return (
    <>
      <Card className="p-6 bg-card border-border gap-2">
        <span className="text-sm text-muted-foreground">Balance</span>
        <div className="flex items-center justify-between">
          <div className="text-xl font-bold text-card-foreground">
            11,500.38
          </div>
          <Button
            variant="ghost"
            size="sm"
            className="text-muted-foreground p-0 h-auto"
          >
            USDC
            <ChevronDown className="h-4 w-4 ml-1" />
          </Button>
        </div>
      </Card>
      <div className="grid grid-cols-2 gap-4">
        <SendModal />
        <ReceiveModal />
      </div>
    </>
  )
}
