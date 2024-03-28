import { useState } from "react"

export default function Register(){
const [username, setUsername] = useState('');
const [email , setEmail] = useState('');
const [password, setPassword] = useState('');
const [comPassword, setComPassword] = useState('');


const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const response = await fetch('http://localhost:5000/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body : JSON.stringify({ username, email, password, comPassword }),
        });
        const data = await response.json();
        console.log('Server response: ', data);

    } catch (error) {
        console.error('Error submitting form:', error)
    } 
};
    return (
        <>
            <div className=" text-center bg-slate-500">
                <form onSubmit={handleSubmit} className="space-x-5 p-3">
                    <input
                        type="text"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <input
                        type="password"
                        placeholder="Confirm Password"
                        value={comPassword}
                        onChange={(e) => setComPassword(e.target.value)}
                    />
                    <button type="submit" className="bg-white p-1">Submit</button>
                </form>
            </div>
        </>
    )
}