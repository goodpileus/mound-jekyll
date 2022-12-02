document.querySelectorAll('.paypal-button').forEach(function(selector) {
  console.log(selector.dataset.price) // Show an attribute from the parent div
  console.log(selector.id) // Show the div name from the parent div
  paypal.Buttons({
    style: {
      shape: 'rect',
      color: 'black'
    },

    // Set up the transaction
    createOrder: function(data, actions) {
        return actions.order.create({
            purchase_units: [{
                amount: {
                    value: selector.dataset.price
                }
            }]
        });
    },

    // Finalize the transaction
    onApprove: function(data, actions) {
        return actions.order.capture().then(function(details) {
            // Show a success message to the buyer
            alert('Transaction completed by ' + details.payer.name.given_name + '!');
        });
    }


  }).render('#' + selector.id);  // Render the button back to the parent div
});
