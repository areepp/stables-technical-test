import { Card } from '@/components/ui/card'
import { format } from 'date-fns'
import { ArrowUpRight, ArrowDownLeft } from 'lucide-react'

const MOCK_TRANSACTIONS = [
  {
    id: 1,
    type: 'send',
    address: '0x742d...8f3a',
    amount: '-1,250.00 USDT',
    createdAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
    status: 'completed',
  },
  {
    id: 2,
    type: 'receive',
    address: '0x9a1b...4c2d',
    amount: '+3,500.00 USDT',
    createdAt: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000).toISOString(),
    status: 'completed',
  },
  {
    id: 3,
    type: 'send',
    address: '0x5e7f...9b8c',
    amount: '-875.50 USDT',
    createdAt: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString(),
    status: 'completed',
  },
  {
    id: 4,
    type: 'receive',
    address: '0x2d4a...6f1e',
    amount: '+2,100.00 USDT',
    createdAt: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString(),
    status: 'completed',
  },
  {
    id: 5,
    type: 'send',
    address: '0x8c3e...1a9b',
    amount: '-500.00 USDT',
    createdAt: new Date(Date.now() - 6 * 24 * 60 * 60 * 1000).toISOString(),
    status: 'pending',
  },
  {
    id: 6,
    type: 'receive',
    address: '0x1f6d...7b3c',
    amount: '+5,000.00 USDT',
    createdAt: new Date(Date.now() - 1.5 * 24 * 60 * 60 * 1000).toISOString(),
    status: 'completed',
  },
  {
    id: 7,
    type: 'send',
    address: '0x4a9b...2c8d',
    amount: '-250.75 USDT',
    createdAt: new Date(Date.now() - 4 * 24 * 60 * 60 * 1000).toISOString(),
    status: 'completed',
  },
  {
    id: 8,
    type: 'receive',
    address: '0xb2e1...d5f6',
    amount: '+100.00 USDT',
    createdAt: new Date(Date.now() - 0.5 * 24 * 60 * 60 * 1000).toISOString(),
    status: 'completed',
  },
  {
    id: 9,
    type: 'send',
    address: '0x6g7h...3i4j',
    amount: '-1,800.00 USDT',
    createdAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(),
    status: 'completed',
  },
  {
    id: 10,
    type: 'receive',
    address: '0xc5k8...l2m1',
    amount: '+4,200.50 USDT',
    createdAt: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString(),
    status: 'completed',
  },
]

export function RecentActivity() {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold text-card-foreground">
          Recent Activity
        </h2>
        <button className="text-sm text-accent hover:text-accent/80">
          View All
        </button>
      </div>

      <div className="space-y-3">
        {MOCK_TRANSACTIONS.map((transaction) => (
          <Card
            key={transaction.id}
            className="p-4 bg-card border-border hover:bg-secondary/50 transition-colors cursor-pointer"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    transaction.type === 'send'
                      ? 'bg-red-100 text-red-600'
                      : 'bg-yellow-200 text-yellow-700'
                  }`}
                >
                  {transaction.type === 'send' ? (
                    <ArrowUpRight className="h-5 w-5" />
                  ) : (
                    <ArrowDownLeft className="h-5 w-5" />
                  )}
                </div>

                <div className="space-y-1">
                  <div className="flex items-center space-x-2">
                    <span className="text-sm font-medium text-card-foreground">
                      {transaction.address}
                    </span>
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {format(new Date(transaction.createdAt), 'MMM dd, yyyy')}
                  </div>
                </div>
              </div>

              <div className="text-right">
                <div
                  className={`font-semibold ${
                    transaction.type === 'send'
                      ? 'text-red-600'
                      : 'text-green-600'
                  }`}
                >
                  {transaction.amount}
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}
