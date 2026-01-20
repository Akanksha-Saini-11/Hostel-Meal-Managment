import { useState } from 'react';
import {
  Container,
  Card,
  CardContent,
  CardHeader,
  Typography,
  Box,
  TextField,
  Button,
  Rating,
  Paper,
  Alert,
  Grid,
} from '@mui/material';
import { mealFeedbackData } from '../data/dummyData';

const Feedback = () => {
  const [feedbackList, setFeedbackList] = useState(mealFeedbackData);
  const [newFeedback, setNewFeedback] = useState({
    meal: '',
    rating: 0,
    feedback: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewFeedback((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleRatingChange = (newValue) => {
    setNewFeedback((prev) => ({
      ...prev,
      rating: newValue,
    }));
  };

  const handleSubmit = () => {
    if (newFeedback.meal && newFeedback.rating > 0 && newFeedback.feedback) {
      const feedback = {
        id: feedbackList.length + 1,
        meal: newFeedback.meal,
        date: new Date().toISOString().split('T')[0],
        rating: newFeedback.rating,
        feedback: newFeedback.feedback,
      };
      setFeedbackList([feedback, ...feedbackList]);
      setNewFeedback({ meal: '', rating: 0, feedback: '' });
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 3000);
    }
  };

  const averageRating =
    feedbackList.length > 0
      ? (feedbackList.reduce((sum, f) => sum + f.rating, 0) / feedbackList.length).toFixed(1)
      : 0;

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h4" sx={{ mb: 3, fontWeight: 'bold' }}>
        ⭐ Meal Feedback
      </Typography>

      {/* Average Rating */}
      <Grid container spacing={2} sx={{ mb: 4 }}>
        <Grid item xs={12} sm={6} md={3}>
          <Paper sx={{ p: 2, textAlign: 'center' }}>
            <Typography variant="h4" sx={{ color: '#f57c00', fontWeight: 'bold' }}>
              {averageRating}
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'center', mt: 1 }}>
              <Rating value={Math.round(averageRating)} readOnly />
            </Box>
            <Typography variant="body2" color="textSecondary" sx={{ mt: 1 }}>
              Average Rating
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Paper sx={{ p: 2, textAlign: 'center' }}>
            <Typography variant="h6" sx={{ color: '#388e3c', fontWeight: 'bold' }}>
              {feedbackList.length}
            </Typography>
            <Typography variant="body2" color="textSecondary">
              Total Feedbacks
            </Typography>
          </Paper>
        </Grid>
      </Grid>

      {/* Submit New Feedback */}
      <Paper sx={{ p: 3, mb: 4 }}>
        <Typography variant="h6" sx={{ mb: 2, fontWeight: 'bold' }}>
          📝 Share Your Feedback
        </Typography>
        {submitted && <Alert severity="success" sx={{ mb: 2 }}>Thank you for your feedback!</Alert>}
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          <TextField
            fullWidth
            label="Meal Name"
            name="meal"
            value={newFeedback.meal}
            onChange={handleInputChange}
            variant="outlined"
            size="small"
            placeholder="e.g., Chicken Biryani"
          />
          <Box>
            <Typography variant="body2" sx={{ mb: 1, fontWeight: 'bold' }}>
              Rating
            </Typography>
            <Rating
              value={newFeedback.rating}
              onChange={(event, value) => handleRatingChange(value)}
              size="large"
            />
          </Box>
          <TextField
            fullWidth
            label="Your Feedback"
            name="feedback"
            value={newFeedback.feedback}
            onChange={handleInputChange}
            variant="outlined"
            multiline
            rows={4}
            placeholder="Share your thoughts about the meal..."
          />
          <Button
            variant="contained"
            color="primary"
            onClick={handleSubmit}
            disabled={!newFeedback.meal || !newFeedback.rating || !newFeedback.feedback}
          >
            Submit Feedback
          </Button>
        </Box>
      </Paper>

      {/* Previous Feedbacks */}
      <Typography variant="h6" sx={{ mb: 2, fontWeight: 'bold' }}>
        Previous Feedbacks
      </Typography>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        {feedbackList.map((feedback) => (
          <Card key={feedback.id}>
            <CardContent>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                  {feedback.meal}
                </Typography>
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
        ))}
      </Box>
    </Container>
  );
};

export default Feedback;
