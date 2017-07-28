// event loop.js

/*

The event loop is important because as node is essentially  single threaded,the event loop perfoams 
multiple events in the background 

 it can support concurrency via the concept of event and callbacks

 there are several phases in the node-js event loop 
 1.timers : it executes the callbacks according to the scheduled time.

  
 2 i/o callbacks: it executes all call backs except the ones scheduled by timers:A callback is a function
  called at the completion of a given task; this prevents any blocking, and allows
  other code to be run in the meantime


 3 idle and prepare

 4 poll

 5 check

 6 close callback

 ┌───────────────────────┐
┌─>│        timers         │
│  └──────────┬────────────┘
│  ┌──────────┴────────────┐
│  │     I/O callbacks     │
│  └──────────┬────────────┘
│  ┌──────────┴────────────┐
│  │     idle, prepare     │
│  └──────────┬────────────┘      ┌───────────────┐
│  ┌──────────┴────────────┐      │   incoming:   │
│  │         poll          │<─────┤  connections, │
│  └──────────┬────────────┘      │   data, etc.  │
│  ┌──────────┴────────────┐      └───────────────┘
│  │        check          │
│  └──────────┬────────────┘
│  ┌──────────┴────────────┐
└──┤    close callbacks    │
   └───────────────────────┘

Sequential vs Parallel
Traditional web apps perform each I/O Sequentially
With an Event Loop, they can be run in Parallel
Most time waiting for I/O, sequential is inefficient




setImmediate() vs setTimeout()

setImmediate and setTimeout() are similar, but behave in different ways depending on when they are called.

setImmediate() is designed to execute a script once the current poll phase completes.
setTimeout() schedules a script to be run after a minimum threshold in ms has elapsed.
// 


timeout_vs_immediate.js
const fs = require('fs');

fs.readFile(__filename, () => {
  setTimeout(() => {
    console.log('timeout');
  }, 0);
  setImmediate(() => {
    console.log('immediate');
  });
});








*/



console.log('hi');

setTimeout(function cb(){
  console.log('there');
},5000);

console.log('peter');