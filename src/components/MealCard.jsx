import { Card, CardContent, CardHeader, Box, Typography } from '@mui/material';

const MealCard = ({ meal, onClick }) => {
  return (
    <Card
      sx={{
        mb: 2,
        cursor: 'pointer',
        transition: 'transform 0.2s, box-shadow 0.2s',
        '&:hover': {
          transform: 'translateY(-4px)',
          boxShadow: 4,
        },
      }}
      onClick={onClick}
    >
      <CardHeader
        title={
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <span>{meal.icon}</span>
            <Typography variant="h6">{meal.type}</Typography>
          </Box>
        }
        subheader={meal.time}
        sx={{ pb: 1 }}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" sx={{ mb: 1 }}>
          📍 {meal.location}
        </Typography>
        <Box sx={{ mb: 1 }}>
          {meal.items.map((item, idx) => (
            <Typography key={idx} variant="body2">
              • {item}
            </Typography>
          ))}
        </Box>
        <Typography
          variant="caption"
          sx={{
            display: 'inline-block',
            mt: 1,
            px: 1.5,
            py: 0.5,
            borderRadius: 1,
            backgroundColor:
              meal.status === 'available'
                ? '#e8f5e9'
                : meal.status === 'upcoming'
                  ? '#fff3e0'
                  : '#f3e5f5',
            color:
              meal.status === 'available'
                ? '#2e7d32'
                : meal.status === 'upcoming'
                  ? '#f57c00'
                  : '#6a1b9a',
            fontWeight: 'bold',
          }}
        >
          {meal.status.toUpperCase()}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default MealCard;
