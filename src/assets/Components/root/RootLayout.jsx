import Navtop from '../Navtop'
import Footerbottom from '../Footerbottom'
import { Outlet } from 'react-router-dom'

const RootLayout = () => {
  return (
   <>
    <Navtop/>
    <Outlet/>
    <Footerbottom/>
   </>
  )
}

export default RootLayout