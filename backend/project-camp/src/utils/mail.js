import Mailgen from "mailgen";



const emailVerificationMailgenContent = (username, verificationUrl) => {
  return {
    body: {
      name: username,
      intro: "Welcome to our App! we are excited to have you on board.",
      action: {
        instructions: "To verify your email, please click on the following button",
        button: {
          collor: "#1aae5aff",
          text: "Verify your email",
          link: verificationUrl
        },
      },
      outro: "Need help, or have questions? Just reply to this email, we'd love to help."
    },
  };
}

const forgotPasswordMailgenContent = (username, verificationUrl) => {
  return {
    body: {
      name: username,
      intro: "We got a request to reset the password of your account",
      action: {
        instructions: "To reset your password click on the following button or link",
        button: {
          collor: "#22BC66",
          text: "Reset password",
          link: verificationUrl
        },
      },
      outro: "Need help, or have questions? Just reply to this email, we'd love to help."
    },
  };
}