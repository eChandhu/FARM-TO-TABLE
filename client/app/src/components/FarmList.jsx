import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Card, CardContent, Typography, Grid, Container } from '@mui/material';

const FarmList = () => {
  const [farms, setFarms] = useState([]);
  const [loading, setLoading] = useState(true); // State for loading
  const [error, setError] = useState(null); // State for error handling

  useEffect(() => {
    const fetchFarms = async () => {
      try {
        const response = await axios.get('/farms');
        setFarms(response.data);
      } catch (error) {
        console.error('Error fetching farms:', error);
        setError('Error fetching farms'); // Set error message
      } finally {
        setLoading(false); // Set loading to false after fetching
      }
    };

    fetchFarms();
  }, []);

  if (loading) {
    return <Typography variant="h6" align="center">Loading farms...</Typography>;
  }

  if (error) {
    return <Typography variant="h6" color="error" align="center">{error}</Typography>;
  }

  return (
    <Container>
      <Typography variant="h4" gutterBottom align="center">
        List of Farms
      </Typography>
      <Grid container spacing={4}>
        {farms.map(farm => (
          <Grid item xs={12} sm={6} md={4} key={farm.farm_id}>
            <Card>
              <CardContent>
                <Typography variant="h5">
                  {farm.farm_name}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Location: {farm.location}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Farmer Contact: {farm.farmer_contact}
                </Typography>
                <Link to={`/farms/${farm.farm_id}`}>View Details</Link>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default FarmList;
