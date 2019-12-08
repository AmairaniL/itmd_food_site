const express = require('express');
//call express module
const router = express.Router();

//200 = ok
router.get('/', (req, res, next) => {
    res.status(200).json({
      message: 'Handling the GET request to /users.'
    });
});

//have to put the post request
//good practice to put 201=created  for post
router.post('/', (req, res, next) => {
    res.status(201).json({
      message: 'Handling the POST request to /users.'
    });
});

//especify what is going to be passed, Can Handle anythign like ID
router.get('/:userID', (req, res, next) => {
  const id = req.params.userID;
  if (id === 'special') {
    res.status(200).json({
      message: 'This is the special user ID',
      id: id
    });
  } else {
    res.status(200).json({
      message: 'You passed the normal user ID',
      id: id
    });
  };
});

//especify what is going to be passed, Can Handle anythign like ID
router.post('/:userID', (req, res, next) => {
  const id = req.params.userID;
  if (id === 'special') {
    res.status(200).json({
      message: 'This is the user ID',
      id: id
    });
  } else {
    res.status(200).json({
      message: 'You passed the user ID',
      id: id
    });
  };
});

// updating one portion of the request
router.patch('/:userID', (req, res, next) => {
    const id = req.params.userID;
    res.status(200).json({
      message: 'Updated the Users',
      id: id
    });
});

// deleting the route
router.delete('/:userID', (req, res, next) => {
    const id = req.params.userID;
    res.status(200).json({
      message: 'Deleted the User',
      id: id
    });
});

//export the router from call back
module.exports = router;
