# Plant Webshop – React Caching Comparison 🌱

This repository contains two versions of a plant webshop developed with React. The purpose of the project is to investigate and compare data handling in React applications with and without caching using TanStack Query.

Both applications use the Perenual API to fetch plant data and provide the same webshop functionality. The main difference is how API data is fetched and managed.

## Project Structure

The repository contains two separate React applications:

### 1. Without TanStack Query

Located in `plantwebshop-without-tanstack-query/`

This version handles API requests using:

- `fetch()` for retrieving data from the Perenual API
- `useState()` for managing plants, loading and error states
- `useEffect()` for triggering API requests when the component mounts

No separate application-level caching solution is implemented.

### 2. With TanStack Query

Located in `plantwebshop-with-tanstack-query/`

This version uses TanStack Query to manage API data and caching.

It includes:

- `useQuery()` for fetching and managing server data
- `staleTime` to define how long cached data is considered fresh
- `gcTime` to define how long inactive cached data remains in memory
- Automatic handling of loading and error states

## Technologies

Both applications use:

- React
- Vite
- Redux Toolkit
- React Router
- JavaScript
- CSS
- Perenual API

The second application additionally uses:

- TanStack Query

## Features

Both applications include:

- Browse plants fetched from an external API
- Add plants to the shopping cart
- Increase and decrease product quantities
- Remove products from the cart
- Clear the entire cart
- See the total number of items in the cart
- Checkout page with order summary and total price
- Place an order and clear the cart
- Navigate between pages without full-page reloads

## Installation and Setup

Each application can be installed and run independently.

### 1. Clone the repository

git clone https://github.com/pantawanv/plantshop-caching-comparison.git

### 2. Run the application without TanStack Query

Navigate into the project folder:

cd plantshop-caching-comparison/plantwebshop-without-tanstack-query

Install dependencies:

npm install

### 3. Run the application with TanStack Query

Alternatively, open a separate terminal and navigate into:

cd plantshop-caching-comparison/plantwebshop-with-tanstack-query

Install dependencies:

npm install

### 4. Add the API key

Both applications use the Perenual API to fetch plant data.

To get an API key, visit the [Perenual API website](https://perenual.com/).

Create a `.env` file in the root folder of each application, in the same folder as its `package.json`.

Add your API key:

VITE_PERENUAL_API_KEY=your_api_key_here

Replace `your_api_key_here` with your own Perenual API key.

The `.env` files are included in `.gitignore` and should not be uploaded to GitHub.

### 5. Start the development server

Run the following command inside the application folder:

npm run dev

Vite will display the local address where the application is available.

## Redux Toolkit

Redux Toolkit is used in both applications to manage the global shopping cart state.

The cart supports:

- Adding products
- Increasing and decreasing quantities
- Removing products
- Clearing the cart

## API

Plant information is fetched from the [Perenual API](https://perenual.com/) and displayed on the Shop page.

## Purpose of the Comparison

The two applications provide a basis for comparing different approaches to data fetching and caching in React.

The comparison focuses on:

- API request frequency
- Data caching
- Refetching behavior
- Loading and error state management
- Application performance

The results of the comparison are investigated through practical testing of both applications.
