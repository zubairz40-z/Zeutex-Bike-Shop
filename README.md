
# Zeutex E-Bike App

## Project Description
Zeutex E-Bike App is a modern, responsive web application built to showcase and manage electric bikes. Users can explore different bike models, view detailed specifications, schedule test rides, and perform administrative actions like adding new bikes (protected route). The application is designed with smooth animations, interactive sliders, and a clean UI to enhance the user experience.

---

## Features

### Implemented Features
1. **Explore Bikes Section:** Scrollable section showcasing all bikes with animated text and images.
2. **Swiper Slider:** Interactive slider to navigate between bikes with autoplay, pagination, and custom navigation buttons.
3. **Bike Details Page:** Each bike has a dedicated page displaying its specifications and details.
4. **Login Authentication:** Simple login system with protected routes for adding bikes.
5. **Protected Add Product Page:** Only authenticated users can add new bikes to the inventory.
6. **Responsive Navbar & Footer:** Dynamic UI with login/logout indicators, fully responsive across devices.
7. **Framer Motion Animations:** Lively animations for text, images, buttons, and on-scroll effects.
8. **JSON-based Product Data:** Bike data managed using JSON files for easy updates and API-like functionality.
9. **Toast Notifications:** Success and error notifications for login and actions using `react-hot-toast`.

---

## Technologies Used
- **Next.js 15/16** (App Router) – Frontend framework  
- **React.js** – Component-based UI  
- **Tailwind CSS** – Utility-first styling  
- **Framer Motion** – Animations and transitions  
- **Swiper.js** – Carousel/slider functionality  
- **react-hot-toast** – Toast notifications  
- **JSON / Express.js API** – Backend data management  

---

## Setup & Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/zeutex-ebike-app.git
   cd zeutex-ebike-app
````

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Run the development server**

   ```bash
   npm run dev
   ```

4. **Open the app**
   Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Routes Summary

| Route            | Description                                                |
| ---------------- | ---------------------------------------------------------- |
| `/`              | Home page with Hero section and Explore Bikes              |
| `/products`      | List of all bikes                                          |
| `/products/[id]` | Detailed page for a single bike                            |
| `/login`         | Login page for authentication                              |
| `/add-product`   | Protected page for adding new bikes (logged-in users only) |

---

## Features Explained

* **Explore Bikes:** Smooth scrolling section with live animations displaying all bike models.
* **Swiper Slider:** Users can slide between bikes, with autoplay and manual navigation.
* **Bike Details Page:** Shows specs such as top speed, battery, motor, and range.
* **Login System:** Hardcoded demo credentials allow user login; sets authentication in context & cookies.
* **Protected Pages:** Certain pages like “Add Product” require login for access.
* **Animations & Interactions:** Framer Motion makes transitions, text, and images lively.
* **Responsive Design:** Fully responsive layout optimized for mobile, tablet, and desktop.
* **JSON-based Product Management:** Products are managed in a JSON file that can be fetched and updated via API-like structure.
* **Notifications:** Toasts confirm login success or errors, improving user feedback.


## Notes

* Built with modern React & Next.js features (App Router).
* Fully responsive and interactive with smooth animations.
* Easily maintainable product data using JSON files.
* Designed for fast iteration and future scalability.

---

