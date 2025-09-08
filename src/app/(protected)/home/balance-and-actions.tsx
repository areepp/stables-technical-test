import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { ChevronDown } from 'lucide-react'
import { ReceiveModal } from './receive-modal'
import { SendModal } from './send-modal'

export default function BalanceAndActions() {
  return (
    <>
      <Card className="bg-card border-border gap-2 p-6">
        <span className="text-muted-foreground text-sm">Balance</span>
        <div className="flex items-center justify-between">
          <div className="text-card-foreground text-xl font-bold">11,500.38</div>
          <Button variant="ghost" size="sm" className="text-muted-foreground h-auto p-0">
            USDC
            <ChevronDown className="ml-1 h-4 w-4" />
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
