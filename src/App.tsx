import { useState } from 'react'
import './App.css'
import Section from "./Section.tsx"
import Course from "./Course.tsx"
import { ToastContainer, toast } from "react-toastify"


function App() {
  const [page, changePage] = useState("Home")


  if(page == "Home"){
    return (
      <>
        <div className="topbar">
          <h3 className="topbarbtn" onClick={(event) => changePage("Home")}>Home</h3>
          <h3 className="topbarbtn" onClick={(event) => changePage("Courses")}>Courses</h3>
        </div>
        <div className="header">
          <h1 className="headerText">Learn Computer Science</h1>
        </div>
        <div className="separator"/>
        <div className="content">
          <span className="first">
            <Section header="About Me" img_src="src\assets\headshot.jpeg" body="Ertan Dogan is an undergraduate engineering student at the University of Maryland, College Park. For the past four years, he’s run MCode, a program that gives lessons in computer science to students,at Cabin John MS, Herbert Hoover MS, and Winston Churchill HS, teaching over 100 students. He has built proficiency in programming with Python, game development, web development, and machine learning. He has participated in many coding competitions with Winston Churchill’s programming team, and won an individual international silver medal in the American Computer Science League. For the past two summers, he’s volunteered as a research intern with Weill Cornell Medicine, studying the applications of machine learning to medicine, and he has been selected to present his work at the 2025 American Medical Informatics Association conference and the 2026 International Conference in Health Informatics. He believes that all students should learn to code, and he’s excited to help any he can on this journey."/>
          </span>
          <Section header="Classes" />
          <Course name="Beginner Python" />
          <Course name="Intermediate Python" />
          <Course name="Machine Learning" />
          <Section header="Materials Needed" body="Lessons will be held over Google Meet, a free online video meeting program. On Google Meet, students can ask questions and provide real-time feedback using the chat and reaction features. Students will follow along with instruction using Google Colab, a free online program that allows students to code in Python and save their work to the cloud. Google Colab is built for machine learning in a similar format to Jupyter Notebook, and students will be able to use all of the libraries for the courses with no additional downloads or programs. For these, students will need access to a home google account and nothing else." />
        </div>
        <ToastContainer />
      </>
    )
  } else if(page == "Courses"){
    return (
      <>
        <div className="topbar">
          <h3 className="topbarbtn" onClick={(event) => changePage("Home")}>Home</h3>
          <h3 className="topbarbtn" onClick={(event) => changePage("Courses")}>Courses</h3>
        </div>
        <div className="header">
          <h1 className="headerText">Courses</h1>
        </div>
        <div className="separator"/>
        <div className="content">
          <span className="first">
            <Section header="Overview" body="Each course will be held once a week for eight weeks. They will run over Google Meet, and students will follow along with instruction individually using Google Colab. Students will be able to ask questions during lessons using Google Meet’s chat and reaction features. Registration is not a firm commitment, and there is no payment until lessons begin. Parents can withdraw at any time."/>
          </span>
          <Section header="Register" />
          <Course name="Beginner Python" />
          <Course name="Intermediate Python" />
          <Course name="Machine Learning" />

          <Section header="Beginner Python" body="When: Mondays, 5:00-5:45 PM EST, $30 per class, beginning June 22nd

          What: This course will cover the basics of programming in Python and will serve as an introduction to coding generally. Students will learn concepts like if statements, loops, and functions, and will code small projects and games along the way. 

          Prerequisites: No prior experience is needed." />
          <Section header="Intermediate Python" body="When: Tuesdays, 5:00-5:45 PM EST, $30 per class, beginning June 23rd

What: This course will cover more advanced topics and focus on using programming skills to code more complicated projects and solutions to more advanced problems. Students will learn to code data structures as well as learning how to use external packages and libraries in Python.

Prerequisites: Students should be familiar with these concepts: variables, if-statements, lists, loops, functions." />
<Section header="Machine Learning" body="When: Tuesdays, 6:00-6:45 PM EST, $35 per class, beginning June 23rd

What: This course will be a theoretical and practical introduction to machine learning. Students will learn how machine learning models are constructed, trained, and applied to real-world problems. Students will learn how to use basic classification models and build neural networks, ending with the basics of computer vision and natural language processing. Students will learn how to use libraries like NumPy, Scikit-Learn, Matplotlib, Pandas, and Pytorch on real-world datasets.

Prerequisites: Students should be familiar with these concepts: variables, if-statements, lists, loops, functions, classes. Students should also be familiar with writing simple programs."/>
        <ToastContainer />
        </div>
      </>
    )
  }
}

export default App
