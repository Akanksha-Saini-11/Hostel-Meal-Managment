import { useState } from 'react';
import {
  Container,
  Tabs,
  Tab,
  Box,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Paper,
  Chip,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { weeklyMenuData } from '../data/dummyData';

const WeeklyMenu = () => {
  const [selectedDay, setSelectedDay] = useState(0);
  const days = Object.keys(weeklyMenuData);

  const handleDayChange = (event, newValue) => {
    setSelectedDay(newValue);
  };

  const currentDay = days[selectedDay];
  const meals = weeklyMenuData[currentDay];

  const mealTypes = [
    { key: 'breakfast', label: 'Breakfast', icon: '🌅' },
    { key: 'lunch', label: 'Lunch', icon: '🍽️' },
    { key: 'dinner', label: 'Dinner', icon: '🌙' },
  ];

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h4" sx={{ mb: 3, fontWeight: 'bold' }}>
        📅 Weekly Menu
      </Typography>

      {/* Day Selector Tabs */}
      <Paper sx={{ mb: 3, borderRadius: 2 }}>
        <Tabs
          value={selectedDay}
          onChange={handleDayChange}
          variant="scrollable"
          scrollButtons="auto"
          sx={{
            '& .MuiTabs-indicator': {
              height: 4,
            },
          }}
        >
          {days.map((day) => (
            <Tab key={day} label={day} sx={{ fontWeight: 'bold' }} />
          ))}
        </Tabs>
      </Paper>

      {/* Meals Accordion */}
      <Box>
        {mealTypes.map((mealType) => (
          <Accordion key={mealType.key} defaultExpanded={mealType.key === 'breakfast'}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <Typography variant="h6" sx={{ fontWeight: 'bold', mr: 1 }}>
                  {mealType.icon} {mealType.label}
                </Typography>
              </Box>
            </AccordionSummary>
            <AccordionDetails>
              <Box>
                {meals[mealType.key].map((item, idx) => (
                  <Chip
                    key={idx}
                    label={item}
                    sx={{ m: 0.5, fontWeight: 500 }}
                    variant="outlined"
                  />
                ))}
              </Box>
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>

      {/* Meal Timings Info */}
      <Paper sx={{ mt: 4, p: 3, backgroundColor: 'info.lighter' }}>
        <Typography variant="h6" sx={{ mb: 2, fontWeight: 'bold' }}>
          ⏰ Meal Timings
        </Typography>
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr 1fr' }, gap: 2 }}>
          <Box>
            <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
              🌅 Breakfast
            </Typography>
            <Typography variant="body2" color="textSecondary">
              7:00 AM - 9:00 AM
            </Typography>
          </Box>
          <Box>
            <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
              🍽️ Lunch
            </Typography>
            <Typography variant="body2" color="textSecondary">
              12:00 PM - 2:00 PM
            </Typography>
          </Box>
          <Box>
            <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
              🌙 Dinner
            </Typography>
            <Typography variant="body2" color="textSecondary">
              7:00 PM - 9:00 PM
            </Typography>
          </Box>
        </Box>
      </Paper>
    </Container>
  );
};

export default WeeklyMenu;
