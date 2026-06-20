# React Props Template

A simple React project built to practice and understand **Props** for the first time.

This project displays a collection of job opening cards from top tech companies such as Google, Microsoft, Amazon, Apple, Meta, Netflix, NVIDIA, Adobe, Uber, and Tesla.

Each job card is rendered dynamically by passing data from a parent component (`App.jsx`) to a reusable child component (`Card.jsx`) using React Props.

## Features

* Dynamic rendering using `map()`
* Reusable Card component
* Passing data with React Props
* Job listings from top tech companies
* Responsive card layout using Flexbox
* Modern UI design
* Save and Apply buttons
* Company logo, job title, pay rate, and location display

## Technologies Used

* React
* Vite
* JavaScript (ES6)
* CSS3
* Lucide React Icons

## What I Learned

* Creating reusable components
* Passing data using Props
* Rendering lists using `map()`
* Using the `key` prop in React
* Organizing components
* Building responsive layouts with Flexbox

## Project Structure

```text
src/
│
├── components/
│   └── Card.jsx
│
├── App.jsx
├── main.jsx
└── index.css
```

## Installation

Clone the repository:

```bash
git clone https://github.com/sumedh22kar/ReactPropsTemplet.git
```

Move into the project folder:

```bash
cd ReactPropsTemplet
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

## Future Improvements

* Add search functionality
* Add filters for job type and experience level
* Add bookmark functionality
* Add dark/light mode
* Fetch data from an API instead of a static array



Learning React by building small projects and understanding core concepts step by step.
