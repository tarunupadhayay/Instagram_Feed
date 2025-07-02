# 📸 Scenne Stories (React + TypeScript)

A simplified **Scenne Stories** feature built using **React.js** and **TypeScript** (with Vite).  
This project focuses on the **UI & user interaction**, closely matching Instagram's look and feel — fully responsive & mobile-first.

---

## ✨ Features

✅ Scrollable list of stories (round avatars with gradient border)  
✅ Full screen story viewer: 
- Progress bar loader
- User avatar & username
- Next / Previous navigation buttons (centered vertically)
- Auto-advance every 5 seconds  
✅ Posts feed under stories (with username, avatar, and image)
✅ Smooth CSS transitions
✅ Transparent backgrounds for header & buttons for modern look
✅ Dummy data fetched from external file
✅ **No external UI libraries** — pure CSS & React

---

## 🛠 Tech Stack

- [React.js](https://react.dev/) with TypeScript
- [Vite](https://vitejs.dev/)
- CSS (no CSS frameworks)
- Dummy data JSON for stories & posts

---

## 📦 Project Structure

src/
├── components/ # UI components
│ ├── Header.tsx
│ ├── Stories.tsx
│ ├── StoryViewer.tsx
│ ├── PostList.tsx
│ └── PostItem.tsx
├── hooks/
│ └── useStories.ts
├── styles/
│ ├── app.css
│ ├── StoryViewer.css
│ ├── Stories.css
│ └── PostItem.css
├── App.tsx
└── main.tsx
public/
├── logo.png
├── images/ # images for stories and posts
└── stories.json # dummy stories data

yaml
Copy
Edit

---

## 🚀 Getting Started

1️⃣ Clone the repository:
```bash
git clone https://github.com/yourusername/instagram-stories-clone.git
cd instagram-stories-clone
2️⃣ Install dependencies:

bash
Copy
Edit
npm install
3️⃣ Start the dev server:

bash
Copy
Edit
npm run dev
