import { incomeModel } from "../models/income.js";

export const add_income = async (req, res) => {
  try {
    const income = req.body;
    const IncomeAdded = new incomeModel(income);
    await IncomeAdded.save();
    res.status(201).send(IncomeAdded);
  } catch (error) {
    res.status(500).send("There Is An Error", error.message);
  }
};
