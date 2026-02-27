const express = require('express');
const router = express.Router();
const Course = require('../models/Course');

router.get('/', async (req, res) => {
    try {
        const courses = await Course.find();
        res.json(courses);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

router.get('/:id', async (req, res) => {
    try {
        const course = await Course.findById(req.params.id);
        if (!course) {
            return res.status(404).json({ msg: 'Course not found' });
        }
        res.json(course);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

router.post('/', async (req, res) => {
    try {
        const { title, description, content, instructor, duration, difficultyLevel } = req.body;
        const newCourse = new Course({ title, description, content, instructor, duration, difficultyLevel });
        await newCourse.save();
        res.json({ msg: 'Course created successfully', course: newCourse });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

router.post('/:id/enroll', async (req, res) => {
    try {
        const { userId } = req.body;
        const course = await Course.findById(req.params.id);
        if (!course) {
            return res.status(404).json({ msg: 'Course not found' });
        }
        if (!course.enrolledUsers.includes(userId)) {
            course.enrolledUsers.push(userId);
            await course.save();
        }
        res.json({ msg: 'User enrolled successfully', course });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;