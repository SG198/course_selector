import React,{useState} from 'react'
import Button from './Button'
import Course from './Course'
import Edu from './EduApi'
import "./style.css"

const uniqueList = [
    ...new Set(
      Edu.map((curElem) => {
        return curElem.b_name;
      })
    ),"All"
  ];
  console.log(uniqueList);

const Eduworld = () => {
    const [eduList, seteduList] = useState(Edu)
    const [eduData, seteduData] = useState(uniqueList)


    const filterItem = (b_name) => {
        if (b_name === "All") {
            seteduList(Edu);
          return;
        }
    
        const updatedList = Edu.filter((curElem) => {
          return curElem.b_name === b_name;
        });
    
        seteduList(updatedList);
      };
    
    return (
        <>
            {/* <span className="heading">Select Your Course</span> */}
            <Button filterItem={filterItem} edudata={eduData}/>
            <Course edulist={eduList}/>
        </>
    )
}

export default Eduworld
