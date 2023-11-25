import { Payment } from "../modules/PaymentModule.js";

export const getAllPayments = (req, res) => {
  Payment.getAllPayments((error, results) => {
    if (error) {
      console.error('Error in getAllPayments:', error);
      res.status(500).send('Internal Server Error');
    } else {
      res.status(200).json(results);
    }
  });
};

export const getPaymentByStudentID = (req, res) => {
  const { studentID } = req.params;

  Payment.getPaymentByStudentID(studentID, (error, results) => {
    if (error) {
      console.error('Error in getPaymentByStudentID:', error);
      res.status(500).send('Internal Server Error');
    } else {
      res.status(200).json(results);
    }
  });
};

export const addPayment = (req, res) => {
  const { studentID, balance, debt, amount, paymentDate } = req.body;
  const payment = new Payment(studentID, balance, debt, amount, paymentDate);

  Payment.addPayment(payment, (error, results) => {
    if (error) {
      console.error('Error in addPayment:', error);
      res.status(500).send('Internal Server Error');
    } else {
      res.status(200).json(results);
    }
  });
};

export const updatePayment = (req, res) => {
  const { studentID } = req.params;
  const { balance, debt, amount, paymentDate } = req.body;
  const payment = { balance, debt, amount, paymentDate };

  Payment.updatePayment(studentID, payment, (error, results) => {
    if (error) {
      console.error('Error in updatePayment:', error);
      res.status(500).send('Internal Server Error');
    } else {
      res.status(200).json(results);
    }
  });
};

export const deletePayment = (req, res) => {
  const { studentID } = req.params;

  Payment.deletePayment(studentID, (error, results) => {
    if (error) {
      console.error('Error in deletePayment:', error);
      res.status(500).send('Internal Server Error');
    } else {
      res.status(200).json(results);
    }
  });
};
