const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "jitendersarswat6@gmail.com",
        password: "hrenzlvupyjnixai"
    }
})

module.exports.sendOtp = (toEmail, otp) => {
    let mailOption = {
        from: "jitendersarswat6@gmail.com",
        to: toEmail,
        subject: "Forget password otp",
        text: `you otp is ${otp}`
    }
    transporter.sendMail(mailOption, (err) => {
        if (err) {
            console.log(err);
        }
    })
}
