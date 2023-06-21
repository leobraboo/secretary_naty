"useClient"

import SideBar from '@/components/sideBar'
import CardGeneral from '@/components/cardGeneral'

export default function Home() {
  return (
    <div style={{ display: "flex" }}>
      <SideBar />
      <CardGeneral />
    </div>
  )
}
