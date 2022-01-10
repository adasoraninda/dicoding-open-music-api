const Joi = require("joi");

const AlbumPayloadSchema = Joi.object({
  name: Joi.string().required(),
  year: Joi.number().integer().min(1900).max(2022).positive().required(),
});

const SongPayloadSchema = Joi.object({
  title: Joi.string().required(),
  year: Joi.number().integer().min(1900).max(2022).required(),
  genre: Joi.string().required(),
  performer: Joi.string().required(),
  duration: Joi.number().integer().positive(),
  albumId: Joi.string(),
});

module.exports = { AlbumPayloadSchema, SongPayloadSchema };
