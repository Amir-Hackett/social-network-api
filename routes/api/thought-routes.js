const router = require('express').Router();

const {
    getAllThoughts,
    getThoughtById,
    addThought,
    updateThought,
    deleteThought
} = require('../../controllers/thought-controller');

// set up GET all thoughts at /api/thoughts
router.route('/')
    .get(getAllThoughts)

// set up POST at /api/thoughts/:userId
router.route('/:userId')
    .post(addThought)

// set up GET single, PUT, and DELETE thought at /api/thoughts/:userId/:thoughtId
router.route('/:userId/:thoughtId')
    .get(getThoughtById)
    .put(updateThought)
    .delete(deleteThought)

module.exports = router;