// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from "axios";

export default async function handler(req, res) {
  try {
    const secret = process.env.SECRETKEY;
    const consumer = process.env.CONSUMERKEY;
    const auth = new Buffer.from(`${consumer}:${secret}`).toString("base64");

    // console.log('Auth to saf', `Basic ${auth}`);
    const url = "https://sandbox.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials";
    const config =  {headers: {'Authorization': `Basic ${auth}`}};

    const data = await axios.get(url, config);

    console.log('Data from saf', data.data);
    res.end(JSON.stringify(data.data));
  } catch (error) {
    console.log(error)
    res.end(JSON.stringify({}));
  }
}
