const secrets = {
  dbUri: process.env.DB_URI || 'mongodb+srv://quiz:quiz@cluster0-ac84s.mongodb.net/quiz?retryWrites=true&w=majority',
};

const getSecret = (key) => secrets[key];

module.exports = { getSecret };
