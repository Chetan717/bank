import axios from "axios";

const API_URL = "/api/accounts/";

// Create new account
const createAccount = async (accountData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.post(API_URL, accountData, config);

  return response.data;
};

// Get user accounts
const getAccounts = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.get(API_URL, config);
  console.log("response.data", response.data);
  return response.data;
};

// Delete user account
const deleteAccount = async (accountId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.delete(API_URL + accountId, config)

  return response.data
};

// balance user account
const balance = async (data, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.post(API_URL+'balance/' + data.id,data, config);

  return response.data;
};

const accountService = {
  createAccount,
  getAccounts,
  deleteAccount,
  balance
};

export default accountService;
