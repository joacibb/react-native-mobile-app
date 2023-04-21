import { Router } from 'express';
import { createTask, deleteTask, getTask, getTaskCount, getTasks, updateTask } from '../controllers/tasks'

const router = Router();

/**
 * @swagger
 * tags:
 *    name: Tasks
 *    description: Tasks endpoint
 */

/**
 * @swagger
 * /tasks:
 *  get:
 *     summary: Get all tasks
 *     tags: [Tasks]
 */
router.get('/tasks', getTasks)

/**
 * @swagger
 * /tasks/count:
 *  get:
 *     summary: Get tasks count
 *     tags: [Tasks]
 */
router.get('/tasks/count',getTaskCount)

/**
 * @swagger
 * /tasks/{id}:
 *  get:
 *     summary: Get task by ID
 *     tags: [Tasks]
 */
router.get('/tasks/:id', getTask)

/**
 * @swagger
 * /tasks:
 *  post:
 *     summary: Crate a new task
 *     tags: [Tasks]
 */
router.post('/tasks',createTask)

/**
 * @swagger
 * /tasks:
 *  delete:
 *     summary: Delete a task by ID
 *     tags: [Tasks]
 */
router.delete('/tasks/:id',deleteTask)

/**
 * @swagger
 * /tasks:
 *  put:
 *     summary: Edit a task by ID
 *     tags: [Tasks]
 */
router.put('/tasks/:id',updateTask)

export default router