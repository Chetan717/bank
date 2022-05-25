function withdraw(req, res) {
    const amount = parseFloat(req.body.amount);
    res.myDataClient
      .collection("accounts")
      .findOne({ currentToken: req.body.token }, (err, result) => {
        if (err) return res.status(400).send(`Error. Account not found.`);
        const amount = result.amount;
        if (amount > amount) return res.status(400).send(`Insufficient Funds`);
        const newAmount = amount - amount;
        res.myDataClient
          .collection("accounts")
          .updateOne(
            { currentToken: req.body.token },
            { $set: { amount: newAmount } }
          );
  
        res.status(200).send(`
            You have successfully withdrawn ${amount} from your account.`);
      });
  }
  
  module.exports = withdraw;