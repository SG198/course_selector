import React from 'react'

const Button = ({filterItem,edudata}) => {
    return (
        <>
          <div className="courseHeading">
            <div className="list">
                {/* <ul>
                    <li><a href="#" class="active">All</a></li>
                    <li><a href="#">Design</a></li>
                    <li><a href="#">IT & Tech</a></li>
                    <li><a href="#">Business</a></li>
                    <li><a href="#">Marketing</a></li>
                    <li><a href="#">Development</a></li>
                    <li><a href="#">Photography</a></li>
                </ul> */}
                {edudata.map((curElem)=>{
                     return (
                    <button className="btn" onClick={() => filterItem(curElem)}>{curElem}</button>)
                })}
               
               
            </div>
        </div>  
        </>
    )
}

export default Button
