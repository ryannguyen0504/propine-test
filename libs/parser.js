import csv from 'csvtojson';
import { Parser } from 'json2csv';
import fs from 'fs';


export const csvToJson = async (str) => {    
    const csvData = await csv({
      noheader: false
    }).fromFile(str);
    return csvData;  
};

export const jsonToCsv = (fields, jsonObject) => {    

  const opts = { fields };

  try {
    const parser = new Parser(opts);
    const csv = parser.parse(jsonObject);

    fs.writeFile('portfolio.csv', csv, function (err) {
      if (err) return console.log(err);
      console.log('Something wrong while write to file > portfolio.csv');
    });

    console.log(csv);
  } catch (err) {
    console.error(err);
  }
};

