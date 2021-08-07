const definition = {
  email: {
    type: String,
    index: true,
    unique: true,
    require: true,
  },
  password: {
    type: String,
    require: true,
  },
  firstName: {
    type: String,
    require: true,
  },
  lastName: {
    type: String,
    require: true,
  },
  verifiedAt: {
    type: Date,
  },
};

const options = {
  timestamps: true,
};

module.exports = {
  definition,
  options,
};
