import { LoginForm } from './login-form'

export default function LoginPage() {
  return (
    <div className="min-h-screen flex">
      {/* LEFT SIDE */}
      <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-emerald-400 via-teal-500 to-cyan-600 relative overflow-hidden">
        <div className="relative z-10 flex flex-col justify-between p-12 text-white w-full">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
              <span className="text-emerald-600 font-bold text-lg">$</span>
            </div>
            <span className="text-2xl font-bold">Stables</span>
          </div>

          <div className="space-y-6">
            <div className="space-y-4">
              <h1 className="text-4xl font-bold leading-tight">
                Stable Value,
                <br />
                Unstoppable Growth
              </h1>
              <p className="text-lg text-white/90 max-w-md">
                Your secure gateway to the world of stablecoins. Trade, save,
                and grow with confidence.
              </p>
            </div>
          </div>
        </div>
        {/* BLURRY CIRCLES */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-32 h-32 bg-white rounded-full blur-lg"></div>
          <div className="absolute bottom-32 right-16 w-24 h-24 bg-white rounded-full blur-md"></div>
          <div className="absolute top-1/2 left-1/3 w-16 h-16 bg-white rounded-full blur-md"></div>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-gray-50">
        <LoginForm />
      </div>
    </div>
  )
}
