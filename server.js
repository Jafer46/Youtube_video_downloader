const express = require("express");
const cors = require("cors");
const ytdl = require("ytdl-core");
const app = express();

app.use(cors());
 console.log(URL)
app.listen(4000, () => {
    console.log("serever is working on port 4000!!");  
});

app.get('/Download', (req,res) => {
    var URL = req.query.URL;
    
    
    res.header('Content-Disposition', 'attachment; filename="video.mp4"');

    ytdl(URL, {
        format: 'mp4'
        }).pipe(res);
    
});