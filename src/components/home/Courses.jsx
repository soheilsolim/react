import './courses.css'

export default function Courses({course}){
    return(
        <div>
            <h2 className="course-title">{course?.title}</h2>
            <p className="course-discription">{course?.discription}</p>
        </div>
    )
}