/**
 * User.js
 *
 * A user who can log in to this application.
 */

module.exports = {

  attributes: {

    //  ╔═╗╦═╗╦╔╦╗╦╔╦╗╦╦  ╦╔═╗╔═╗
    //  ╠═╝╠╦╝║║║║║ ║ ║╚╗╔╝║╣ ╚═╗
    //  ╩  ╩╚═╩╩ ╩╩ ╩ ╩ ╚╝ ╚═╝╚═╝

    emailAddress: {
      type: 'string',
      required: true,
      unique: true,
      isEmail: true,
      maxLength: 200,
      example: 'mary.sue@example.com'
    },

    emailStatus: {
      type: 'string',
      isIn: ['unconfirmed', 'change-requested', 'confirmed'],
      defaultsTo: 'confirmed',
      description: 'The confirmation status of the user\'s email address.',
      extendedDescription:
`Users might be created as "unconfirmed" (e.g. normal signup) or as "confirmed" (e.g. hard-coded
admin users).  When the email verification feature is enabled, new users created via the
signup form have \`emailStatus: 'unconfirmed'\` until they click the link in the confirmation email.
Similarly, when an existing user changes their email address, they switch to the "change-requested"
email status until they click the link in the confirmation email.`
    },

    emailChangeCandidate: {
      type: 'string',
      isEmail: true,
      description: 'A still-unconfirmed email address that this user wants to change to (if relevant).'
    },

    password: {
      type: 'string',
      required: true,
      description: 'Securely hashed representation of the user\'s login password.',
      protect: true,
      example: '2$28a8eabna301089103-13948134nad'
    },

    fullName: {
      type: 'string',
      required: true,
      description: 'Full representation of the user\'s name.',
      maxLength: 120,
      example: 'Mary Sue van der McHenst'
    },

    isSuperAdmin: {
      type: 'boolean',
      description: 'Whether this user is a "super admin" with extra permissions, etc.',
      extendedDescription:
`Super admins might have extra permissions, see a different default home page when they log in,
or even have a completely different feature set from normal users.  In this app, the \`isSuperAdmin\`
flag is just here as a simple way to represent two different kinds of users.  Usually, it's a good idea
to keep the data model as simple as possible, only adding attributes when you actually need them for
features being built right now.

For example, a "super admin" user for a small to medium-sized e-commerce website might be able to
change prices, deactivate seasonal categories, add new offerings, and view live orders as they come in.
On the other hand, for an e-commerce website like Walmart.com that has undergone years of development
by a large team, those administrative features might be split across a few different roles.

So, while this \`isSuperAdmin\` demarcation might not be the right approach forever, it's a good place to start.`
    },
  
isEmloye: {
  type: 'boolean',
  description: 'Whether this user is a "manager" with extra permissions, etc.',
}


 },

};
