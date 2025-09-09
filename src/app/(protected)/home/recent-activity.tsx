import { Card } from '@/components/ui/card'
import { cn } from '@/lib/utils'
import { format } from 'date-fns'
import { ArrowDownLeft, ArrowUpRight } from 'lucide-react'

const MOCK_TRANSACTIONS = [
  {
    id: 1,
    type: 'send',
    address: '0x742d...8f3a',
    amount: '-1,250.00 USDC',
    createdAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
    status: 'completed',
  },
  {
    id: 2,
    type: 'receive',
    address: '0x9a1b...4c2d',
    amount: '+3,500.00 USDC',
    createdAt: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000).toISOString(),
    status: 'completed',
  },
  {
    id: 3,
    type: 'send',
    address: '0x5e7f...9b8c',
    amount: '-875.50 USDC',
    createdAt: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString(),
    status: 'completed',
  },
  {
    id: 4,
    type: 'receive',
    address: '0x2d4a...6f1e',
    amount: '+2,100.00 USDC',
    createdAt: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString(),
    status: 'completed',
  },
  {
    id: 5,
    type: 'send',
    address: '0x8c3e...1a9b',
    amount: '-500.00 USDC',
    createdAt: new Date(Date.now() - 6 * 24 * 60 * 60 * 1000).toISOString(),
    status: 'pending',
  },
  {
    id: 6,
    type: 'receive',
    address: '0x1f6d...7b3c',
    amount: '+5,000.00 USDC',
    createdAt: new Date(Date.now() - 1.5 * 24 * 60 * 60 * 1000).toISOString(),
    status: 'completed',
  },
  {
    id: 7,
    type: 'send',
    address: '0x4a9b...2c8d',
    amount: '-250.75 USDC',
    createdAt: new Date(Date.now() - 4 * 24 * 60 * 60 * 1000).toISOString(),
    status: 'completed',
  },
  {
    id: 8,
    type: 'receive',
    address: '0xb2e1...d5f6',
    amount: '+100.00 USDC',
    createdAt: new Date(Date.now() - 0.5 * 24 * 60 * 60 * 1000).toISOString(),
    status: 'completed',
  },
  {
    id: 9,
    type: 'send',
    address: '0x6g7h...3i4j',
    amount: '-1,800.00 USDC',
    createdAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(),
    status: 'completed',
  },
  {
    id: 10,
    type: 'receive',
    address: '0xc5k8...l2m1',
    amount: '+4,200.50 USDC',
    createdAt: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString(),
    status: 'completed',
  },
]

export function RecentActivity() {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-card-foreground font-semibold">Recent Activity</h2>
      </div>

      <Card className="bg-card border-border p-4 shadow-none">
        {MOCK_TRANSACTIONS.map((transaction) => (
          <div className="flex items-center justify-between" key={transaction.id}>
            <div className="flex items-center space-x-3">
              <div
                className={cn(
                  'flex h-10 w-10 items-center justify-center rounded-full',
                  transaction.type === 'send'
                    ? 'bg-red-100 text-red-600'
                    : 'bg-primary text-primary-foreground',
                )}
              >
                {transaction.type === 'send' ? (
                  <ArrowUpRight className="h-5 w-5" />
                ) : (
                  <ArrowDownLeft className="h-5 w-5" />
                )}
              </div>

              <div className="space-y-1">
                <div className="flex items-center space-x-2">
                  <span className="text-card-foreground font-medium">{transaction.address}</span>
                </div>
                <div className="text-muted-foreground text-sm">
                  {format(new Date(transaction.createdAt), 'MMM dd, yyyy')}
                </div>
              </div>
            </div>

            <div className="text-right">
              <div
                className={cn(
                  'font-semibold',
                  transaction.type === 'send' ? 'text-red-600' : 'text-green-600',
                )}
              >
                {transaction.amount}
              </div>
            </div>
          </div>
        ))}
      </Card>
    </div>
  )
}
