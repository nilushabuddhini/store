const express = require('express')

const stripe = require('stripe')(process.env.STRIPE_API_KEY)

const uuid = require('uuid').v4

const router = express.Router()

router.post("/charges", async (req,res)=>{   

    // let error, status;
    // const {items,token} = req.body
    // try {
    //     const customer = await stripe.customers.create({
    //         email:token.email,
    //         source:token.id
    //     })
    //     const key = uuid()
    //     const charge = await stripe.charges.create({
    //         amount: items.price*100,
    //         currency:'lkr',
    //         customer:customer.id,
    //         receipt_email:token.email,
    //         description:`items name is ${items.title}`,
    //         shipping:{
    //             name:token.card.name,
    //             address:{
    //                 line1:token.card.address_line1, 
    //                 line2:token.card.address_line2,
    //                 city:token.card.address_city,
    //                 postal_code:token.card.address_zip
    //             },
    //         },
    //     },{
    //         key
    //     }
    //     )
    //     console.log('Charge', { charge })
    //     status='success'
    // } catch (error) {
    //     console.error(error)
    //     res.status(400).json({error:error.message})
    // }
    const {token, amount} = req.body 
    const idempotencyKey = uuid()
    return stripe.customers.create({
        email:token.email,
        source:token.id
    }).then(customer=>{
        stripe.charges.create({
            amount:amount * 100,
            currency:'lkr',
            customer:customer.id,
            receipt_email:token.email,
        },{ idempotencyKey })
    }).then(result => { 
        res.status(200).json(result)
    }).catch(error => {
        res.status(400).json({ error:error.message })
    })
});

module.exports = router