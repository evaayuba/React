import Footer from "../Footer";
import Header from "./Header";
import Navigation from "./Navigation";




function ViewOrder () {
    return(
        <><Header />
        <Navigation />
        <div class="section">
            {/* <h2>View all Order</h2> */}
            <h2>View All Orders</h2>
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
        fetch('orders-api-endpoint')
            .then(response => response.json())
            .then(data => {
                // Populate the table with the orders data
                const ordersTable = document.getElementById('ordersTable');
                data.forEach(order => {
                    const row = ordersTable.insertRow();
                    row.innerHTML = `
                        <td>${order.id}</td>
                        <td>${order.customerName}</td>
                        <td>${order.stadium}</td>
                        <td>${order.date}</td>
                    `;
                });
            })
            .catch(error => {
                console.error('Error fetching orders:', error);
            });
    </script> */}
        </div><Footer /></>

    );
}

export default ViewOrder;