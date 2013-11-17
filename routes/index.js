
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { 
      title: 'Express' }
      );
};

exports.app = function(req, res){
  res.render('bootspart', { 
      title: 'this is a demo page!',
      header:'doo doo doo' }
      );
};