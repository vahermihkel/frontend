import { useEffect, useState } from "react";

function PaymentCompleted() {

  const order_reference = window.location.href.split("order_reference=")[1].split("&")[0];
  const payment_reference = window.location.href.split("payment_reference=")[1];
  const [paymentState, setPaymentState] = useState("");

  useEffect(() => {
    fetch("https://mihkel-java.herokuapp.com/check-payment", {
    method: "POST",
    body: JSON.stringify({
      order_reference: order_reference,
      payment_reference: payment_reference
    }),
    headers: {
      "Content-Type": "application/json"
    }
    }).then(res => res.json())
    .then(data => setPaymentState(data.payment_state));
  }, [order_reference, payment_reference]);

  return ( <div>
    { paymentState === "settled" && <div>Makse on edukalt sooritatud</div>}
    { paymentState === "failed" && <div>Makse ei õnnestunud</div>}

  </div> );
}

export default PaymentCompleted;