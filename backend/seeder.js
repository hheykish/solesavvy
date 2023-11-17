import mongoose from 'mongoose';
import data from './data.js'; // Import the data object you provided
import User from './models/userModel.js'; // Replace with your actual model paths
import Product from './models/productModel.js'; // Replace with your actual model paths

mongoose.connect('mongodb+srv://heybuddy:mongo12@cluster0.ezef0ds.mongodb.net/shopdb?', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  
  const insertData = async () => {
    try {
      await User.deleteMany(); // Clear the 'User' collection
      await Product.deleteMany(); // Clear the 'Product' collection
  
      const createdUsers = await User.insertMany(data.users);
      const adminUser = createdUsers[0]._id; // Assuming the admin user is the first user in the array
  
      // Add the admin user's ID to each product
      const productsWithUser = data.products.map((product) => ({
        ...product,
        user: adminUser,
      }));
  
      await Product.insertMany(productsWithUser);
  
      console.log('Data imported successfully');
      process.exit();
    } catch (error) {
      console.error('Error importing data:', error);
      process.exit(1);
    }
  };
  
  insertData();
  