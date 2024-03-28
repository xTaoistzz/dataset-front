import { useState } from "react"

export default function Verify(){
    const [verifiedCode, setVerifiedCode] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:5000/verify',{
                method: 'POST',
                headers: {
                    'Content-Type':'application/json',
                },
                body: JSON.stringify({ verifiedCode }),
            });
            const data = await response.json();
            console.log('Verification response : ', data);
        } catch (error) {
            console.error('Error verifying code:', error);
        }
    };
    return (
        <>
            <div>
                    <form onSubmit={ handleSubmit }>
                        <label htmlFor="verifiedCode">Verification Code : </label>
                        <input
                            type="text"
                            id="verifiedCode"
                            value={verifiedCode}
                            onChange={(e) => setVerifiedCode(e.target.value)}
                        />
                        <button type="submit">Verify</button>
                    </form>
            </div>
        </>
    )
}