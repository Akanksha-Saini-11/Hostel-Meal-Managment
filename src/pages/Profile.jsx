import {
  Container,
  Card,
  CardContent,
  CardHeader,
  Typography,
  Box,
  Grid,
  Paper,
  Chip,
  Divider,
} from '@mui/material';
import { dummyStudentData } from '../data/dummyData';

const Profile = () => {
  const profileSections = [
    {
      title: 'Basic Information',
      icon: '👤',
      items: [
        { label: 'Full Name', value: dummyStudentData.name },
        { label: 'Student ID', value: dummyStudentData.id },
        { label: 'Email', value: dummyStudentData.email },
        { label: 'Phone', value: dummyStudentData.phone },
      ],
    },
    {
      title: 'Academic Details',
      icon: '🎓',
      items: [
        { label: 'Roll Number', value: dummyStudentData.rollNo },
        { label: 'Semester', value: dummyStudentData.semester },
        { label: 'Blood Group', value: dummyStudentData.bloodGroup },
      ],
    },
    {
      title: 'Hostel Information',
      icon: '🏠',
      items: [
        { label: 'Room Number', value: dummyStudentData.roomNo },
        { label: 'Meal Plan', value: dummyStudentData.mealPlan },
        { label: 'Join Date', value: new Date(dummyStudentData.joinDate).toLocaleDateString() },
      ],
    },
  ];

  const mealPreferences = [
    'Non-Vegetarian',
    'No Pork',
    'No Red Meat on Fridays',
    'Extra Spicy',
    'Dairy Allergic',
  ];

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h4" sx={{ mb: 3, fontWeight: 'bold' }}>
        👤 Student Profile
      </Typography>

      {/* Profile Header */}
      <Paper sx={{ p: 3, mb: 4, textAlign: 'center', backgroundColor: 'primary.lighter' }}>
        <Box sx={{ fontSize: '4rem', mb: 1 }}>👨‍🎓</Box>
        <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 0.5 }}>
          {dummyStudentData.name}
        </Typography>
        <Typography variant="body1" color="textSecondary">
          {dummyStudentData.rollNo} • {dummyStudentData.semester} Semester
        </Typography>
      </Paper>

      {/* Profile Sections */}
      <Grid container spacing={3} sx={{ mb: 4 }}>
        {profileSections.map((section, idx) => (
          <Grid item xs={12} md={4} key={idx}>
            <Card>
              <CardHeader
                title={
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <span>{section.icon}</span>
                    <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                      {section.title}
                    </Typography>
                  </Box>
                }
              />
              <CardContent>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
                  {section.items.map((item, itemIdx) => (
                    <Box key={itemIdx}>
                      <Typography variant="caption" color="textSecondary" sx={{ fontWeight: 'bold' }}>
                        {item.label}
                      </Typography>
                      <Typography variant="body2">{item.value}</Typography>
                    </Box>
                  ))}
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Meal Preferences */}
      <Card sx={{ mb: 4 }}>
        <CardHeader
          title={
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <span>🍽️</span>
              <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                Meal Preferences
              </Typography>
            </Box>
          }
        />
        <CardContent>
          <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
            {mealPreferences.map((pref, idx) => (
              <Chip
                key={idx}
                label={pref}
                color="primary"
                variant="outlined"
                sx={{ fontWeight: 500 }}
              />
            ))}
          </Box>
        </CardContent>
      </Card>

      {/* Account Status */}
      <Card>
        <CardHeader
          title={
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <span>⚙️</span>
              <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                Account Status
              </Typography>
            </Box>
          }
        />
        <CardContent>
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: 2 }}>
            <Paper sx={{ p: 2, backgroundColor: '#e8f5e9' }}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
                  Account Status
                </Typography>
                <Chip label="Active" color="success" size="small" />
              </Box>
            </Paper>
            <Paper sx={{ p: 2, backgroundColor: '#e3f2fd' }}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
                  Meal Dues
                </Typography>
                <Typography variant="body2" sx={{ fontWeight: 'bold', color: '#388e3c' }}>
                  Paid
                </Typography>
              </Box>
            </Paper>
          </Box>
        </CardContent>
      </Card>
    </Container>
  );
};

export default Profile;
