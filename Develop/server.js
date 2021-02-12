var PORT  = process.env.PORT || 8080;



app.listen(PORT, function() {
    
})

app.get("/notes", function(req, res) {

    res.json(path.join(__dirname, "public/index.html"));

});

app.get("*", function(req, res) {

    res.json(path.join(__dirname, "public/notes.html"));

});