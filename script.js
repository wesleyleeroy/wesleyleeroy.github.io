// Sample items data - replace with your actual items
const items = [
    {
        id: 1,
        title: "Vintage Camera",
        price: "$19.99",
        description: "Classic film camera in excellent condition. Fully functional.",
        image: "upenn_background-1440px.avif"
    },
    {
        id: 2,
        title: "Wireless Headphones",
        price: "$129.99",
        description: "Noise-cancelling headphones with 30-hour battery life.",
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60"
    },
    {
        id: 3,
        title: "Leather Backpack",
        price: "$74.50",
        description: "Genuine leather backpack with multiple compartments.",
        image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60"
    },
    {
        id: 4,
        title: "Smart Watch",
        price: "$199.99",
        description: "Latest model with fitness tracking and notifications.",
        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60"
    },
    {
        id: 5,
        title: "Coffee Maker",
        price: "$45.00",
        description: "Programmable coffee maker with thermal carafe.",
        image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60"
    },
    {
        id: 6,
        title: "Gaming Console",
        price: "$299.99",
        description: "Like new, comes with two controllers and 3 games.",
        image: "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60"
    }
];

// Function to create item cards
function createItemCard(item) {
    return `
        <div class="item-card" data-id="${item.id}">
            <img src="${item.image}" alt="${item.title}" class="item-image">
            <div class="item-info">
                <h3 class="item-title">${item.title}</h3>
                <div class="item-price">${item.price}</div>
                <p class="item-description">${item.description}</p>
                <button class="contact-btn" onclick="contactAboutItem(${item.id})">
                    Contact About This Item
                </button>
            </div>
        </div>
    `;
}

// Function to load items into the grid
function loadItems() {
    const itemsGrid = document.querySelector('.items-grid');
    
    if (itemsGrid) {
        itemsGrid.innerHTML = items.map(item => createItemCard(item)).join('');
    }
}

// Function to handle contact button click
function contactAboutItem(itemId) {
    const item = items.find(i => i.id === itemId);
    if (item) {
        // Scroll to contact section
        document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
        
        // Optional: You could pre-fill a contact form or show a message
        alert(`Interested in ${item.title}? Email me at wesleyleeroy@gmail.com with "Item #${itemId}" in the subject!`);
    }
}

// Initialize when page loads
document.addEventListener('DOMContentLoaded', () => {
    loadItems();
    
    // Smooth scrolling for navigation links
    document.querySelectorAll('nav a').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            document.querySelector(targetId).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
    
    // Update copyright year
    const yearSpan = document.querySelector('footer p');
    if (yearSpan) {
        yearSpan.textContent = `© ${new Date().getFullYear()} Wesley's Store`;
    }
});
