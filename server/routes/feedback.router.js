const express = require('express');
const feedbackRouter = express.Router();
const pool = require('../modules/pool');


// POST endpoint
feedbackRouter.post('/',  (req, res) => {
    let newFeedback = req.body;
    console.log(`Adding feedback response from client`, newFeedback);
  
    let queryText = `INSERT INTO "feedback" ("feeling", "understanding", "support", "comments", "memory")
                     VALUES ($1, $2, $3, $4, $5)`;
    let queryParams= [
        newFeedback.feeling,
        newFeedback.understanding,
        newFeedback.support,
        newFeedback.comments,
        newFeedback.memory
    ]
      pool.query(queryText, queryParams)
      .then(response => {
        console.log('Successful POST on server side', response);
        res.sendStatus(201);
      })
      .catch(error => {
        console.log(`Error adding new feedback`, error);
        res.sendStatus(500);
      });
  });


module.exports = feedbackRouter;