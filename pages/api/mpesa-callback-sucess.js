// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async function handler(req, res) {
  const fakePayment = {
    PhoneNumber: "254",
  };

  res.end(JSON.stringify(fakePayment));
}
