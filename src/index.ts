import express, { Request, Response } from 'express';
import cors from 'cors';

const app = express();
const port = 3005;

app.get('/', cors(), (req: Request, res: Response) => {
	const { id } = req.query;

	res.json({ id });

	// res.send('Some error')
});

app.use(express.static(`${__dirname}/public`));

app.listen(port, () => {
	console.log(
		`Application is running on port ${port}: http://localhost:3005/ try http://localhost:3005/?id=someId or http://localhost:3005/static/index.html`
	);
	console.log(
		'Static files have to be put in ./public/static and will be copied to ./dist if npm run deploy is executed.'
	);
});
