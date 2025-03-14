// src/components/CropDetails.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Container, Typography, Paper, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';

const CropDetails = () => {
  const { farmId, cropId } = useParams();
  const [crop, setCrop] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCropDetails = async () => {
      try {
        const response = await axios.get(`/farms/${farmId}/crops/${cropId}`);
        setCrop(response.data);
      } catch (error) {
        console.error('Error fetching crop details:', error);
        setError('Failed to load crop details. Please try again later.');
      }
    };

    fetchCropDetails();
  }, [farmId, cropId]);

  if (error) return <div>{error}</div>;
  if (!crop) return <div>Loading...</div>;

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Crop: {crop.crop_type}
      </Typography>
      <Typography variant="body1" gutterBottom>
        Harvest Date: {new Date(crop.harvest_date).toDateString()}
      </Typography>

      {crop.processing ? (
        <>
          <Typography variant="h5" gutterBottom>
            Processing Details
          </Typography>

          <Paper>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Batch ID</TableCell>
                  <TableCell>Process Date</TableCell>
                  <TableCell>Distribution Date</TableCell>
                  <TableCell>Distributor</TableCell>
                  <TableCell>Route</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>{crop.processing.batch_id}</TableCell>
                  <TableCell>{new Date(crop.processing.process_date).toDateString()}</TableCell>
                  <TableCell>{new Date(crop.processing.distribution?.distribution_date).toDateString()}</TableCell>
                  <TableCell>{crop.processing.distribution?.distributor_name}</TableCell>
                  <TableCell>{crop.processing.distribution?.route}</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </Paper>

          {crop.processing.distribution?.consumer && (
            <Typography variant="h6" gutterBottom>
              Consumer Feedback: {crop.processing.distribution.consumer.feedback}
            </Typography>
          )}
        </>
      ) : (
        <Typography variant="body1" gutterBottom>
          No processing details available for this crop.
        </Typography>
      )}
    </Container>
  );
};

export default CropDetails;
