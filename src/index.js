// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    // Your code goes here!
    // Return an object containing the minimum number of coins needed to make change
    let exchange;

    if (currency <= 0) {
        exchange = {};
    } else if (currency > 10000) {
        exchange = {error:"You are rich, my friend! We don't have so much coins for exchange"};
    } else {
        exchange = {};
        let reminder = currency;
        if (reminder >= 50) {
            exchange.H = Math.floor(reminder/50);
            reminder = reminder % 50;
        } 
        if (reminder >=25) {
            exchange.Q = Math.floor(reminder/25);
            reminder = reminder % 25;
        }
        if (reminder >=10) {
            exchange.D = Math.floor(reminder/10);
            reminder = reminder % 10;
        }
        if (reminder >=5) {
            exchange.N = Math.floor(reminder/5);
            reminder = reminder % 5;
        }
        if (reminder != 0) {
            exchange.P = reminder;
        }
    }
    return exchange;
}
