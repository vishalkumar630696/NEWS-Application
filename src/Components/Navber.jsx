import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useSearchParams } from 'react-router-dom'

export default function Navber() {
let [seach, setSearch] = useState("")

  let[q,setQ] = useState("")
  let[language,setLanguage] =useState("")
  let [searchParams] = useSearchParams()

    let navigate = useNavigate()

   function postSearch(e){
        e.preventDefault()
        navigate(`/?q=${seach}&language=${language}`)
   }

  useEffect(()=>{
    setQ(searchParams.get("q")??"All")
    setLanguage(searchParams.get("language")??"hi")
  },[searchParams])
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-secondary sticky-top">
  <div className="container-fluid">
    <Link className="navbar-brand text-white" to={`/?language=${language}`}>Newsapp</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active text-white" aria-current="page" to={`/?language=${language}`}>Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white" to={`/?q=Politics&language=${language}`}>Politics</Link>
          </li> <li className="nav-item">
          <Link className="nav-link text-white" to={`/?q=Crime&language=${language}`}>Crime</Link>
        </li> <li className="nav-item">
          <Link className="nav-link text-white" to={`/?q=Education&language=${language}`}>Education</Link>
        </li> <li className="nav-item">
          <Link className="nav-link text-white" to={`/?q=Science&language=${language}`}>Science</Link>
        </li> <li className="nav-item">
          <Link className="nav-link text-white" to={`/?q=Technology&language=${language}`}>Technology</Link>
        </li>
         <li className="nav-item">
          <Link className="nav-link text-white" to={`/?q=Sports&language=${language}`}>Sports</Link>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle text-white" href='#' role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Other
          </a>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item " to={`/?q=Entertainment&language=${language}`}>Entertainment</Link></li>
            <li><Link className="dropdown-item " to={`/?q=Economics&language=${language}`}>Economics</Link></li>
            <li><Link className="dropdown-item " to={`/?q=World&language=${language}`}>World</Link></li>
            <li><Link className="dropdown-item " to={`/?q=India&language=${language}`}>India</Link></li>
            <li><Link className="dropdown-item " to={`/?q=videoShort&language=${language}`}>videoshort</Link></li>
          </ul>
        </li>
      <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle text-white" href='#' role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Laungauge
          </a>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item " to={`/?q=${q}&language=hi`}>Hindi</Link></li>
            <li><Link className="dropdown-item " to={`/?q=${q}&language=en`}>English</Link></li>
            <li><Link className="dropdown-item " to={`/?q=${q}&language=fr`}>French</Link></li>
            <li><Link className="dropdown-item " to={`/?q=${q}&language=es`}>Spanish</Link></li>
            <li><Link className="dropdown-item " to={`/?q=${q}&language=de`}>German</Link></li>
          </ul>
        </li>
      </ul>
      <form className="d-flex" role="search" onSubmit={postSearch}>
        <input className="form-control me-2" type="search" name='search' onChange={(e)=>setSearch(e.target.value)} placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-white bg-white" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
    </>
  )
}
