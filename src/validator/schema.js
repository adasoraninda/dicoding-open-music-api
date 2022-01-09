const Joi = require("joi");

const AlbumPayloadSchema = Joi.object({
  name: Joi.string().required(),
  year: Joi.integer().positive().required(),
});

const SongPayloadSchema = Joi.object({
  title: Joi.string().required(),
  year: Joi.integer().positive().required(),
  genre: Joi.string().required(),
  performer: Joi.string().required(),
  duration: Joi.integer().positive(),
  albumId: Joi.string(),
});

module.exports = { AlbumPayloadSchema, SongPayloadSchema };
