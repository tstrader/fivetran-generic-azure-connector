const got = require('got');

module.exports = async function (context, req) {

    if (req.body.state === undefined) {
        context.res = {
            status: 400,
            body: "No state is defined!"
        };
    }

    if (req.body.secrets === undefined) {
        context.res = {
            status: 400,
            body: "No secret is defined!"
        };
    }

    context.res = {
        status: 200,
        headers: {
            'Content-Type': 'application/json'
        },
        body: await update(req.body.state, req.body.secrets)
    };
    context.done();

}



async function update(state, secrets) {
    // Fetch records using api calls
    //let [insertTransactions, deleteTransactions, newTransactionsCursor] = apiResponse(state, secrets);

    console.log('Starting with state: ' + JSON.stringify(state));

    let url;
    url = secrets.url;

    const response = await got.post(url, {json : {"state" : state, "config" : secrets}});

    let ret;
    
    ret = JSON.parse(response.body);

    console.log('Ret bytes: ' + JSON.stringify(ret).length);
    return (ret);
}
