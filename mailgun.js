module.exports = async (email, mailgun) => {
    let data = {
        from: 'bapinmalakar383@gmail.com',
        to: email,
        subject: 'Message For Test the Mail is Work',
        html: '<h1>Welcome In My Side</h1>\
            <h3> Click the given link to visit my side</h3>\
            <a href="www.facebook.com">Click Me</a>'
    }
    return await mailgun.messages().send(data);
}