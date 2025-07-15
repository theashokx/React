Hi! I’m Ashok ([@theashokx](https://github.com/theashokx)), and I’m committed to learning React one class at a time.  
I update this log daily after each class. Follow along! 🌱

---

## 📅 Day-wise Progress

### ✅ Day 1 – July 11, 2025

- 🔸 Learned JSX syntax
- 🔸 Created basic `App.js` and structure
- 🔸 Understood difference between HTML & JSX
- 🔸 Pushed first commit to GitHub
<!-- git add README.md
git commit -m "Added custom README with learning journey details"
git push -->

## 📅 Day 2: JSX and `React.createElement`

### ✅ Topics Covered:

- What is JSX and why it's used in React
- The difference between `React.createElement()` and JSX
- How JSX gets converted to `React.createElement` under the hood
- Using `className` instead of `class` in JSX

### 🧪 Practice Code:

```jsx
import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement("h1", { id: "heading" }, "Namaste React");

const jsxHeading = <h1 className="head">Namaste Bhai Sabbbb</h1>;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(jsxHeading);
📅 Day 3: Functional Components
✅ Topics Covered:
What is a React Component

Creating functional components

Naming convention: Component names must start with a capital letter

Nesting components (using one component inside another)

Return statement rules in JSX (no return in () style syntax)
```
