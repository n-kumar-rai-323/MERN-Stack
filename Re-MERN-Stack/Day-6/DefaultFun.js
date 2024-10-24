// Example: Function to Calculate Final Price of a Product
const calculateFinalPrice = (amount, tax = 0.1, discount = 0.05) => {
    const taxAmount = amount * tax;
    const TotalAmount = (amount + taxAmount) 
    const disAmount = TotalAmount *discount
    const finalPrice = Math.round((TotalAmount +taxAmount)-disAmount)
    return finalPrice
}
console.log(calculateFinalPrice(100))
console.log(calculateFinalPrice(100,0.08))