import React, { useState } from 'react'
import { CourseContainer, Navbar, NavItem, Underline } from "./Courses.elements"

const CourseList = (props) => {

  const pages = [
    "All",
    "Beginner",
    "Intermediate",
    // "Advanced",
  ]

  const [page, setPage] = useState("All")
  return(
    <div style={{backgroundColor:"#F7F9FF", paddingBottom: "50px", display: "flex", flexDirection: "column",
      padding: "0% 10%"
    }}>
      <Navbar style={{paddingTop: "0px" ,background: "none",color: "white",position: "relative", top: "-38px"}}>
        {
          pages.map((name)=>
            <NavItem onClick={()=>setPage(name)}>
              <div style={{marginBottom:"7px"}}>
                {name}
              </div>
              {page==name && <Underline style={{backgroundColor: "white"}}/>}
            </NavItem>
          )
        }
      </Navbar>
        {props[page.toLowerCase()]}
    </div>
  )
}

export default CourseList
