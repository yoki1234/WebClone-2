import { Link } from "react-router-dom"

function HomePage(){
    return(
        <ul>
          <li>
            <Link to="/space-x">Space X</Link>
          </li>
        </ul>
    )
}

export default HomePage;