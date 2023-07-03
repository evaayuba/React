import Footer from "../Footer";
import Header from "./Header";
import Navigation from "./Navigation";
// import './style.css';


function ViewStadium (){
    return(
        <><Header /><Navigation /><div class="section">
            <h2>View Stadium Available</h2>
            <div class="container">
            {/* <h2>View All Orders</h2> */}
    <table id="ordersTable">
        <tr>
            <th>Order ID</th>
            <th>Customer Name</th>
            <th>Stadium</th>
            <th>Date</th>
        </tr>
    </table>

    {/* <script>
        // Fetch orders data from the server
        fetch('/api/orders')
            .then(response => response.json())
            .then(data => {
                // Populate the table with the orders data
                const ordersTable = document.getElementById('ordersTable');
                data.forEach(order => {
                    const row = ordersTable.insertRow();
                    row.innerHTML = `
                        <td>${order.orderId}</td>
                        <td>${order.customerName}</td>
                        <td>${order.stadiumName}</td>
                        <td>${order.orderDate}</td>
                    `;
                });
            })
            .catch(error => {
                console.error('Error fetching orders:', error);
            });
    </script> */}

            </div>
        </div><Footer /></>
    );
}

export default ViewStadium;