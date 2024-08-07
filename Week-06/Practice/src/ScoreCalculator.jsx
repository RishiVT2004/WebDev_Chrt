import React, { useEffect, useMemo, useState } from "react";

//create a dynamic website , taking the avg of marks in 3 subjects and then calc the grade obtained by the student 
function App() {
  const [subject1, setSubject1] = useState({});
  const [subject2, setSubject2] = useState({});
  const [subject3, setSubject3] = useState({});


  useEffect(() => {
    setTimeout(() => {
      setSubject1({ marks: Math.random() * 100, attendence: Math.random() * 100 })
    }, 2500);
  }, []);


  useEffect(() => {
    setTimeout(() => {
      setSubject2({ marks: Math.random() * 100, attendence: Math.random() * 100 })
    }, 2500);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setSubject3({ marks: Math.random() * 100, attendence: Math.random() * 100 })
    }, 2500);
  }, []);

  const Attendence = useMemo(() => {
    return (subject1.attendence + subject2.attendence + subject3.attendence)/3;
  }, [subject1.attendence ,subject2.attendence , subject3.attendence]);

  const Marks = useMemo(() => {
    let netMarks = (subject1.marks + subject2.marks + subject3.marks) / 3;
    return netMarks;
  }, [subject1.marks, subject2.marks, subject3.marks])

  let Grade = '';

  if (Marks < 50.00){
    Grade = 'F'
  }else if(Marks >= 50.00 && Marks < 60.00){
    Grade = 'D';
  }else if(Marks >= 60.00 && Marks < 70.00){
    Grade = 'C';
  }else if(Marks >= 70.00 && Marks < 80.00){
    Grade = 'B';
  }else if(Marks >= 80.00 && Marks < 90.00){
    Grade = 'A';
  }else if(Marks >= 90.00){
    Grade = 'O';
  }

  return(
    <div>

      <div>
       <h3> Marks in Subject 1 -: <b>{subject1.marks}</b></h3>
       <h3> Marks in Subject 2 -: <b>{subject2.marks}</b></h3>
       <h3> Marks in Subject 1 -: <b>{subject3.marks}</b></h3>
      </div><br />


    <div style={{
      backgroundColor: "purple",
      border : "5px solid yellow",
      color : "aqua",
      padding : "8px"
    }}>
        <h2> Overall Atendence -: <b>{Attendence}</b></h2>
        <h2> Overall Marks -: <b>{Marks}</b></h2>
        <h2> Overall Grade -: <b><i>{Grade}</i></b></h2>
      </div>

    </div>
  )
}

export default App