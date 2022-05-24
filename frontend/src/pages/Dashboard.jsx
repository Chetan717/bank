import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import AccountForm from '../components/AccountForm'
import AccountItem from '../components/AccountItem'
import Spinner from '../components/Spinner'
import { getAccounts, reset } from '../features/accounts/accountSlice'

function Dashboard() {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { user } = useSelector((state) => state.auth)
  const { accounts, isLoading, isError, message } = useSelector(
    (state) => state.accounts
  )

  useEffect(() => {
    if (isError) {
      console.log(message)
    }

    if (!user) {
      navigate('/login')
    }

    dispatch(getAccounts())

    return () => {
      dispatch(reset())
    }
  }, [user, navigate, isError, message, dispatch])

  if (isLoading) {
    return <Spinner />
  }

  return (
    <>
      <section className='heading'>
        <h1>Welcome {user && user.name}</h1>
        <p>Accounts Dashboard</p>
      </section>

      <AccountForm />

      <section className='content'>
        {accounts.length > 0 ? (
          <div className='accounts'>
            {accounts.map((account) => (
              <AccountItem key={account._id} account={account} />
            ))}
          </div>
        ) : (
          <h3>You have not set any accounts</h3>
        )}
      </section>
    </>
  )
}

export default Dashboard
