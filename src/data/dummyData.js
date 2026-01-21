export const dummyStudentData = {
  id: 'STU001',
  name: 'Akanksha',
  email: 'akansh@hostelmeal.com',
  phone: '+91 9876543210',
  rollNo: 'CS-2024-001',
  semester: '6th',
  mealPlan: 'Premium',
  joinDate: '2023-08-15',
  roomNo: '301-A',
  bloodGroup: 'O+',
};

export const weeklyMenuData = {
  Monday: {
    breakfast: ['Idli', 'Sambar', 'Coconut Chutney', 'Tea/Coffee'],
    lunch: ['Chicken Biryani', 'Raita', 'Salad', 'Pickle', 'Gulab Jamun'],
    dinner: ['Roti', 'Paneer Butter Masala', 'Dhal', 'Green Salad', 'Dessert'],
  },
  Tuesday: {
    breakfast: ['Poha', 'Onion', 'Peanut', 'Tea/Coffee'],
    lunch: ['Fish Curry', 'Rice', 'Papad', 'Pickle', 'Fruit Salad'],
    dinner: ['Naan', 'Chole Bhature', 'Yogurt', 'Cucumber Salad', 'Kheer'],
  },
  Wednesday: {
    breakfast: ['Paratha', 'Curd', 'Pickle', 'Tea/Coffee'],
    lunch: ['Mutton Keema', 'Basmati Rice', 'Salad', 'Papad', 'Ice Cream'],
    dinner: ['Roti', 'Aloo Gobi', 'Dal Makhani', 'Green Salad', 'Custard'],
  },
  Thursday: {
    breakfast: ['Dosa', 'Chutney', 'Sambar', 'Tea/Coffee'],
    lunch: ['Shrimp Masala', 'Rice', 'Salad', 'Pickle', 'Brownie'],
    dinner: ['Chapati', 'Chana Masala', 'Basmati Rice', 'Tomato Salad', 'Momos'],
  },
  Friday: {
    breakfast: ['Upma', 'Vegetables', 'Chutney', 'Tea/Coffee'],
    lunch: ['Mutton Pulao', 'Raita', 'Salad', 'Papad', 'Mango Lassi'],
    dinner: ['Naan', 'Tandoori Chicken', 'Salad', 'Mint Chutney', 'Flan'],
  },
  Saturday: {
    breakfast: ['Chole Bhature', 'Pickle', 'Curd', 'Tea/Coffee'],
    lunch: ['Fish Biryani', 'Raita', 'Salad', 'Papad', 'Pudding'],
    dinner: ['Roti', 'Paneer Tikka Masala', 'Dal', 'Cucumber Salad', 'Gajar Halwa'],
  },
  Sunday: {
    breakfast: ['Pancakes', 'Fruit', 'Honey', 'Tea/Coffee'],
    lunch: ['Special Chicken Curry', 'Rice', 'Salad', 'Pickle', 'Cheesecake'],
    dinner: ['Paratha', 'Mixed Vegetables', 'Dal Tadka', 'Green Salad', 'Rasmalai'],
  },
};

export const todaysMealsData = [
  {
    id: 1,
    type: 'Breakfast',
    time: '7:00 AM - 9:00 AM',
    items: ['Idli', 'Sambar', 'Coconut Chutney', 'Tea/Coffee'],
    location: 'Dining Hall A',
    status: 'available',
    icon: '🌅',
  },
  {
    id: 2,
    type: 'Lunch',
    time: '12:00 PM - 2:00 PM',
    items: ['Chicken Biryani', 'Raita', 'Salad', 'Pickle'],
    location: 'Dining Hall A',
    status: 'upcoming',
    icon: '🍽️',
  },
  {
    id: 3,
    type: 'Dinner',
    time: '7:00 PM - 9:00 PM',
    items: ['Roti', 'Paneer Butter Masala', 'Dhal', 'Green Salad'],
    location: 'Dining Hall A',
    status: 'upcoming',
    icon: '🌙',
  },
];

export const announcementsData = [
  {
    id: 1,
    title: 'Special Festival Menu',
    message: 'Enjoy special traditional dishes on Diwali celebration!',
    date: '2024-11-01',
    priority: 'high',
  },
  {
    id: 2,
    title: 'Meal Time Extended',
    message: 'Dinner time extended to 9:30 PM on weekends.',
    date: '2024-10-28',
    priority: 'medium',
  },
  {
    id: 3,
    title: 'New Chef Introduction',
    message: 'Meet our new chef specializing in Continental cuisine.',
    date: '2024-10-25',
    priority: 'low',
  },
];

export const mealFeedbackData = [
  {
    id: 1,
    meal: 'Chicken Biryani',
    date: '2024-10-20',
    rating: 4,
    feedback: 'Delicious and well-cooked!',
  },
  {
    id: 2,
    meal: 'Paneer Butter Masala',
    date: '2024-10-18',
    rating: 5,
    feedback: 'Simply amazing!',
  },
  {
    id: 3,
    meal: 'Dal Makhani',
    date: '2024-10-15',
    rating: 3,
    feedback: 'Good but needed more spice.',
  },
];

export const mealAttendanceData = [
  { id: 1, date: '2024-10-20', breakfast: true, lunch: true, dinner: false },
  { id: 2, date: '2024-10-21', breakfast: true, lunch: true, dinner: true },
  { id: 3, date: '2024-10-22', breakfast: false, lunch: true, dinner: true },
  { id: 4, date: '2024-10-23', breakfast: true, lunch: false, dinner: true },
  { id: 5, date: '2024-10-24', breakfast: true, lunch: true, dinner: true },
];
