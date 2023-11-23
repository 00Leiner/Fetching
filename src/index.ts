// src/index.ts
import axios from 'axios';

async function fetchData() {
  try {
    const response = await axios.get('http://localhost:3000/Users/get/');
    console.log('Data:', response.data);
  } catch (error: any) {
    console.error('Error fetching data:', error.message);
  }
}

fetchData();
