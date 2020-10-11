/**
 * This is a simulated database of users in the system at a given point in time
 */
const listOfUsers = [
  {
    id: 1,
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@gmail.com',
    dob: 1595493789,
  },
  {
    id: 2,
    firstName: 'Harry',
    lastName: 'Potter',
    email: 'harry.potter@gmail.com',
    dob: -250414200,
  },
  {
    id: 3,
    firstName: 'Albus',
    lastName: 'Dumbledore',
    email: 'albus.dumbledore@gmail.com',
    dob: 800294400,
  },
];

exports.createUser = async (req, res) => {
  // A simple implementation ignoring any backend checks
  const { userDetails } = req.body;
  const newUserObject = {
    firstName: userDetails.firstName,
    lastName: userDetails.lastName,
    email: userDetails.email,
    dob: userDetails.dob,
  };

  listOfUsers.push({ ...newUserObject, id: listOfUsers.length + 1 });
  res.sendStatus(201);
};

exports.retrieveUsers = async (req, res) => {
  res.status(200).send({ allUsers: listOfUsers });
};

exports.updateUser = async (req, res) => {
  const { userDetails } = req.body;
  const userIdToUpdate = userDetails.id;
  listOfUsers[userIdToUpdate - 1] = userDetails;
  res.sendStatus(204);
};

exports.deleteUser = async (req, res) => {
  const userIdToDelete = req.params.id;
  listOfUsers.splice(userIdToDelete - 1, 1);
  res.sendStatus(204);
};
