const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full bg-white/80 h-16 backdrop-blur-xl z-50">
      <div className="w-full h-full container mx-auto max-w-md flex items-center justify-between px-6">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-gray-900 rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-sm">S</span>
          </div>
          <span className="font-semibold text-lg text-gray-900">Stables</span>
        </div>
      </div>
    </header>
  )
}

export default Header
