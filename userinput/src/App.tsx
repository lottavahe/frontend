import { useState } from 'react'
import './App.css'

function App() {
  type User = {
    firstName: string;
    lastName: string;
    email: string;
    }

  const [user, setUser] = useState<User>({} as User);

  const [isSubmitted, setIsSubmitted] = useState(false);
 
  const handleSubmit = (event: React.SubmitEvent<HTMLFormElement>) => {event.preventDefault();      
      alert("Hello " + user.firstName);
    };

  return (
    <form onSubmit={handleSubmit}>
    <p>Hello {user.firstName} {user.lastName}, {user.email}</p> <br />
      <input
        placeholder="Enter your firstname here..."
        value={user.firstName}
        onChange={event => 
          setUser({...user, firstName:event.target.value})}     
        /> <br />
      <input
        placeholder="Enter your lastname here..."
        value={user.lastName}
        onChange={event => 
          setUser({...user, lastName:event.target.value})}     
        /> <br />
      <input
        placeholder="Enter your email here..."
        value={user.email}
        onChange={event => 
          setUser({...user, email:event.target.value})}     
        /> <br />

        <input type="submit" value ="Submit" />
    </form>
  )
}

export default App
