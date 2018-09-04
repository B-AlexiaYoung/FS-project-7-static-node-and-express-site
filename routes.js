const express = require('express');
const router =  express.Router();
const data = require("./data.json");
//rooutings for home page
router.get("/", (req, res) => {
    res.locals.project = data.projects;
    //const err= new Error("Sorry there has been a connection error")
    //console.log(res.locals.project);
    res.render("index");
    console.log("the router is listening to port 3000");
    // if(err){
    //     console.log("sorry this was not found");
    // }

});

//routing for about page
router.get("/about", (req, res) => {
    res.render("about");
    
});
// routing for projects
router.get("/projects/:id", (req, res, next) => {
    //console.log(res.locals.project);
    if(req.params.id >= data.projects.length){
        const err= new Error("This project was not found");
        err.status= 404;
        next(err);
    }else{
        res.locals.project = data.projects[req.params.id];

        res.render("project");

    }

});

//error routing
router.use((req, res, next) =>{
    const err= new Error("This was not found");
    err.status= 404;
    next(err);
})
router.use((err, req, res, next) =>{
    res.locals.error = err;
    console.error("sorry not found");

    res.render('error');
})

module.exports = router;