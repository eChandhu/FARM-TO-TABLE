// src/components/FarmDetails.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import { Container, Typography, Table, TableBody, TableCell, TableHead, TableRow, Paper } from '@mui/material';

const FarmDetails = () => {
  const { farmId } = useParams();
  const [farm, setFarm] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFarmDetails = async () => {
      try {
        const response = await axios.get(`/farms/${farmId}`);
        setFarm(response.data);
      } catch (error) {
        console.error('Error fetching farm details:', error);
        setError('Failed to load farm details. Please try again later.');
      }
    };

    fetchFarmDetails();
  }, [farmId]);

  if (error) return <div>{error}</div>;
  if (!farm) return <div>Loading...</div>;

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        {farm.farm_name} - {farm.location}
      </Typography>

      <Typography variant="h5" gutterBottom>
        Crops
      </Typography>

      <Paper>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Crop Type</TableCell>
              <TableCell>Harvest Date</TableCell>
              <TableCell>Details</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {farm.crops.length > 0 ? (
              farm.crops.map(crop => (
                <TableRow key={crop.crop_id}>
                  <TableCell>{crop.crop_type}</TableCell>
                  <TableCell>{new Date(crop.harvest_date).toDateString()}</TableCell>
                  <TableCell>
                    <Link to={`/farms/${farm.farm_id}/crops/${crop.crop_id}`}>View Crop</Link>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={3} align="center">No crops available</TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </Paper>
    </Container>
  );
};
console.log("Fetching details for farm:", farmId);

export default FarmDetails;
