
import db from '../connect/connect.js';

export const getAllPayments = (req, res) => {
    let sql = "SELECT * FROM mydb.payments";

    db.query(sql, (err, payments) => {
        if (err) {
            console.error(err);
            res.status(500).send('Internal Server Error');
        } else {
            res.render('payment', { payments });
        }
    });
};

export const getPaymentById = (req, res) => {
    const { id } = req.params;
    let sql = "SELECT * FROM mydb.payments WHERE studentID = ?";

    db.query(sql, [id], (err, payment) => {
        if (err) {
            console.error(err);
            res.status(500).send('Internal Server Error');
        } else {
            res.json(payment);
        }
    });
};

export const showAddPaymentForm = (req, res) => {
    res.render('addPaymentForm');
};



export const addPayment = (req, res) => {
    const { studentID, amount } = req.body;
    const defaultBalance = 0;
    const defaultDebt = 0;

    // Check if the studentID already exists
    let checkSql = "SELECT * FROM mydb.payments WHERE studentID = ?";
    db.query(checkSql, [studentID], (checkErr, checkResult) => {
        if (checkErr) {
            console.error(checkErr);
            res.status(500).send('Internal Server Error');
        } else {
            if (checkResult.length > 0) {
                // If studentID exists, update the existing record
                let updateSql = "UPDATE mydb.payments SET balance = balance + ?, debt = debt + ?, amount = amount + ?, paymentDate = NOW() WHERE studentID = ?";
                db.query(updateSql, [defaultBalance, defaultDebt, amount, studentID], (updateErr, updateResult) => {
                    if (updateErr) {
                        console.error(updateErr);
                        res.status(500).send('Internal Server Error');
                    } else {
                        res.redirect('/payment');
                    }
                });
            } else {
                // If studentID doesn't exist, insert a new record
                let insertSql = "INSERT INTO mydb.payments (studentID, balance, debt, amount, paymentDate) VALUES (?, ?, ?, ?, NOW())";
                db.query(insertSql, [studentID, defaultBalance, defaultDebt, amount], (insertErr, insertResult) => {
                    if (insertErr) {
                        console.error(insertErr);
                        res.status(500).send('Internal Server Error');
                    } else {
                        res.redirect('/payment');
                    }
                });
            }
        }
    });
};

export const updatePayment = (req, res) => {
    const { id } = req.params;
    const { balance, debt, amount, paymentDate } = req.body;
    let sql = "UPDATE mydb.payments SET balance = ?, debt = ?, amount = ?, paymentDate = ? WHERE studentID = ?";

    db.query(sql, [balance, debt, amount, paymentDate, id], (err, result) => {
        if (err) {
            console.error(err);
            res.status(500).send('Internal Server Error');
        } else {
            res.json(result);
        }
    });
};

export const deletePayment = (req, res) => {
    const { id } = req.params;
    let sql = "DELETE FROM mydb.payments WHERE studentID = ?";

    db.query(sql, [id], (err, result) => {
        if (err) {
            console.error(err);
            res.status(500).send('Internal Server Error');
        } else {
            res.json(result);
        }
    });
};
