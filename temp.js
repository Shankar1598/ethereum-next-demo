var file = '/dev/ttyAMA0';

var GPS = require('gps');
var SerialPort = require('serialport');
var port = new SerialPort.SerialPort(file, {
  baudrate: 9600,
  parser: SerialPort.parsers.readline('\r\n')
});

var gps = new GPS;

gps.on('data', function(data) {
  console.log(data);
});

port.on('data', function(data) {
  
    gps.update(data);
});


const SerialPort = require('serialport');
const Readline = require('parser-readline');
const sp = new SerialPort('/dev/ttyACM0', {
        baudRate: 9600
});
const parser =  sp.pipe(new Readline({ delimiter: "\n"}));





var file = '/dev/ttyAMA0';

var GPS = require('gps');
const SerialPort = require('serialport');
const Readline = require('parser-readline');
const sp = new SerialPort(file, {
        baudRate: 9600
});
const parser =  sp.pipe(new Readline({ delimiter: "\n"}));


console.log('code oduthu');
var gps = new GPS;

gps.on('data', function(data) {
  console.log(data);
});

sp.on('data', function(data) {
  gps.update(data);
});
