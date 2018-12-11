(function() {

    require("./init/index"); //Init Modules
    require("./routes/index"); //Init Ai=uth Route
    
    http.createServer(app).listen(app.get("PORT"), function(req, resp) {
        log("UI Challenge Server Started " + app.get("PORT"));

    });
})()