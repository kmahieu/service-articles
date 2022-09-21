import request from 'supertest';
import app from './index.js';

var id = "";

describe('Article test', function() 
{
    describe('POST /article', function() {
        it("Article created", function(done) {
            request(app)
            .post('/Article')
            .send({
                title: 'Description',
                description: 'title'
            }).expect(201, done);
        });
    });

    describe("GET /articles", function() {
        it("articles get", function(done) {
            request(app)
            .get('/articles')
        .expect(200, done);
        });
    });

})