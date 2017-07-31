var fs = require('fs');
var Path = require('path');

var readFileAsync = async function(path){
    return await readFilePromise(path);
};

var readFilePromise = function(path){
    return new Promise(function(resolve, reject){
        fs.readFile(path, 'utf8', (err, data)=>{
            if(err){
                reject(err);
                return;
            }
            resolve(JSON.parse(data));
        })
    });
};

var generateRouter = async function(app, path, method){
    app[method](path, async function(req, res){
        res.send({
            code: 200,
            message:  await readFileAsync(Path.resolve(__dirname, './mock/'+method+path+'/data.json'))
        })
    });
};

module.exports = {
    readFileAsync: readFileAsync,
    generateRouter: generateRouter
}