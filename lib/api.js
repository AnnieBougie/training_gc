
var api = {
  channels: require("./channels")
};

// Stuff we need to do
api.channels.addChatChannel("lobby");

module.exports = api;