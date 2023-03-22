import React from 'react'
import { UserState } from '../../Context/Context'
import ExportToExcel from '../../exportExcel'



const Header = () => {
  const {state: {data}} = UserState();

  return (
    <div>
      <nav className="navbar bg-primary" data-bs-theme="dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">CRUD</a>
        <ExportToExcel jsonData={data} fileName = "book"/>
      </div>
</nav>


    </div>
  )
}

export default Header