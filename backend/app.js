const express = require('express');
const libgen = require('libgen');
const app = express();
const port = 5000;

app.get('/', function(req, res){
  

  (async () => {

    const options = {
      mirror: 'http://libgen.is',
      query: 'philosophy of religion',
      count: 5
    }
    const results = [];
  
    try {

      const data = await libgen.search(options)
      let n = data.length;
      console.log('top ' + n + ' results for "' +
                  options.query + '"');
      while (n--){
        console.log('***********');
        console.log('Title: ' + data[n].title);
        console.log('Author: ' + data[n].author);
        console.log('Download: ' +
                    'http://gen.lib.rus.ec/book/index.php?md5=' +
                    data[n].md5.toLowerCase());

        const searchResult = {
          title: data[n].title,
          author: data[n].author,
          download: 'http://gen.lib.rus.ec/book/index.php?md5=' + data[n].md5.toLowerCase()
        }
        results.push(searchResult);
      }
      res.send(results);
    } catch (err) {
      return console.error(err)
    }
  })();

} );

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));
