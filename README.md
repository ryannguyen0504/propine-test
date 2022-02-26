## Thanh Nguyen - Coding Test

We have CSV file which has the following columns:
    - timestamp: Integer number of seconds since the Epoch
    - transaction_type: Either a DEPOSIT or a WITHDRAWAL
    - token: The token symbol
    - amount: The amount transacted

This program will import and export to a new CSV file with 2 columns:

    - token: The token symbol
    - portfolio: the balance of the token where you need to add deposits and subtract withdrawals. The value is converted to USD

## How to install
$ npm i

## How to run
$ npm start

## Solution
1. Importing CSV fle to JSON object using third party package (csvtojson)
2. Using reduce buit-in funnction to group the transactions by token
3. Calculate porforlio value: Determine type of transaction (DEPOSIT or WITHDRAWAL) then we add or subtract the amount
4. Get list of token base the on grouped transaction to build a fetch command to cryptocompare API
5. Re-calculate the porforlio value base on the rates returned from cryptocompare.  
6. Export to CSV using third party(json2csv) 