import { Helmet } from "react-helmet"
import { useLocation, useNavigate } from "react-router-dom"
import { useAuth } from "../../context/AuthContext"

export default function Login() {

    const navigate = useNavigate()

    const location = useLocation()

    console.log(location)

    const { setUser } = useAuth()

    const loginHandle = () => {
        setUser({
            id: 1,
            username: 'tayfunerbilen',
        })

        navigate(location?.state?.return_url || '/', {
            replace: true,
            state: {
                name: 'ceyhun'
            }
        })
    }

    return (
        <div>
            <Helmet>
                <title>Login</title>
            </Helmet>
            Login <br />
            <button onClick={loginHandle}>Giriş Yap</button>
        </div>
    )
}
