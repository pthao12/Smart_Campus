// paymentModel.js
import connection from "../connect/connect";

export class Payment {
  constructor(studentID, balance, debt, amount, paymentDate) {
    this.studentID = studentID;
    this.balance = balance;
    this.debt = debt;
    this.amount = amount;
    this.paymentDate = paymentDate;
  }

  static getAllPayments(callback) {
    connection.query('SELECT * FROM payments', callback);
  }

  static getPaymentByStudentID(studentID, callback) {
    connection.query('SELECT * FROM payments WHERE studentID = ?', [studentID], callback);
  }

  static addPayment(payment, callback) {
    connection.query('INSERT INTO payments SET ?', payment, callback);
  }

  static updatePayment(studentID, payment, callback) {
    connection.query('UPDATE payments SET ? WHERE studentID = ?', [payment, studentID], callback);
  }

  static deletePayment(studentID, callback) {
    connection.query('DELETE FROM payments WHERE studentID = ?', [studentID], callback);
  }
}
