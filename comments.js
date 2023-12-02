// Create web server

// Import module
const express = require('express');
const router = express.Router();
const db = require('../models');
const { Op } = require('sequelize');
const { Comment } = require('../models');

// Create route
router.post('/:id', async (req, res) => {
    // Check user
    if(req.user) {
        // Create comment
        await db.Comment.create({
            UserId: req.user.id,
            PostId: req.params.id,
            comment: req.body.comment
        });
        // Redirect
        res.redirect(`/posts/${req.params.id}`);
    } else {
        // Redirect
        res.redirect('/users/login');
    }
});

router.delete('/:id', async (req, res) => {
    // Check user
    if(req.user) {
        // Delete comment
        await db.Comment.destroy({
            where: {
                [Op.and]: [
                    { UserId: req.user.id },
                    { id: req.params.id }
                ]
            }
        });
        // Redirect
        res.redirect(`/posts/${req.body.postId}`);
    } else {
        // Redirect
        res.redirect('/users/login');
    }
});

// Export module
module.exports = router;