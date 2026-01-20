# Hostel Meal Management Single Page Application

A modern, responsive React-based Single Page Application (SPA) for managing hostel meal services with Material UI and Bootstrap styling.

## 🎯 Features

### 1. **Dashboard**
- Quick overview of today's meals (breakfast, lunch, dinner)
- Key statistics (meals this week, attendance rate, feedback rating, days left)
- Latest announcements and updates
- Quick meal status indicators

### 2. **Weekly Menu**
- Day-wise meal planning
- Expandable accordion view for breakfast, lunch, and dinner
- Browse full week's menu
- Meal timings reference

### 3. **Meal Attendance**
- Track meal attendance with switches
- Last 5 days attendance history
- Quick statistics (total breakfasts, lunches, dinners attended)
- Easy meal toggle interface

### 4. **Feedback System**
- Submit meal feedback with star ratings
- Text feedback for each meal
- View historical feedback
- Average rating calculation
- Feedback submission tracking

### 5. **Notices/Announcements**
- Priority-based announcement display (High/Medium/Low)
- Announcement summary statistics
- Alert-based notification styling
- Chronological listing

### 6. **Student Profile**
- Complete student information
- Academic details (Roll No, Semester, etc.)
- Hostel information and room details
- Meal preferences listing
- Account status overview

## 🛠 Tech Stack

- **Frontend Framework**: React 19.2.0
- **Routing**: React Router DOM 7.0.0
- **UI Components**: Material UI (MUI) 6.0.0
- **Styling**: Bootstrap 5.3.0
- **CSS-in-JS**: Emotion (@emotion/react, @emotion/styled)
- **Build Tool**: Vite (with Rolldown)
- **Development**: Node.js

## 📦 Project Structure

```
HostelMealApp/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx          # Navigation with theme toggle
│   │   ├── MealCard.jsx        # Reusable meal card component
│   │   ├── AnnouncementCard.jsx # Announcement display component
│   │   └── FeedbackCard.jsx    # Feedback display component
│   ├── pages/
│   │   ├── Dashboard.jsx       # Home/Dashboard page
│   │   ├── WeeklyMenu.jsx      # Weekly menu page
│   │   ├── Attendance.jsx      # Meal attendance tracker
│   │   ├── Feedback.jsx        # Feedback submission page
│   │   ├── Notices.jsx         # Announcements page
│   │   └── Profile.jsx         # Student profile page
│   ├── data/
│   │   └── dummyData.js        # Static/dummy data
│   ├── hooks/
│   │   └── useTheme.jsx        # Theme context and provider
│   ├── App.jsx                 # Main app with routing
│   ├── main.jsx                # React DOM render
│   ├── App.css                 # App styling
│   └── index.css               # Global styles
├── public/                      # Static assets
├── index.html                  # HTML entry point
├── package.json                # Dependencies
└── vite.config.js              # Vite configuration

```

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Navigate to the project directory:
```bash
cd HostelMealApp
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to the provided local URL (typically `http://localhost:5173`)

### Build for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm preview
```

## 🎨 Features Highlight

### Responsive Design
- Mobile-first approach with Bootstrap grid system
- Tablet and desktop optimization
- Material UI's responsive components
- Mobile menu drawer for navigation

### Theme Support
- Light/Dark mode toggle
- Dynamic theme switching using Material UI's theme provider
- Persistent theme context
- Smooth transitions between themes

### Component-Based Architecture
- Reusable components (MealCard, AnnouncementCard, FeedbackCard)
- Props-based customization
- Separation of concerns (pages, components, data, hooks)
- Custom hooks for theme management

### Data Management
- Centralized dummy data in `/data/dummyData.js`
- Static student information
- Weekly meal planning data
- Feedback and attendance records
- Announcement feed

## 📱 Navigation

The application uses React Router for SPA navigation:

- `/` - Dashboard
- `/menu` - Weekly Menu
- `/attendance` - Meal Attendance Tracker
- `/feedback` - Feedback System
- `/notices` - Announcements
- `/profile` - Student Profile

## 🎓 Learning Outcomes

This project demonstrates:
- React functional components and hooks
- React Router for SPA navigation
- Material UI component library usage
- Bootstrap integration with React
- Theme management with Context API
- Component composition and reusability
- Responsive design patterns
- State management with useState
- Styling with CSS-in-JS and utility classes

## 📝 Data Notes

All data is **static/dummy** for demonstration purposes. In a real application, this would be:
- Connected to a backend API
- Stored in a database
- Fetched dynamically
- Updated in real-time

## 🔧 Configuration

### Vite Configuration
The project uses Rolldown Vite for improved build performance.

### ESLint
ESLint configuration is included for code quality. Run linting with:
```bash
npm run lint
```

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📄 License

This project is part of a Full Stack learning course.

## 🤝 Contributing

This is a learning project. Feel free to modify and extend with additional features:
- User authentication
- Backend integration
- Real-time notifications
- Payment integration
- Admin dashboard
- Calendar view for meal planning

## 📞 Support

For issues or questions, refer to the documentation or create an issue in the repository.

---

Built with ❤️ using React, Material UI, and Bootstrap
