import '../style.css';
// import { Link } from 'react-router-dom/cjs/react-router-dom';

function Navigation () {
    return(
        <div className="navigations">

        <h2 style={{"margin-bottom": "60px", "margin-top": "50px", "margin-left": "15px"}}>Admin  Dashboard </h2>
        <ul>
            <li> <a href="AddStadium">Add Stadium</a></li>
            <li> <a href="/ViewStadium">View Stadium</a></li>
            <li> <a href="/ViewOrder">View Order</a></li>
            <li> <a href="/log">Logout</a></li>
            <ul>
            <h2 style={{"margin-bottom": "60px", "margin-top": "50px", "margin-left": "15px"}}>Customer Dashboard </h2>
            <li><a href="/ViewStadium">ViewStadium</a></li>
            <li><a href="/MakeOrder">MakeOrder</a></li>
            <li><a href="Pay">Payment</a></li>
            <li><a href="/List">View Listordered</a></li>
            <li><a href="/log">logout</a></li>
        </ul>
            
            {/* <li>Logout</li> */}
        </ul>

    </div>
    );
}

export default Navigation;