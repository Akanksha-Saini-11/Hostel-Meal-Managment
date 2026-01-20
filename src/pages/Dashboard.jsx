import { useState } from 'react';
import {
  Container,
  Grid,
  Card,
  CardContent,
  Typography,
  Box,
  Button,
} from '@mui/material';
import { todaysMealsData, announcementsData } from '../data/dummyData';
import MealCard from '../components/MealCard';
import AnnouncementCard from '../components/AnnouncementCard';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';

const Dashboard = () => {
  const stats = [
    {
      label: 'Meals This Week',
      value: '18',
      icon: '📊',
      color: '#1976d2',
    },
    {
      label: 'Attendance Rate',
      value: '95%',
      icon: '✅',
      color: '#388e3c',
    },
    {
      label: 'Feedback Rating',
      value: '4.2/5',
      icon: '⭐',
      color: '#f57c00',
    },
    {
      label: 'Days Left',
      value: '45',
      icon: '📅',
      color: '#7b1fa2',
    },
  ];

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      {/* Welcome Section */}
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" sx={{ mb: 1, fontWeight: 'bold' }}>
          Welcome to Hostel Meal Management 🎉
        </Typography>
        <Typography variant="body1" color="textSecondary">
          Good morning! Here's your meal overview for today.
        </Typography>
      </Box>

      {/* Stats Grid */}
      <Grid container spacing={2} sx={{ mb: 4 }}>
        {stats.map((stat, idx) => (
          <Grid item xs={12} sm={6} md={3} key={idx}>
            <Card
              sx={{
                backgroundImage: `linear-gradient(135deg, ${stat.color}20 0%, ${stat.color}05 100%)`,
                border: `2px solid ${stat.color}30`,
              }}
            >
              <CardContent>
                <Box sx={{ fontSize: '2rem', mb: 1 }}>{stat.icon}</Box>
                <Typography color="textSecondary" variant="body2" sx={{ mb: 0.5 }}>
                  {stat.label}
                </Typography>
                <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
                  {stat.value}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Today's Meals Section */}
      <Box sx={{ mb: 4 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
          <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
            Today's Meals
          </Typography>
          <Button variant="outlined" size="small">
            View All
          </Button>
        </Box>
        <Grid container spacing={2}>
          {todaysMealsData.map((meal) => (
            <Grid item xs={12} md={4} key={meal.id}>
              <MealCard meal={meal} />
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Announcements Section */}
      <Box>
        <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 2 }}>
          📢 Latest Announcements
        </Typography>
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          {announcementsData.map((announcement) => (
            <AnnouncementCard
              key={announcement.id}
              announcement={announcement}
            />
          ))}
        </Box>
      </Box>
    </Container>
  );
};

export default Dashboard;
