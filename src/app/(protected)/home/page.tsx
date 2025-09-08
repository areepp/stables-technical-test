import BalanceAndActions from './balance-and-actions'
import { RecentActivity } from './recent-activity'

export default function HomePage() {
  return (
    <div className="bg-background min-h-screen">
      <div className="mx-auto max-w-md space-y-16 px-6">
        <BalanceAndActions />
        <RecentActivity />
      </div>
    </div>
  )
}
