const fs = require('fs');
const collection = process.argv[2];

// First I want to read the file
fs.readFile(`./mongo/${collection}.json`, function read(err, data) {
    if (err) {
        throw err;
    }
    const content = JSON.parse(data);
    // Invoke the next step here however you like
    processFile(content);   // Or put the next step in a function and invoke it
});

function processFile(content) {
    let obj = {};

    content.forEach((element) => {
        let docId = element._id.$oid;
        delete element._id;
        delete element.__v;
        element["__collections__"] = {};
        obj[docId] = element;
    });

    fs.writeFile(`./firestore-import-data/${collection}.json`, JSON.stringify(obj), 'utf8', (err) => {
        if (err) throw err;
        console.log(`${collection} JSON Converted`);
    });
}


