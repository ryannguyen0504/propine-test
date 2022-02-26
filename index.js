
import { csvToJson, jsonToCsv } from './libs/parser.js';
import { groupAndSumByToken, convertUnit } from './libs/transaction.js';
import getRates from './libs/rates.js';

const fields = ['token', 'portfolio'];
const inputFile='transactions.csv';
const unit = 'USD';

try {
  const transactions = await csvToJson(inputFile);
  let portfolios = groupAndSumByToken(transactions);

  const tokens = portfolios.map(x => x.token);
  const rates = await getRates(tokens, unit);

  portfolios = convertUnit(portfolios, rates, unit);
  jsonToCsv(fields, portfolios);  
} catch (error) {
  console.log(error);
}
