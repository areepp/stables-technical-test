import { Reveal } from './reveal'

const Header = () => {
  return (
    <header className="fixed top-0 left-0 z-50 h-16 w-full bg-white/80 backdrop-blur-xl">
      <div className="container mx-auto flex h-full w-full max-w-md items-center justify-between px-6">
        <Reveal>
          <div className="flex items-center space-x-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-900">
              <span className="text-sm font-bold text-white">S</span>
            </div>
            <span className="text-lg font-semibold text-gray-900">Stables</span>
          </div>
        </Reveal>
      </div>
    </header>
  )
}

export default Header
