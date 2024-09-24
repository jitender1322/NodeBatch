const mailer = require("nodemailer");

const transpoter = mailer.createTransport({
    service: "gmail",
    auth: {
        user: "jitendersarswat6@gmail.com",
        pass: "babulnpitgzmngia"
    }
})

module.exports.adminOtp = (to, otp) => {
    let mailOption = {
        to: to,
        from: "jitendersarswat6@gmail.com",
        subject: "Forget password otp",
        text: `you otp is ${otp}`
    }
    transpoter.sendMail(mailOption, (err) => {
        err && console.log(err);
    })
}

module.exports.managerPass = (to, email, pass) => {
    let mailOption = {
        to: to,
        from: "",
        subject: "your password and email",
        text: `your email is ${email} and your password for this is ${pass}`
    }
}
