module.exports = {
    PlayMusic(allTones){
        var tone = require('tonegenerator');
       var header = require('waveheader');
        var fs = require('fs');
        var file = fs.createWriteStream('test3.wav')
    
        toneArray = allTones.map(x => tone(x))
        var res = [].concat(...toneArray)
    
        file.write(header(res.length, {
          bitDepth: 8
        }))
        var data = Uint8Array.from(res, function (val) {
          return val + 128
        })
        
        if (Buffer.from) { 
          buffer = Buffer.from(data)
        } else {
          buffer = new Buffer(data)
        }

        file.write(buffer)
        file.end()
      
    }
}