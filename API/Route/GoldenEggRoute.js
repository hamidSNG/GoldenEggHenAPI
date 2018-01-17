'use strict';
module.exports = function (app){
    var goldenEgg = require('../Controller/GlodenEggController');

    app.route('/GoldenEgg')
    .get(goldenEgg.list_all_eggs)
    .post(goldenEgg.create_a_egg);
};