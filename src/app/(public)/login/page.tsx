import AtomAnimation from './atom-animation'
import { LoginForm } from './login-form'

export default function LoginPage() {
  return (
    <div className="flex min-h-screen">
      {/* LEFT SIDE */}
      <div className="from-secondary to-primary relative hidden overflow-hidden bg-gradient-to-br lg:flex lg:w-1/2">
        <div className="text-primary-foreground relative z-10 flex w-full flex-col justify-between p-12">
          <div className="flex items-center space-x-2">
            <div className="bg-accent flex h-8 w-8 items-center justify-center rounded-full">
              <span className="text-accent-foreground text-sm font-bold">S</span>
            </div>
            <span className="text-2xl font-bold">Stables</span>
          </div>

          <AtomAnimation />

          <div className="space-y-6">
            <div className="space-y-4">
              <h1 className="text-4xl leading-tight font-bold">
                Stable Value,
                <br />
                Unstoppable Growth
              </h1>
              <p className="text-primary-foreground/80 max-w-md text-lg">
                Your secure gateway to the world of stablecoins. Trade, save, and grow with
                confidence.
              </p>
            </div>
          </div>
        </div>

        {/* BLURRY CIRCLES */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 h-32 w-32 rounded-full bg-white blur-lg"></div>
          <div className="absolute right-16 bottom-32 h-24 w-24 rounded-full bg-white blur-md"></div>
          <div className="absolute top-1/2 left-1/3 h-16 w-16 rounded-full bg-white blur-md"></div>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="flex w-full items-center justify-center bg-gray-50 p-8 lg:w-1/2">
        <LoginForm />
      </div>
    </div>
  )
}
