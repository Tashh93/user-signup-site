import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = 3001;

app.use (express.static(path.join(__dirname, '../FrontEnd')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../FrontEnd/index.html'));
});

app.post('/submit', (req, res) => {
    const {
        ['first-name']: firstName,
        ['last-name']: lastName,
        ['phone']: phone,
        ['relationshipStatus']: relationshipStatus,
        ['kindWords']: kindWords
    } = req.body;

    
console.log('📬 New Submission:');
console.log(`Name: ${firstName} ${lastName}`);
console.log(`Phone: ${phone}`);
console.log(`Relationship: ${relationshipStatus}`);
console.log(`Message: ${kindWords}`);


console.log('Form submitted');


res.send(`
    <h1>Thank you, ${firstName}! </h1>
<p>I appreciate your kind words.</p>
<p>We will be reaching out to you soon.</p> 
<p>Thanks for your support!</p>
`);


});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});


