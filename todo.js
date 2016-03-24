var express = require("express");

var router = express.Router();

var todoItems=[{id:1,
                desc:"Foo"},
       {id:1,
        desc:"Bar"},
       {id:1,
        desc:"Zoo"}
     ];


router.get('/',function(req, res){
res.render('index',{
  title:"My App",
  items: todoItems
     });
});


router.post("/add",function(req, res){
  var newItem=req.body.newItem;
  todoItems.push({
    id: todoItems.length + 1,
    desc:newItem
  });
  res.redirect("/");
  //console.log(newItem);
});

//params placeholder
router.get('/login/:id',function(req, res){
res.send("Hello Id Number:"+ req.params.id);
});

module.exports = router;
