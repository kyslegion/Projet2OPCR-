const express = require('express');
const path = require('path');
const cors = require('cors');
// const helmet = require('helmet');
const swaggerUi = require('swagger-ui-express');
const yaml = require('yamljs');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const swaggerDocs = yaml.load('swagger.yaml');

const db = require('./models');
const userRoutes = require('./routes/user.routes');
const categoriesRoutes = require('./routes/categories.routes');
const worksRoutes = require('./routes/works.routes');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// app.use(helmet.contentSecurityPolicy({
//   directives: {
//     defaultSrc: ["'self'", '192.168.1.55:5500']
//   }
// }));
// app.use((req, res, next) => {
//   res.header('Access-Control-Allow-Origin', '*');
//   res.header(
//     'Content-Security-Policy',
//     "default-src *; base-uri 'self'; block-all-mixed-content; font-src 'self' https: data:; form-action 'self'; frame-ancestors 'self'; img-src 'self' data:; object-src 'none'; script-src 'self'; script-src-attr 'none'; style-src 'self' https: 'unsafe-inline'; upgrade-insecure-requests"
//   );
//   next();
// });
// app.use(helmet.contentSecurityPolicy({
//   directives: {
//     defaultSrc: ['*'],
//     imgSrc: ['*']
//   }
// }));
// app.use(helmet.permittedCrossDomainPolicies({
//   permittedPolicies: 'all'
// }));
app.use('/images', express.static(path.join(__dirname, 'images')));

app.use('/api/users', userRoutes);
app.use('/api/categories', categoriesRoutes);
app.use('/api/works', worksRoutes);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// app.post("/form", (req, res) => {
//   if (req.body.email === "sophie.bluel@test.tld") {
//     if (req.body.password === "S0phie") {
//       res.status(200).send({ message: "Bievenue sophie !" });
//     }
//   }
//   else {
//     res.status(401).send({ message: "Adresse e-mail incorrecte" });
//   }
// });
db.sequelize.sync().then(() => console.log('DB is ready'));

module.exports = app;
