
import Products from "./Products"
import ProductList from "./ProductList"
import { useState } from "react";
import Courses from "./Courses";
import CourseList from "./CourseList";
import { Fragment } from "react";


export default function Main(){
    const [courses, setCourses] = useState([
        {
            id : 1,
            title : "php",
            discription : "how to learn php"
        },{
            id : 2,
            title : "laravel",
            discription : "how to learn laravel"
        }
    ]);
    const loadMoreCourses = () => {
        setLoading(true)
        setTimeout(()=>{
            setCourses([
            
                ... courses,
                    {
                        id : 3,
                        title : "python",
                        discription : "how to learn python"
                    },{
                        id : 4,
                        title : "django",
                        discription : "how to learn django"
                    }
                ])
                setLoading(false);
        },3000);
    }
    const [loading, setLoading] = useState(false);
    

    let heading = [
        "hello, section map",
        "how we can use map"
    ]



    const [clickCount, setClickCount] = useState(0);
    function clickHandler(){
        console.log(`clickkkkkkkkk`);
        console.log(clickCount);

        setMessage("loading...")
        setClickCount(clickCount + 1);
    }

    let detailOne = {
        color : "red"
    }

    const [message, setMessage] = useState("not data loaded")
    const auth = true;
    if(!auth){
        return(
            <div>
                <h1 >hello, you should login first</h1>
            </div>
        )
    }

    return(
        <div>
        
        <CourseList>
        {courses.map((course, i) => 
        <Fragment key={i}><Courses course={course}/></Fragment>
        )}
        {(loading)
        ?<button onClick={loadMoreCourses}>loading</button>
        :<button onClick={loadMoreCourses}>load more</button>
        }
        </CourseList>
        

        <ProductList>
        <Products name="A" detail="a" price="100"/>
        <Products name="B" detail="b" price="10"/>
        <Products name="C" detail="c" price="1"/>
        </ProductList>

        <h1 className="text-red-700">this is main component</h1>
        <Products details={{
        height : "180"
        }} />        
        <Products details={detailOne}/>
        <Products details={{
        size : "xl"
        }} />

        <button onClick={clickHandler}>click me</button>

        <p>{message}</p>
        <p>{clickCount}</p>
        {heading = heading.map((item, i) => <span key={i}>{item}</span>)}
        </div>
    )
}
