# Cartify - Shopping Cart Application

A modern e-commerce shopping cart application built with React, TypeScript, and Vite. Browse products from the FakeStore API, manage your shopping cart, and enjoy a seamless shopping experience.

## Features

- **Product Browsing**: Browse products fetched from FakeStore API
- **Shopping Cart**: Add, remove, and update product quantities in your cart
- **Real-time Cart Updates**: Cart badge shows item count in the header
- **Responsive Design**: Clean, modern UI with a dark theme
- **Type-Safe**: Built with TypeScript for better code reliability
- **Fast Development**: Powered by Vite for instant HMR (Hot Module Replacement)

## Tech Stack

- **Frontend**: React 18 with TypeScript
- **Build Tool**: Vite
- **Routing**: React Router
- **Styling**: CSS (custom styling)
- **API**: FakeStore API (https://fakestoreapi.com)
- **Deployment**: Vercel

## Project Structure

```
src/
├── components/          # Reusable React components
│   ├── AppHeader/      # Navigation header with cart badge
│   ├── CartCard/       # Individual cart item component
│   ├── CartList/       # Cart items list container
│   ├── HeroSection/    # Home page hero section
│   ├── ProductCard/    # Individual product card
│   └── ProductList/    # Product grid container
├── pages/              # Page components
│   ├── Home.tsx        # Home page
│   ├── Shop.tsx        # Shop/Products page
│   └── Cart.tsx        # Shopping cart page
├── types/              # TypeScript type definitions
│   ├── cart.ts         # Cart item types
│   ├── context.ts      # Outlet context types
│   ├── product.ts      # Product types
│   └── props.ts        # Component prop types
├── data/
│   └── api.ts          # API calls
├── utils/
│   └── utils.ts        # Utility functions
├── router/
│   └── index.tsx       # Route configuration
├── App.tsx             # Main app component with state management
└── main.tsx            # Application entry point
```

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd odin-shopping-cart
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173`

## Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build for production
- `npm run preview` - Preview the production build locally
- `npm run lint` - Run ESLint

## How It Works

### Adding to Cart

- Browse products in the Shop page
- Select quantity using the quantity controls
- Click "Add To Cart" to add the item to your cart

### Managing Cart

- View your cart items on the Cart page
- Adjust quantities using the +/- buttons
- Remove items from cart with the Remove button
- Cart badge on header shows total item count

### State Management

- Cart state is managed in the `App` component using React's `useState`
- Context is provided via React Router's `Outlet` context
- All cart operations (add, remove, update) are passed down to child components

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is part of The Odin Project curriculum.
