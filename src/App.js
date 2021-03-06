import './App.css'
import Profile from './components/Profile/Profile'
import user from '../src/components/Profile/user.json'
import Statistics from './components/Statistics/Statistics'
import statisticalData from '../src/components/Statistics/statistical-data.json'
import FriendList from './components/FriendList/FriendList'
import friends from '../src/components/FriendList/friends.json'
import TransactionHistory from '../src/components/TransactionHistory/TransactionHistory'
import transactions from '../src/components/TransactionHistory/transactions.json'
const App = () => (
  <>
    <Profile
  name={user.name}
  tag={user.tag}
  location={user.location}
  avatar={user.avatar}
  stats={user.stats}
    />,
<Statistics title="Upload stats" stats={statisticalData} />,
<FriendList friends={friends} />,
<TransactionHistory items={transactions} />,
</>
    
);
export default App;
