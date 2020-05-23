const users = [
  {
    id: 1,
    full_name: 'Gabriel',
    username: 'gabtan99',
    email_address: 'gabtan99@gmail.com',
    password: 'Hello',
    date_created: 'March 20, 2020',
  },
  {
    id: 2,
    full_name: 'Gabriel',
    username: 'gabtan99',
    email_address: 'gabtan99@gmail.com',
    password: 'Hello',
    date_created: 'March 20, 2020',
  },
];

const quizzes = [
  {
    id: 1,
    user_id: 1,
    title: 'Sample Quiz',
    is_public: true,
    is_active: true,
    date_created: 'March 20, 2020',
  },
];

module.exports = {
  users,
  quizzes,
};
