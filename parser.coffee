csv = require "fast-csv"
fs = require "fs"

keys = []

stream = fs.createWriteStream "output.json", {flags:'w'}
stream.write "[\n"
comma = false;

csv
  .fromPath "input.csv"
  .on "data", (data) ->
    if keys.length==0
      keys=data
    else if data[0] != undefined
      e = {}
      keys.forEach (key, index) ->
        e[key] = data[index]

      if comma
        stream.write ",\n"
      stream.write (JSON.stringify e)
      comma = true

  .on "end", () ->
    stream.write "]"
    stream.end
    console.log "The file was saved to output.json!"