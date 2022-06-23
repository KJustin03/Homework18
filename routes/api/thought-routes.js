const router = require('express').Router();
const {
    getThoughts,
    getSingleThought,
    createThought,
    updateThought,
    removeThought,
    addReaction,
    removeReaction,
} = require('../../controllers/thoughts-controller')

router.route('/').get(getThoughts).post(createThought);

router.route('/:thoughtId').get(getSingleThought).post(updateThought).delete(removeThought)

router.route('/:thoughtId/reactions').post(addReaction);

router.route('/:thoughtId/reactions/:reactionId').delete(removeReaction);

module.exports = router;