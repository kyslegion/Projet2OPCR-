const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  console.log("AUTH");
  console.log(req.body,"on est dans le auth");
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
    // console.log(userId);
    // console.log(req.body.userId,req.body.userId );
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
