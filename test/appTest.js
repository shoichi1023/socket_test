import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../app';
import io from 'socket.io-client';

var expect = chai.expect;
chai.use(chaiHttp);

/* Test the /GET route */
describe('app index route', () => {

  it('it should GET /', (done) => {
    chai.request(app)
      .get('/')
      .end((err, res) => {
        expect(res.status).to.equal(200);
        done();
      });
  });

  it('it should handle 404 error', (done) => {
    chai.request(app)
      .get('/notExist')
      .end((err, res) => {
        expect(res.status).to.equal(404);
        done();
      });
  });

  it('receive data from sockets', (done) => {
    const name = 'aaa';
    const correctVal = name + "さんが入室しました。";
    let client1 = io.connect('http://localhost');
    let client2 = io.connect('http://localhost');
    client1.emit('connected', { name: name });
    client2.on('entered', data => {
      console.log(data);
      expect(data.msg).to.equal(correctVal);
      client1.disconnect();
      client2.disconnect();
      done();
    });
  });
});
