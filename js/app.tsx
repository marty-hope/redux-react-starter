declare var fetch;

fetch('http://localhost:3010/widgets')
    .then(res => res.json())
    .then(results => {
        console.log(results);
    })
    .catch(err => {
        console.log(err);
    });