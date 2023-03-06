import nats from 'node-nats-streaming';

const stan = nats.connect('ticketing', 'abc', {
  url: 'https://localhost:4222'
});

stan.on('connect', () => {
  console.log('Publisher connect to NATS');
})
