import { Configuration, OpenAIApi } from "openai";
require('dotenv').config();
const configuration = new Configuration({
  // apiKey: process.env.OPENAI_API_KEY,
  apiKey: process.env.API_KEY,
});
const openai = new OpenAIApi(configuration);

export default async function (req, res) {
  const completion = await openai.createCompletion("text-davinci-001", {
    prompt: generatePrompt(req.body.animal),
    temperature: 0.1,
    max_tokens: 150,
  });

  res.status(200).json({ result: completion.data.choices[0].text });
  //res.status(200).json({ result: "TESTING" });  
}

function generatePrompt(animal) {
  const capitalizedAnimal =
    animal[0].toUpperCase() + animal.slice(1).toLowerCase();
  return `Suggest three stock tickers that would do well if the event happens

  Event: oil prices rise
  Stocks: XLE, XOM, BP
  Event: bitcoin moons
  Stocks: COIN, SQ, NVDA
  Event: genetic modification is successful
  Stocks: CRSPR, EDIT, BEAM
  Event: fast food companies are having high success with attracting new markets
  Stocks: MCD, DPZ, YUM
  Event: we reach Mars
  Stocks: SPCE, RKLB, BA
  Event: war breaks out
  Stocks: ATK, BA, GD
  Event: gas prices rise
  Stocks: TSLA, CVX, DVN
  Event: covid is cured
  Stocks: RCL, CCL, NCLH
  Event: consumers are trying to be healthier
  Stocks: PTON, SFM, BYND
  Event: trump wins reelection
  Stocks: BAC, JPM, NYT
  Event: consumer spending increases
  Stocks: NKE, EBAY, AMZN
  Event: real estate market crashes,
  Stocks: COST, WMT, REYN
  Event: inflation increases
  Stocks: GLD, SLV, VTIP
  Event: russia loses war
  Stocks: GOOGL, AAPL, SNP
  Event: ${capitalizedAnimal}
  Stocks:`;
}

// `Which stocks to buy if ${capitalizedAnimal}?`

/* `Suggest three good stock tickers to buy today.

Industry: Energy
Stock Tickers: MPC, CLR, HFC
Industry: Materials
Stock Tickers: X, CLF, STLD
Industry: Healthcare
Stock Tickers: SAGE, BIO, WBA
Industry: Financials
Stock Tickers: UWMC, RKT, VOYA
Industry: ${capitalizedAnimal}
Names:`;  */
