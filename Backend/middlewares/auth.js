const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    return res.status(401).json({
      error: new Error('Missing authentication header')
    });
  }

  const token = authHeader.split(' ')[1];
  if (!token) {
    return res.status(401).json({
      error: new Error('Missing authentication token')
    });
  }

  try {
    const decodedToken = jwt.verify(token, process.env.TOKEN_SECRET);
    const userId = decodedToken.userId;
    req.auth = { userId };
    console.log("authenticated!");
    next();
  } catch (error) {
    console.error(error);
    return res.status(401).json({
      error: new Error('Invalid authentication token')
    });
  }
};
