import BalanceAndActions from './balance-and-actions'
import { RecentActivity } from './recent-activity'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-md mx-auto px-6 space-y-6">
        <BalanceAndActions />
        <RecentActivity />
      </div>
    </div>
  )
}
