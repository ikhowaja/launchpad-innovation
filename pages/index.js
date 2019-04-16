
import Link from 'next/link'
import Button from 'react-bootstrap/Button';

const Index = () => (
    <div>
    <h1 class="text-center">Welcome To LiveUp!!</h1>
    <Link href="/login">
        <button>Login</button>
    </Link>
    <Link href="/register">
    <button>Register</button>  
    </Link>   
    </div>
  )
  
  export default Index