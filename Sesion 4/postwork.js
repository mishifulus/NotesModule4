const processAction = (i, callback) => {
    setTimeout(function() {
      callback("Processed Action " + i);
    }, Math.random()*1000);
}
  
const triggerActions = (count) => {
    const promises = [];
    const generatePromises = (i) => {
        return new Promise((resolve) => {
            processAction(i, resolve);
        });
    }

    for (let i = 1; i <= count; i += 1)
    {
        promises.push(generatePromises(i));
    }
    
    Prommise.all(promises).then((strings) =>
    strings.foreach((strings) => console.log(string)));
}

triggerActions(10);