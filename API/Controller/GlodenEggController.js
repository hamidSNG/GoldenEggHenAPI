var mongoose = require('mongoose'),

signal = mongoose.model('signal');

exports.list_all_eggs = function (err,res){
  signal.find({}, function(err, eggs) {
    if (err)
      res.send(err);
    res.json(eggs);
  });
};


exports.create_a_egg = function(req, res) {
    var new_egg = new signal(req.body);
    new_egg.save(function(err, egg) {
      if (err)
        res.send(err);
      res.json(egg);
    });
  };
  