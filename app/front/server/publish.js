Meteor.publish('userExtraData', function() {
  if(!this.userId) return null;

  return Meteor.users.find(this.userId, {fields: {
    firstname: 1,
    lastname: 1,
    shippingAddresses: 1,
    phone: 1
  }});
});
