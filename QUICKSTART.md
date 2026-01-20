# Quick Start Guide

## 🚀 Run the Application

### Development Mode

```bash
# Navigate to the project directory
cd HostelMealApp

# Install dependencies (if not already done)
npm install

# Start the development server
npm run dev
```

The application will be available at `http://localhost:5173` (or another port if 5173 is in use).

---

## 📚 Application Features

### Home Page (Dashboard)
- **URL**: `/`
- View today's meal schedule
- See key statistics and announcements
- Quick access to all features

### Weekly Menu
- **URL**: `/menu`
- Browse full week's meal plan
- Switch between different days
- View detailed meal items with accordions
- See meal timings

### Meal Attendance
- **URL**: `/attendance`
- Track which meals you attended
- Toggle breakfast, lunch, dinner attendance
- View attendance statistics
- Last 5 days history

### Feedback System
- **URL**: `/feedback`
- Submit feedback for meals with star ratings
- Add text comments
- View average ratings
- See feedback history

### Announcements
- **URL**: `/notices`
- View all mess announcements
- Filter by priority (High/Medium/Low)
- Check announcement dates

### Student Profile
- **URL**: `/profile`
- View your student information
- See academic and hostel details
- Check meal preferences
- View account status

---

## 🎨 UI Features

### Theme Toggle
- Click the sun/moon icon in the navbar to switch between light and dark modes
- Theme preference persists during your session

### Navigation
- Desktop: Use top navigation bar
- Mobile: Use hamburger menu (three lines icon)

### Responsive Design
- Works on all devices: phone, tablet, desktop
- Auto-adjusts layout based on screen size

---

## 📂 Project Structure Overview

```
src/
├── components/     → Reusable UI components
├── pages/         → Full page components
├── data/          → Dummy/static data
├── hooks/         → Custom React hooks
├── App.jsx        → Main app with routing
└── main.jsx       → React entry point
```

---

## 🔑 Key Technologies

| Technology | Purpose |
|-----------|---------|
| **React** | UI library |
| **React Router** | SPA navigation |
| **Material UI** | Component library |
| **Bootstrap** | Responsive layout |
| **Vite** | Fast build tool |

---

## 💻 Available Scripts

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run linter
npm run lint
```

---

## ⚙️ Customization

### Change Student Name
Edit `src/data/dummyData.js`:
```javascript
export const dummyStudentData = {
  name: 'Your Name',
  // ... other details
};
```

### Modify Menu Items
Edit `src/data/dummyData.js` - `weeklyMenuData` object:
```javascript
Monday: {
  breakfast: ['Item 1', 'Item 2', ...],
  lunch: [...],
  dinner: [...]
}
```

### Add/Remove Announcements
Edit `src/data/dummyData.js` - `announcementsData` array:
```javascript
{
  id: 4,
  title: 'Your Title',
  message: 'Your message',
  date: 'YYYY-MM-DD',
  priority: 'high' // or 'medium', 'low'
}
```

---

## 🐛 Troubleshooting

### Port Already in Use
If port 5173 is busy, Vite will automatically use the next available port.

### Dependencies Not Installing
```bash
# Clear npm cache
npm cache clean --force

# Try installing again
npm install
```

### Styles Not Loading
- Clear browser cache (Ctrl+Shift+Delete)
- Refresh the page (Ctrl+F5)
- Restart the dev server

---

## 📱 Testing on Mobile

### Using Browser DevTools
1. Press F12 to open Developer Tools
2. Click the device icon (toggle device toolbar)
3. Select a mobile device size

### Local Network Access
```bash
# Find your local IP
ipconfig getifaddr en0  # macOS/Linux
# or check your network settings on Windows

# Access app from another device:
# http://YOUR_LOCAL_IP:5173
```

---

## 🎯 Next Steps

1. Run the development server
2. Explore all pages using the navigation
3. Test theme toggle
4. Try submitting feedback
5. Modify dummy data to customize
6. Deploy to production using `npm run build`

---

**Happy coding! 🎉**
