import sendMail from '@/utilities/sendMail';
import validateToken from '@/utilities/validateToken';

export default async function handler(req, res) {
  return new Promise(resolve => {
    if (req.method === 'POST' && req.body?.from &&
      req.body.subject && req.body.message &&
      req.body.name && validateToken(req.body.token)) {

      sendMail({
        from: req.body.from,
        name: req.body.name,
        subject: req.body.subject,
        message: req.body.message
      }).then(info => {
        res.status(200).send('success');
        resolve();
      }).catch(e => {
        console.log(e);
        res.status(500).send(`Send your email directly to ${process.env.TO_EMAIL}`);
        resolve();
      });

    } else {
      res.status(400).send('Try again in a few minutes.');
      return resolve();
    }
  })
}
