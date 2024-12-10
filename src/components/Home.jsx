import Main from "./home/Main"
import Footer from "./layouts/Footer"
import Header from "./layouts/Header"

export default function Home() {
    // comment for variable name
    let name = "SoheilSolim"
    return(
        <div>
        {/* we have 3 components Header,Main,Footer */}
        <Header/>
        <h1>hello {name}</h1>
        <p>the number is: {1+25}</p>
        <Main/>
        <p>welcome to my page</p>
        
        <Footer/>
        </div>
    )
}