import { Card, CardContent, Typography, Box, Rating } from '@mui/material';

const FeedbackCard = ({ feedback }) => {
  return (
    <Card sx={{ mb: 2 }}>
      <CardContent>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
          <Typography variant="h6">{feedback.meal}</Typography>
          <Typography variant="caption" color="textSecondary">
            {new Date(feedback.date).toLocaleDateString()}
          </Typography>
        </Box>
        <Box sx={{ mb: 1 }}>
          <Rating value={feedback.rating} readOnly size="small" />
        </Box>
        <Typography variant="body2" color="textSecondary">
          "{feedback.feedback}"
        </Typography>
      </CardContent>
    </Card>
  );
};

export default FeedbackCard;
