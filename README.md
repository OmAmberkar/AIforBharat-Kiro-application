# Aspect Ratio Calculator 

A lightning-fast, single-purpose tool for designers and developers to calculate image and video dimensions based on standard aspect ratios.

**Built for the "AI for Bharat" Week 1 Challenge: Micro-Tools.**

##  Live Demo
[**Click here to view the live tool**](https://OmAmberkar.github.io/aspect-ratio-microtool/)

*(Note: If the link is 404, ensure you have enabled GitHub Pages in your Repository Settings -> Pages -> Source: main)*

## 🎯 The Problem
When embedding videos or resizing images for the web, developers often know the width they need (e.g., a container width of 800px) but struggle to calculate the exact height required to maintain a specific aspect ratio (like 16:9). Mental math for `800 / (16/9)` is slow and error-prone.

##  Features
* **Instant Calculation:** No page reloads; results appear as you type.
* **Bidirectional:** Type the Width to get Height, or type Height to get Width.
* **One-Click Presets:** Quickly switch between industry standards:
    * **16:9** (HD Video)
    * **4:3** (Standard TV/Photography)
    * **1:1** (Social Media Square)
    * **21:9** (Ultrawide Cinema)
* **Lightweight:** Zero dependencies, pure Vanilla JS.

##  Project Structure & Kiro Compliance
This project strictly adheres to the submission guidelines, including the mandatory `.kiro` directory.

```text
/
├── .kiro/                  # Kiro Context Files
│   └── steering/
│       ├── product.md      # Product specifications
│       └── tech.md         # Technical constraints
├── index.html              # Structure
├── style.css               # Styling
├── script.js               # Logic
└── README.md               # Documentation
```

##  Tech Stack
- **HTML5** for semantic structure.
- **CSS3** (with CSS Variables) for a clean, responsive UI.
- **Vanilla JavaScript** (ES6) for the calculation logic.

##  How to Run Locally
- Clone the repository:
```bash
git clone https://github.com/OmAmberkar/aspect-ratio-microtool.git
```
- Open index.html in any web browser.
