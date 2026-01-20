import { useState } from 'react';
import {
  Container,
  Card,
  CardContent,
  CardHeader,
  Typography,
  Box,
  Switch,
  FormControlLabel,
  Paper,
  Grid,
  Chip,
} from '@mui/material';
import { mealAttendanceData } from '../data/dummyData';

const Attendance = () => {
  const [attendance, setAttendance] = useState(mealAttendanceData);

  const handleToggle = (id, mealType) => {
    setAttendance((prev) =>
      prev.map((record) =>
        record.id === id ? { ...record, [mealType]: !record[mealType] } : record
      )
    );
  };

  const calculateStats = () => {
    let totalBreakfast = 0,
      totalLunch = 0,
      totalDinner = 0;
    attendance.forEach((record) => {
      if (record.breakfast) totalBreakfast++;
      if (record.lunch) totalLunch++;
      if (record.dinner) totalDinner++;
    });
    return { totalBreakfast, totalLunch, totalDinner };
  };

  const stats = calculateStats();
  const totalDays = attendance.length;

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h4" sx={{ mb: 3, fontWeight: 'bold' }}>
        📊 Meal Attendance
      </Typography>

      {/* Stats Overview */}
      <Grid container spacing={2} sx={{ mb: 4 }}>
        <Grid item xs={12} sm={6} md={3}>
          <Paper sx={{ p: 2, textAlign: 'center' }}>
            <Typography variant="h6" sx={{ color: '#1976d2', fontWeight: 'bold' }}>
              {stats.totalBreakfast}
            </Typography>
            <Typography variant="body2" color="textSecondary">
              Breakfasts
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Paper sx={{ p: 2, textAlign: 'center' }}>
            <Typography variant="h6" sx={{ color: '#388e3c', fontWeight: 'bold' }}>
              {stats.totalLunch}
            </Typography>
            <Typography variant="body2" color="textSecondary">
              Lunches
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Paper sx={{ p: 2, textAlign: 'center' }}>
            <Typography variant="h6" sx={{ color: '#f57c00', fontWeight: 'bold' }}>
              {stats.totalDinner}
            </Typography>
            <Typography variant="body2" color="textSecondary">
              Dinners
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Paper sx={{ p: 2, textAlign: 'center' }}>
            <Typography
              variant="h6"
              sx={{
                color: '#7b1fa2',
                fontWeight: 'bold',
              }}
            >
              {stats.totalBreakfast + stats.totalLunch + stats.totalDinner}
            </Typography>
            <Typography variant="body2" color="textSecondary">
              Total Meals
            </Typography>
          </Paper>
        </Grid>
      </Grid>

      {/* Attendance Records */}
      <Typography variant="h6" sx={{ mb: 2, fontWeight: 'bold' }}>
        Last 5 Days
      </Typography>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        {attendance.map((record) => (
          <Card key={record.id}>
            <CardHeader
              title={new Date(record.date).toLocaleDateString('en-US', {
                weekday: 'long',
                month: 'short',
                day: 'numeric',
              })}
              subheader={record.date}
            />
            <CardContent>
              <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                <FormControlLabel
                  control={
                    <Switch
                      checked={record.breakfast}
                      onChange={() => handleToggle(record.id, 'breakfast')}
                    />
                  }
                  label={
                    <Box>
                      <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
                        🌅 Breakfast
                      </Typography>
                      <Typography variant="caption" color="textSecondary">
                        7:00 - 9:00 AM
                      </Typography>
                    </Box>
                  }
                  sx={{ m: 0 }}
                />
                <FormControlLabel
                  control={
                    <Switch
                      checked={record.lunch}
                      onChange={() => handleToggle(record.id, 'lunch')}
                    />
                  }
                  label={
                    <Box>
                      <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
                        🍽️ Lunch
                      </Typography>
                      <Typography variant="caption" color="textSecondary">
                        12:00 - 2:00 PM
                      </Typography>
                    </Box>
                  }
                  sx={{ m: 0 }}
                />
                <FormControlLabel
                  control={
                    <Switch
                      checked={record.dinner}
                      onChange={() => handleToggle(record.id, 'dinner')}
                    />
                  }
                  label={
                    <Box>
                      <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
                        🌙 Dinner
                      </Typography>
                      <Typography variant="caption" color="textSecondary">
                        7:00 - 9:00 PM
                      </Typography>
                    </Box>
                  }
                  sx={{ m: 0 }}
                />
              </Box>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Container>
  );
};

export default Attendance;
