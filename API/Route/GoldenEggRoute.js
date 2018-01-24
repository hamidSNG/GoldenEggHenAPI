'use strict';
module.exports = function (app){
    var goldenEgg = require('../Controller/GlodenEggController');
    var tradeClientType = require('../Controller/TradeClientTypeController');
    

    app.route('/GoldenEgg')
    .get(goldenEgg.list_all_eggs)
    .post(goldenEgg.create_a_egg);

    app.route('/TradeClientType')
    .get(tradeClientType.clientTypeHistory)
};