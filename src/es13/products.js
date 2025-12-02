// Node.js 18+ ya tiene fetch nativo, no necesitas importarlo
const response = await fetch('https://api.escuelajs.co/api/v1/products');
const products = await response.json();

export default products;