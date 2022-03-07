module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '2fa2743a2a2bb69d394b885aba8fe67b'),
  },
});
