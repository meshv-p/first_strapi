// path: ./config/plugins.js

module.exports = ({ env }) => ({
  email: {
    config: {
      provider: "nodemailer", // For community providers pass the full package name (e.g. provider: 'strapi-provider-email-mandrill')
      providerOptions: {
        host: "smtp.gmail.com",
        port: 587,
        auth: {
          user: "devblog1823@gmail.com", // generated ethereal user
          pass: "cumwhsfrckfmejcl", // generated ethereal password
        },
        // ... any custom nodemailer options
      },
      settings: {
        defaultFrom: "devblog1823@gmail.com",
        defaultReplyTo: "devblog1823@gmail.com",
      },
      devPort: 1025, // Default: False
      devHost: "localhost", // Default: localhost
      smtpPort: 465, // Default: 25
      smtpHost: "localhost", // Default: -1 - extra smtp host after resolveMX
    },
  },
});
