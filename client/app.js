// Enable OAuth working with https urls.
if (window.__meteor_runtime_config__) {
  window.__meteor_runtime_config__.ROOT_URL = window.location.protocol + "//" +window.location.hostname;
}

Tickets = new Meteor.Collection("tickets");
Announcements = new Meteor.Collection("announcements");
Settings = new Meteor.Collection("settings");

Meteor.subscribe("userData");

Meteor.subscribe("activeTickets");

Meteor.subscribe("allAnnouncements");

Meteor.subscribe("mentorsOnline");

Meteor.subscribe("settings");
