export default async function validateToken(token) {
    if (!token) return false;

    const res = await fetch('https://www.google.com/recaptcha/api/siteverify', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            secret: process.env.RECAPTCHA_SECRET_KEY,
            response: token
        })
    })
        .then(response => response.json())
        .catch(console.error);

    return res.success;
}