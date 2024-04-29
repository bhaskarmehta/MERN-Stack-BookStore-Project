import express from 'express';
import { getBook } from '../controller/book.controller.js';

const router = express.Router();

router.get('/',getBook); // It means that when we go to "/" path then getBook method of controller should run.

export default router;

