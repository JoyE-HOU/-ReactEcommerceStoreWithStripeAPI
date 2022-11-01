// sk_test_51JDu7DI4mphMhXun6QNTjs18Nz8UuPe3YyoHlPXQfhPOh0CxBT2OFkOVaPCRwwOvmn5L6wI1IJg2SPZp32xsGMsb00ogZN8E1j
// Coffee: price_1LzL5RI4mphMhXunj07K0qYk
// Sunglasses: price_1LzL6EI4mphMhXunJHL3Zbyx
// Camera: price_1LzL6pI4mphMhXunojdIfJJT

const express = require('express');
var cors = require('cors');
const stripe = require('stripe')(sk_test_51JDu7DI4mphMhXun6QNTjs18Nz8UuPe3YyoHlPXQfhPOh0CxBT2OFkOVaPCRwwOvmn5L6wI1IJg2SPZp32xsGMsb00ogZN8E1j);

const app = express();
app.use(cors());
app.use(express.static("public"));
app.use(express.json());

app.post("/checkout", async (req, res) => {
    const items = req.body.items;
    let lineitems = [];
    items.forEach((item)=> {
        lineitems.push(
            {
                price: item.id,
                quantity: item.quantity
            }
        )
    });

    const session = await stripe.checkout.sessions.create({
        line_items: lineitems,
        mode: 'payment',
        success_url: "http://localhost:3000/success",
        cancel_url: "http://localhost:3000/cancel"
    });

    res.send(JSON.stringify({
        url: session.url
    }));
});

app.listen(4000, () => console.log("listening on port 4000!"))