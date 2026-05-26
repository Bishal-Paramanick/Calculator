# 🧮 Advanced Web Calculator with Keyboard Support

A highly responsive, interactive web calculator built using vanilla HTML5, CSS3, and JavaScript. This project implements dual-string memory tracking to present clean mathematical expressions to the user while processing true algebraic calculations behind the scenes.

---

## 🚀 Key Features

* **⌨️ Full Keyboard Integration:** Maps native desktop keystrokes seamlessly into application functions:
  * **0-9, Operators (`+`, `-`, `*`, `/`, `.`):** Normal input
  * **`Enter` / `=`:** Evaluates expressions
  * **`Backspace`:** Deletes the trailing character
  * **`Delete`:** Clears the entire workspace grid
  * **`S` / `^` / `R`:** Triggers Squares, Powers, and Square Roots
* **📊 Dual-String Tracking:** Uses a separate display string (`display.value`) for user readability (showing symbols like `²`, `^`, `√`) and an internal operation string (`curdisplay`) utilizing JavaScript exponentiation (`**`) for processing equations.
* **⚡ Advanced Mathematics:** Includes custom functional mapping for:
  * **Square Roots:** `√(` calculation wrappers
  * **Custom Exponents & Squares:** Dynamic power scaling (`**2`)
  * **Reciprocals:** Computes $1/x$ fractions with built-in zero-division defense triggers
  * **Sign Inversion:** Toggles positive/negative states instantly
  * **Percentages:** Injects active modular division values (`/100`)
* **🛡️ Smart Crash Recovery:** Incorporates defensive `try/catch` error handling layers. If a user inputs an invalid equation structure, the display warns the user with an `"ERROR"` notification and completely resets back to `0` automatically after 3 seconds.

---

## 🛠️ Tech Stack

* **Structure & UI Layer:** HTML5 (Input Node tracking)
* **Design Engine:** CSS3 (Grid / Flexbox Alignment Layouts)
* **Logic Framework:** Vanilla JavaScript (ES6+, DOM Traversal, Event Stream Listeners)

---

## 🔧 Installation & Usage

1. **Clone the repository:**
   ```bash
   git clone [https://github.com/Bishal-Paramanick/Calculator.git](https://github.com/Bishal-Paramanick/Calculator.git)
