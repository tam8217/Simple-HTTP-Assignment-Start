const fs = require('fs');

const mainImg = fs.readFileSync(`${__dirname}/../client/spongegar.png`);

const getImg = (request, response) => {
  response.writeHead(200, { 'Content-type': 'image/png' });
  response.write(mainImg);
  response.end();
};

module.exports.getImg = getImg;
