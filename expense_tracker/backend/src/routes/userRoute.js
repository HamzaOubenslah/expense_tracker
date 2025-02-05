import express from 'express';
import { add_income } from '../controllers/transactions.js';

const Route=express.Router();


Route.post('/add-income',add_income)

export default Route;