const thinkagain = require('thinkagain')();
// Image
var Image = thinkagain.createModel('Image', {
    type: 'object',
    properties: {
        id: { type: 'string' },
        title: { type: 'string' },
        description: { type: 'string' },
        date: {type: 'string', format:'date-time'},
        path: { type: 'string' },
        size: { type: 'integer'}
    },
    required: [ 'title', 'path' ]
});
exports.Image = Image;

var Profile = thinkagain.createModel('Profile', {
    type: 'object',
    properties: {
        id: { type: 'string' },
        image_id: {type: 'string'},
        name: { type: 'string' },
        last_name: { type: 'string' },
        description: {type: 'string'},
        age: { type: 'integer' },
        liked_people: { type: 'array', items: {type: 'object'}}
    },
    required: [ 'name','last_name','age' ]
});
exports.Profile = Profile;