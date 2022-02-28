import React from 'react'

const Course = ({edulist}) => {
    return (
       
    <>
     
        <div className="boxModel">

            {/* Box */}
           { edulist.map((curElem)=>{
                const { id, b_name, category, t_name, image } = curElem;
                return (
                <>
                <div className="box" key={id}>
                <div className="boxcontent">
                    <div className="images">
                        <img src={image} alt="boxImage"/>
                    </div>
                    <div className="myBtn">
                        <button className="btnBox">{b_name}</button>
                    </div>
                    <h4><a href="edu.js">{category}</a></h4>
                    <a href="edu.js">{t_name}</a>
                    <hr/>
                    {/* <div className="another">
                        <div className="first">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                        </div>
                        <div className="second">
                            <i className="fas fa-arrow-right"></i>
                        </div>
                    </div> */}
                </div>
            </div>
            </>
                )
            })}
           
            
      </div>
            
</>
      

    )
}

export default Course
