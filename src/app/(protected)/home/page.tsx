import { Reveal } from '@/components/reveal'
import BalanceAndActions from './balance-and-actions'
import { RecentActivity } from './recent-activity'

export default function HomePage() {
  return (
    <div className="bg-background min-h-screen">
      <div className="mx-auto max-w-lg space-y-16 px-6">
        <Reveal>
          <BalanceAndActions />
        </Reveal>
        <Reveal delay={0.2}>
          <RecentActivity />
        </Reveal>
      </div>
    </div>
  )
}
