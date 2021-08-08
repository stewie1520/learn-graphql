class UserNotFoundError extends Error {
  constructor({ _id, email }) {
    super('User not found');
    this.name = 'UserNotFoundError';
    this.data = { _id, email };
  }
}

module.exports = { UserNotFoundError };
