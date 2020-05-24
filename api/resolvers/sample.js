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
    type_id: 1,
    is_public: true,
    is_active: true,
    date_created: 'March 20, 2020',
  },
  {
    id: 2,
    user_id: 1,
    title: 'Sample Quiz 2',
    type_id: 2,
    is_public: true,
    is_active: true,
    date_created: 'March 20, 2020',
  },
];

const sets = [
  {
    id: 1,
    quiz_id: 1,
    question: 'Sample',
    correct_answer: 'Sample',
    wrong_answer_a: 'Sample',
    wrong_answer_b: 'Sample',
  },
  {
    id: 2,
    quiz_id: 2,
    question: 'Sample',
    correct_answer: 'Sample',
    wrong_answer_a: 'Sample',
    wrong_answer_b: 'Sample',
  },
];

const attempts = [
  {
    id: 1,
    quiz_id: 1,
    user_id: 1,
    user_score: 6,
    max_score: 10,
    date_created: 'March 20, 2020',
  },
  {
    id: 2,
    quiz_id: 2,
    user_id: 2,
    user_score: 6,
    max_score: 10,
    date_created: 'March 20, 2020',
  },
];

const types = [
  {
    id: 1,
    title: 'Fun',
  },
  {
    id: 2,
    title: 'Trivia',
  },
];

module.exports = {
  users,
  quizzes,
  sets,
  attempts,
  types,
};
