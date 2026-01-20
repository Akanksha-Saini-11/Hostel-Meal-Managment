import { Container, Typography, Box } from '@mui/material';
import { announcementsData } from '../data/dummyData';
import AnnouncementCard from '../components/AnnouncementCard';

const Notices = () => {
  const priorityCounts = {
    high: announcementsData.filter((a) => a.priority === 'high').length,
    medium: announcementsData.filter((a) => a.priority === 'medium').length,
    low: announcementsData.filter((a) => a.priority === 'low').length,
  };

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Typography variant="h4" sx={{ mb: 1, fontWeight: 'bold' }}>
        📢 Mess Announcements
      </Typography>
      <Typography variant="body2" color="textSecondary" sx={{ mb: 3 }}>
        Stay updated with the latest announcements from your hostel mess management.
      </Typography>

      {/* Summary Stats */}
      <Box sx={{ display: 'flex', gap: 2, mb: 4, flexWrap: 'wrap' }}>
        <Box sx={{ px: 2, py: 1, backgroundColor: '#ffebee', borderRadius: 1 }}>
          <Typography variant="body2" sx={{ fontWeight: 'bold', color: '#c62828' }}>
            🔴 {priorityCounts.high} High Priority
          </Typography>
        </Box>
        <Box sx={{ px: 2, py: 1, backgroundColor: '#fff3e0', borderRadius: 1 }}>
          <Typography variant="body2" sx={{ fontWeight: 'bold', color: '#f57c00' }}>
            🟠 {priorityCounts.medium} Medium Priority
          </Typography>
        </Box>
        <Box sx={{ px: 2, py: 1, backgroundColor: '#e3f2fd', borderRadius: 1 }}>
          <Typography variant="body2" sx={{ fontWeight: 'bold', color: '#1976d2' }}>
            🔵 {priorityCounts.low} Low Priority
          </Typography>
        </Box>
      </Box>

      {/* Announcements List */}
      <Box>
        {announcementsData.map((announcement) => (
          <AnnouncementCard key={announcement.id} announcement={announcement} />
        ))}
      </Box>
    </Container>
  );
};

export default Notices;
