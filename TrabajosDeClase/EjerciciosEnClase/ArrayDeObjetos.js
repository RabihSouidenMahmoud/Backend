const products = [
  { id: 1, name: "escuadra", price: 323.45 },
  { id: 2, name: "Calculadora", price: 234.56 },
  { id: 3, name: "Globo Terraqueo", price: 45.67 },
  { id: 4, name: "Paleta de pintura", price: 456.78 },
  { id: 5, name: "Reloj", price: 67.89 },
  { id: 6, name: "Agenda", price: 78.9 },
];

function getNames(products){
    const name =[]
    for(const product of products){
        name.push(product.name)
    }
    return name.join[', ']
}
const nameResult = getNames(products)
console.log(getNames())

function getTotalPrice(products){
    let total =0;
    for (const product of products) {
        total += product.price;
    }
    return total;
}
const total =getTotalPrice(products);
console.log(total)

function avaragePrice(products){
    return

}