import axios from 'axios';
import mongoose, { Document, Schema } from 'mongoose';
import bcrypt from 'bcrypt';

// Define the Users interface and schema
export interface IUsers extends Document {
  username: string;
  password: string;
}

export const UsersSchema: Schema = new Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
});

// Hash the password before saving it to the database
UsersSchema.pre<IUsers>('save', async function (next) {
  const user = this;

  // Only hash the password if it has been modified (or is new)
  if (!user.isModified('password')) return next();

  try {
    // Generate a salt
    const salt = await bcrypt.genSalt(10);

    // Hash the password along with the new salt
    const hash = await bcrypt.hash(user.password, salt);

    // Override the cleartext password with the hashed one
    user.password = hash;
    next();
  } catch (error: any) {
    return next(error);
  }
});

// Create the Users model
const Users = mongoose.model<IUsers>('Users', UsersSchema);

// Fetch data from the REST API
async function fetchData() {
  try {
    // Replace 'https://api.example.com/users' with your actual API endpoint
    const response = await axios.get<IUsers[]>('https://api.example.com/users');

    // Iterate over the fetched data
    response.data.forEach(async (userData) => {
      // Create a new Users instance using the fetched data
      const newUser = new Users(userData);

      // Save the new user to the database
      await newUser.save();
    });

    console.log('Data fetched and saved successfully.');
  } catch (error: any) {
    console.error('Error fetching data:', error.message);
  }
}

// Call the fetchData function to initiate the data fetching process
fetchData();
