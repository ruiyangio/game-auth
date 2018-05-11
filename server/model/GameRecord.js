const mongoose = require('mongoose');
const Types = mongoose.Schema.Types;

const gameRecord = new Schema({
  gameid: { type: String, required: true, unique: true },
  appid: { type: String, required: true },
  record: { type: Types.Mixed }
});

const GameRecord = mongoose.model('GameRecord', gameRecord);
module.exports = GameRecord;
