/* Design a cash register drawer function checkCashRegister() that accepts purchase price as the first argument (price), payment as the second argument (cash), and cash-in-drawer (cid) as the third argument.

cid is a 2D array listing available currency.

The checkCashRegister() function should always return an object with a status key and a change key.

Return {status: "INSUFFICIENT_FUNDS", change: []} if cash-in-drawer is less than the change due, or if you cannot return the exact change.

Return {status: "CLOSED", change: [...]} with cash-in-drawer as the value for the key change if it is equal to the change due.

Otherwise, return {status: "OPEN", change: [...]}, with the change due in coins and bills, sorted in highest to lowest order, as the value of the change key.

*/


function checkCashRegister(price, cash, cid) {
    let msg = {};
    let change = []
    let reqdChange = (cash - price).toFixed(2)
    let highestIndex = 0
    let status = 'OPEN'

    let currency = [
        ['PENNY', 0.01],
        ['NICKEL', 0.05],
        ['DIME', 0.10],
        ['QUARTER', 0.25],
        ['ONE', 1],
        ['FIVE', 5],
        ['TEN', 10],
        ['TWENTY', 20],
        ['ONE HUNDRED', 100]
    ];

    for (let i = currency.length - 1; i >= 0; i--) {
        let arrayDenom = []
        if (reqdChange > currency[i][1]) {
            highestIndex = i
            break
        } else {
            arrayDenom.push(cid[i][0])
            arrayDenom.push(0)
            change.push(arrayDenom)
        }
    }

    for (let i = highestIndex; i >= 0; i--) {
        let arrayDenom = []
        if (reqdChange <= cid[i][1]) {
            if (i === 0 && reqdChange === cid[i][1]) {
                status = 'CLOSED'
            }
            let reqdChangeforDenom = (reqdChange / currency[i][1]);
            let maxDenomAlowedNo = Math.floor(reqdChangeforDenom);
            let maxDenomAmt = (currency[i][1] * maxDenomAlowedNo);
            reqdChange = (reqdChange - maxDenomAmt).toFixed(2)

            arrayDenom.push(cid[i][0])
            arrayDenom.push(maxDenomAmt)

            change.push(arrayDenom)
        } else {
            arrayDenom.push(cid[i][0])
            arrayDenom.push(cid[i][1])
            reqdChange = reqdChange - cid[i][1]
            change.push(arrayDenom)
        }

    }

    if (reqdChange > 0) {
        status = 'INSUFFICIENT_FUNDS';
        change = [];

    }

    if (status === 'OPEN') {


        let a = change.filter((el) => {
            return el[1] > 0;
        })

        change = a
    }


    change.reverse();

    msg = Object.assign({
        status: status,
        change: change.sort(function(a, b) {
            return b[1] - a[1]
        })
    }, msg)
    return (msg)
}

checkCashRegister(19.5, 20, [
    ["PENNY", 1.01],
    ["NICKEL", 2.05],
    ["DIME", 3.1],
    ["QUARTER", 4.25],
    ["ONE", 90],
    ["FIVE", 55],
    ["TEN", 20],
    ["TWENTY", 60],
    ["ONE HUNDRED", 100]
]);