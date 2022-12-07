import StripeCheckout from "react-stripe-checkout";
import CustomButton from "../CustomButton/CustomButton";
import {BiCreditCard} from 'react-icons/bi'

const StripeCheckoutButton = ({ price }: { price: number }) => {
  const stripeBill = price * 100;
  const key =
    "pk_test_51Lri7JDA0FzgZ7oIEORLHN5I2oHRSJ3VCD4gIqAw4xFRczWTuwhG2J4UzQniRmb12KYe9FFv295aHnUNAQZW1yXC00yQ7hueCZ";
  const onToken = (token: {}) => {
    console.log(token);
  };
  return (
    <StripeCheckout
      label="Make Payment"
      name="JUSTICE Clothing Ltd."
      description={`Your total is $${price}`}
      image="https://svgshare.com/i/CUz.svg"
      billingAddress
      shippingAddress
      bitcoin
      amount={stripeBill}
      panelLabel="Pay Now"
      stripeKey={key}
      token={onToken}
   >
     <CustomButton text="Make payment" checkout="checkout" child={<BiCreditCard/>}/>
    </StripeCheckout>
  );
};

export default StripeCheckoutButton;