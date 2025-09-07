import Header from '@/components/header'

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      <div className="min-h-screen pt-16 pb-24">{children}</div>
    </>
  )
}

export default Layout
