//All the configurations required like portNumber, Database Connection URl etc are stored to provide a low level encapsulation

module.exports = {
  database:
    'mongodb://cluster0.lalr4.mongodb.net:27017/art_auction',
  port: process.env.PORT || 3030,
  secret: 'RamtF3BAC8E761687B25F61D95100537A6FB1254E3DAB50A078C68BF575E8B13054CejaRepaka2012312321'
};

