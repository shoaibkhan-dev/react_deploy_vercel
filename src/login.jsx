const Login = () => {
    const [userData, setUserData] = useState({
        email: '',
        password: '',
    })

    const handleChangeEmail = (event) => {
        console.log(event.target.value)
        setUserData( {...userData, email: event.target.value})
    }

    const handleChangePassword = (event) => {
        console.log("password", event.target.value)
        setUserData( {...userData, password: event.target.value})
    }

    return (
        <>
        <div>
            <div className="flex p-5 item-center border border-black">
                <span className="">Email :</span>
                <input 
                onChange = "handleChange" 
                type="Email" placeholder="Enter your email" />
            </div>
            <div>
                <span className="">Password :</span>
                <input
                 onChange = "handleChange" 
                 type="password" placeholder="Enter your password"/>
            </div>
            <button></button>
        </div>
        </>
    )

};
export default Login;