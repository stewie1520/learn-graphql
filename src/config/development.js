module.exports = {
  session: {
    secret: process.env.SESSION_SECRET,
  },
  connection: {
    port: process.env.PORT,
  },
  db: {
    uri: process.env.MONGODB_URI,
  },
};
