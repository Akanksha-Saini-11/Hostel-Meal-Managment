import { Alert, AlertTitle, Box } from '@mui/material';

const AnnouncementCard = ({ announcement }) => {
  const severityMap = {
    high: 'error',
    medium: 'warning',
    low: 'info',
  };

  return (
    <Alert
      severity={severityMap[announcement.priority]}
      sx={{ mb: 2, borderRadius: 1 }}
    >
      <AlertTitle>{announcement.title}</AlertTitle>
      <Box sx={{ mb: 0.5 }}>{announcement.message}</Box>
      <small>📅 {new Date(announcement.date).toLocaleDateString()}</small>
    </Alert>
  );
};

export default AnnouncementCard;
