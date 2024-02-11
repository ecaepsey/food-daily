module.exports = ({ env }) => ({
  auth: {
    secret: "mZ10f8yPrW5jIfdqQwXIamzqXmzh7TwRKzCJy0Il5/w=",
  },
  apiToken: {
    salt: "itLV1wEz6M5hZopfqS3RH0MHpTH8uYw+FDUEGSqXdYk=",
  },
  transfer: {
    token: {
      salt: env('TRANSFER_TOKEN_SALT'),
    },
  },
  flags: {
    nps: env.bool('FLAG_NPS', true),
    promoteEE: env.bool('FLAG_PROMOTE_EE', true),
  },
});
