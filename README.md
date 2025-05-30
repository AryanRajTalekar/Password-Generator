<<<<<<< HEAD
# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
=======
# 🔐 Password Generator (React)

A **simple yet effective password generator** built with React, designed to demonstrate the practical use of essential React hooks such as `useState`, `useEffect`, `useRef`, and `useCallback`.

---

## 🎯 Purpose

This project was created as a hands-on way to learn and apply core React hooks in a meaningful context.

### React Hooks Used:

- `useState`: To manage the password, its length, and the toggles for including numbers and special characters.
- `useEffect`: To automatically regenerate the password whenever options are changed.
- `useRef`: To reference the password input and focus/select it after copying.
- `useCallback`: To memoize the `passwordGenerator` and `copyToClipboard` functions to avoid unnecessary re-renders.

---

## 🚀 Features

- 🔢 Adjustable password length using a slider
- 🔁 Option to include numbers and special characters
- 📋 One-click password copy to clipboard
- 🎯 Auto-select input on copy for better UX
- 🎨 Styled with Tailwind CSS for a modern look

---

## 🛠️ Tech Stack

- **React** (Functional Components + Hooks)
- **Tailwind CSS** for styling

---

## 📸 Screenshot

![Screenshot 2025-05-30 111007](https://github.com/user-attachments/assets/c8ee8c19-f2c1-470f-9a62-888203ee613d)


---

💡 Future Improvements
Add password strength meter

Add individual toggles for uppercase and lowercase letters

Support for dark/light theme toggle

Save recently generated passwords

📘 Learning Outcomes
This project helped me understand:

How to control side effects in React with useEffect




## 📦 How to Run Locally

```bash
git clone https://github.com/your-username/password-generator.git
cd password-generator
npm install
npm run dev



The benefits of using useCallback to optimize performance

How to interact with DOM elements using useRef

Building responsive UIs with Tailwind CSS
>>>>>>> b29bed2df727fffbae89617ebd0e45fc8291776c
