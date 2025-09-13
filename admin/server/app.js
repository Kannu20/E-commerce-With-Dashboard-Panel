// // 1. Import core modules
// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require("cors");
// require('dotenv').config();

// // 2. Initialize express app
// const app = express();

// // 3. Middleware
// app.use(cors());         // 🔄 CORS sabse upar
// app.use(express.json()); // JSON parse
// app.use(express.urlencoded({ extended: true }));
// app.use('/api/categories', require('./routes/category')); // path confirm

// // 4. Import routes
// const productRoutes = require('./routes/product');
// const categoriesRoutes = require('./routes/category');

// // 5. Use routes
// app.use('/api/product', productRoutes);
// app.use('/api/categories', categoriesRoutes);

// // 6. Root route
// app.get('/', (req, res) => {
//   res.send('✅ Server is working!');
// });

// // 7. Custom middleware
// const middleware = require('./middleware/middleware');
// app.use(middleware.logger);
// app.use(middleware.notFound);
// app.use(middleware.errorHandler);

// // 8. Connect to MongoDB
// mongoose.connect(process.env.CONNECTION_STRING, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// })
// .then(() => {
//   console.log('✅ Database Connection is ready...');
// })
// .catch((err) => {
//   console.log('❌ Database Connection Error:', err);
// });

// // 9. Start the server
// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => {
//   console.log(`🚀 Server running on http://localhost:${PORT}`);
// });

// 1. Import core modules
const express = require('express');
const mongoose = require('mongoose');
const cors = require("cors");
require('dotenv').config();

// 2. Initialize express app
const app = express();

app.use(cors({
  origin: "http://localhost:3001",   // sirf frontend allow hoga
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));



// 3. Middleware
app.use(cors());         // 🔄 CORS sabse upar
app.use(express.json()); // JSON parse
app.use(express.urlencoded({ extended: true }));

// 4. Import routes
const productRoutes = require('./routes/product');
const categoryRoutes = require('./routes/category');

// 5. Use routes
app.use('/api/products', productRoutes); // ✅ plural
app.use('/api/categories', categoryRoutes); // ✅ single time

// 6. Root route
app.get('/', (req, res) => {
  res.send('✅ Server is working!');
});

// 7. Custom middleware
const middleware = require('./middleware/middleware');
app.use(middleware.logger);
app.use(middleware.notFound);
app.use(middleware.errorHandler);

// 8. Connect to MongoDB
mongoose.connect(process.env.CONNECTION_STRING, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log('✅ Database Connection is ready...');
})
.catch((err) => {
  console.log('❌ Database Connection Error:', err);
});

// 9. Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
