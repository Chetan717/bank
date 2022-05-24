import { useState } from "react";
import { useDispatch } from "react-redux";
import { balance } from "../features/accounts/accountSlice";

function AccountItem({ account }) {
  const dispatch = useDispatch();
  const [amount, setAmount] = useState("");
  const [errorDeposit, setErrorDeposit] = useState("");

  const withdraw = () => {
    if (amount < account.amount) {
      const id = account._id;
      const newAmount = -Math.abs(amount);
      dispatch(balance({ id, newAmount }));
      setErrorDeposit(false);
    } else {
      setErrorDeposit(true);
    }
  };

  const deposit = () => {
    const id = account._id;
    dispatch(balance({ id, amount }));
  };

  return (
    <div className="account">
      {/* <div>{new Date(account.createdAt).toLocaleString('en-US')}</div> */}
      <h2 >{account.name}</h2>
      <h2 className="account-title-2">{account.amount} SEK</h2>
      {/* <button
        onClick={() => dispatch(deleteAccount(account._id))}
        className="close"
      >
        X
      </button> */}
      <input
      className="account-input"
        type="number"
        name="amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <button className="balance-btn-1" onClick={withdraw}>Withdraw</button>
      <button className="balance-btn-2" onClick={deposit}>Deposit</button>

      {errorDeposit && (
        <p>You can not withdraw more than what you have in your account</p>
      )}
    </div>
  );
}

export default AccountItem;
