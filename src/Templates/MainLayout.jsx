import { Outlet } from "react-router-dom"
import MainNavigation from "../components/MainNavigation"

function MainLayout() {
  return (    
    <>
      <MainNavigation />
      <main className="container px-4 mx-auto mb-16">            
            <Outlet />
      </main>
    </>
  )
}
export default MainLayout