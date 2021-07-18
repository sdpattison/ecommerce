import StripeCheckout from 'react-stripe-checkout';

const StripeButton = ({ price }) =>{
    const stripePrice = price * 100;
    const pubKey= 'pk_test_51JEgEGA6JPY1JejMPgZecnC8EUpfQmxWj83ng2xbXnNIv2ielvBBvz23VC6og7iChuWBw5iPherVaRB6Bpqp5Iaj00LH2NMdAT';
    
    const onToken = token =>{
        console.log(token);
        alert('Payment Successful');
    };

    return(
        <StripeCheckout 
            label='Pay Now'
            name='Ecommerce'
            billingAddress
            shippingAddress
            description={`Your total is $${price}`}
            amount={stripePrice}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={pubKey}
        />
    );
}

export default StripeButton;