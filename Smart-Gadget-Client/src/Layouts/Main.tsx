import { Outlet } from 'react-router'
import { Footer } from '../Components/Shared/Footer/Footer'
import { Navbar } from '../Components/Shared/Navbar/Navbar'

export const Main = () => {
  return (
    <div>
      {/* Navbar */}
      <Navbar />

      {/* Outlet */}
      <div className="min-h-[calc(100vh-306px)] container px-6 mx-auto">
        <Outlet />
      </div>

      {/* Footer */}
      <Footer />
    </div>
  )
}
