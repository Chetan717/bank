function deposit(req, res) {

    
    
    const amount = parseFloat(req.body.amount);
    res.myDataClient
      .collection("accounts")
      .findOne({ currentToken: req.body.token }, (err, result) => {
        if (err) return res.status(400).send(`Error. Account not found.`);
        const newAmount = result.amount + amount;
        res.myDataClient
          .collection("accounts")
          .updateOne(
            { currentToken: req.body.token },
            { $set: { amount: newAmount } }
          ); 
  
        res.status(200).send(`
            You have successfully deposited ${amount} into your account.`);
      });
  }
  
  module.exports = deposit;