var express = require('express');
var router = express.Router();

//Create paper
var Paper = require('../models/paper');

router.route('/')
    .post(function(req, res) {
        var paper = new Paper();
        paper.name = req.body.name;

        //save the paper
        paper.save(function(err) {
            if(err)
                res.send(err);
            res.json({message : 'Paper Created! '});
        });
    })

    .get(function(req, res) {
        Paper.find(function(err, papers){
           if(err)
            res.send(err);
           res.json(papers);
        });
    });


router.route('/:paper_id')
    .get(function(req, res) {
        Paper.findById(req.params.paper_id, function(err, paper){
            if(err)
                res.send(err);
            res.json(paper);
        });
    })

    .put(function(req, res) {
        Paper.findById(req.params.paper_id, function(err, paper){
            if(err)
                res.send(err);
            paper.name = req.body.name;

            //save the paper
            paper.save(function(err) {
                if(err)
                    res.send(err);
                res.json({message : 'Paper Updated!'});
            });

        });
    })

    .delete(function(req, res) {
       Paper.remove({
           _id: req.params.paper_id
       }, function(err, paper){
            if(err)
                res.send(err);
            res.json({message: "Paper deleted!"})
       });
    });


module.exports = router;
