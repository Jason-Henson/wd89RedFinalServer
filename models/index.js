const User = require("./user");
const Family = require("./family");
const Appointment = require("./appointment");
const Meds = require("./meds");

// Setup Associations
User.hasMany(Appointment);
Appointment.belongsTo(User);

User.hasMany(Meds);
Meds.belongsTo(User);

User.hasMany(Family);
Family.belongsTo(User);

module.exports = {
  User,
  Family,
  Appointment,
  Meds
};
