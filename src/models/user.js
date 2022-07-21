const { fetchAll } = require("../lib/postgres.js");

const GETUSER = "select * from users;";
const POSTUSER = "insert into users(username, age) values ($1, $2) returning *;";
const PUTUSER = " update users set username = $2 where user_id = $1 returning *  "
const DELETEUSER = " delete from users where user_id = $1 returning *"

const getUser = async () => {
  try {
    return await fetchAll(GETUSER);
  } catch (error) {
    console.error(error);
  }
};

const postUser = async ({ username, age }) => {
  try {
    return await fetchAll(POSTUSER, username, age);
  } catch (error) {
    console.error(error);
  }
};

const putUser = async ({ userId, username }) => {
  try {
    return await fetchAll(PUTUSER, userId, username);
  } catch (error) {
    console.error(error);
  }
};

const deleteUser = async ({ userId }) => {
  try {
    return await fetchAll(DELETEUSER, userId);
  } catch (error) {
    console.error(error);
  }
};

module.exports = {
  getUser,
  postUser,
  putUser,
  deleteUser
};
