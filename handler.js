exports.handler = (event, context, callback) => {
    var body = event.Records[0].messageAttributes;
    console.log("text: ", body.message);
    console.log(body);
};
