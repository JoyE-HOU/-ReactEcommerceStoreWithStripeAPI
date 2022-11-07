// sk_test_51LzhTYJyZ9iUdArzDGEhDWp0BhrMTkBscgpnPXgDaNaRxMfIv5tzQXg2oSD22cjKvPJ2hs19seAXO16bFZR1MBiZ00FPx8i7Pg
// Coffee: price_1M04Q0JyZ9iUdArzetBbIVHg
// Sunglasses: price_1M04a4JyZ9iUdArzkj1StNx9
// Camera: price_1M04fIJyZ9iUdArzNsgDTaTy

const express = require('express');
var cors = require('cors');
const stripe = require('stripe')('sk_test_51LzhTYJyZ9iUdArzDGEhDWp0BhrMTkBscgpnPXgDaNaRxMfIv5tzQXg2oSD22cjKvPJ2hs19seAXO16bFZR1MBiZ00FPx8i7Pg');

const app = express();
app.use(cors());
app.use(express.static("public"));
app.use(express.json());

app.post("/checkout", async (req, res) => {

    console.log(req.body);

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