const API_URL = 'https://dummyjson.com/products';

// Generic API fetch function
async function fetchData(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error(`Error: ${response.status}`);
    return await response.json();
  } catch (error) {
    console.error('API Fetch Error:', error);
    alert('Error fetching data!');
    return null;
  }
}

// Get all products
async function fetchAllProducts() {
  const data = await fetchData(API_URL);
  return data.products || [];
}

// Search products
async function searchProductsByQuery(query) {
  const url = `${API_URL}/search?q=${encodeURIComponent(query)}`;
  const data = await fetchData(url);
  return data.products || [];
}

// Get product details
async function fetchProductDetails(id) {
  const product = await fetchData(`${API_URL}/${id}`);
  return product || null;
}

// Display all products
async function displayAllProducts() {
  const products = await fetchAllProducts();
  const content = document.getElementById('productContent');
  content.innerHTML = products.map(product => `
    <div class="product-item">
      <img src="${product.thumbnail}" alt="${product.title}" />
      <h3>${product.title}</h3>
      <h4>Price: $${product.price}</h4>
      <p>${product.description}</p>
      <button onclick="displayProductDetails(${product.id})">View Details</button>
    </div>
  `).join('');
}



// Display search results
async function displaySearchResults(query) {
  const products = await searchProductsByQuery(query);
  const content = document.getElementById('productContent');

  let productMarkup = '';

  if (products.length > 0) {
    productMarkup = products.map(product => `
      <div class="product-item">
        <img src="${product.thumbnail}" alt="${product.title}" />
        <h3>${product.title}</h3>
        <p>${product.description}</p>
        <button onclick="displayProductDetails(${product.id})">View Details</button>
      </div>
    `).join('');
  } else {
    productMarkup = `<p>No products found.</p>`;
  }

  // Always add back button at the top
  content.innerHTML = `
    <button class="go-back-btn" onclick="displayAllProducts()">Back to All Products</button>
    ${productMarkup}
  `;
}


// Display product details
async function displayProductDetails(productId) {
  const product = await fetchProductDetails(productId);
  const content = document.getElementById('productContent');
  if (!product) {
    content.innerHTML = '<p>Product not found.</p>';
    return;
  }
  content.innerHTML = `
    <div class="product-details">
      <h2>${product.title}</h2>
      <img src="${product.thumbnail}" alt="${product.title}">
      <h4><strong>Price:</strong> $${product.price}</h4>
      <p>${product.description}</p>
      <button class="back-btn" onclick="displayAllProducts()">Back to Products</button>
    </div>
  `;
}
// Handle search action
const searchButton = document.getElementById("searchBtn")
searchButton.addEventListener("click",function searchProducts() {
    const query = document.getElementById('searchTerm').value;
    if (query.trim()) {
        displaySearchResults(query);
    } else {
        alert('Please enter a search query!');
    }
})

// Initialize by displaying all products
document.addEventListener('DOMContentLoaded', displayAllProducts);
