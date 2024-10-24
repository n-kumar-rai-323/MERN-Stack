// function generateEmailTemplate(data ,customerName, orderId, discount=0){
//     // let emailContent = `Dear ${customerName} ,`;
//     // emailContent += `Thank you for your purchase! Your order ID is ${orderId}.`

//     // emailContent += "Products in your order:";
//     console.log(data)

//         // emailContent += `${index + 1}. ${product.name} - $${product.price}\n`;
//     // })
//     // return emailContent;
// }
// const customerName ="Nishan Rai";
// const orderId="2323"
// const products = [
//     { name: "Laptop", price: 999 },
//     { name: "Mouse", price: 25 },
// ];


// const email =generateEmailTemplate(products );
// console.log(email)


function generateEmailTemplate(customerName, orderId, discount = 0, products = []) {
    // Construct the email content dynamically using parameters
    let emailContent = `Dear ${customerName},\n\n`;
    emailContent += `Thank you for your purchase! Your order ID is ${orderId}.\n\n`;

    // List out the products ordered
    emailContent += "Products in your order:\n";
    products.forEach((product, index) => {
        emailContent += index
        // emailContent += `${index + 1}. ${product.name} - $${product.price}\n`;
    });

    // // Apply discount if any
    // if (discount > 0) {
    //     emailContent += `\nGood news! You've received a discount of $${discount} on your order.\n`;
    // }

    // emailContent += "\nThank you for shopping with us!";
    return emailContent;
}

// Example usage:
const customerName = "John Doe";
const orderId = "A12345";
const discount = 20;  // Optional, can be 0
const products = [
    { name: "Laptop", price: 999 },
    { name: "Mouse", price: 25 },
];

// Generate the personalized email
const email = generateEmailTemplate(customerName, orderId, discount, products);
console.log(email);
