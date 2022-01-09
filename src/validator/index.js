const { AlbumPayloadSchema, SongPayloadSchema } = require("./schema");
const InvariantError = require("../exceptions/InvariantError");

const Validator = {
  validateAlbumResult: (payload) => {
    const validationResult = AlbumPayloadSchema.validate(payload);

    if (validationResult.error) {
      throw new InvariantError(validationResult.error.message);
    }
  },
  validateSongResult: (payload) => {
    const validationResult = SongPayloadSchema.validate(payload);

    if (validationResult.error) {
      throw new InvariantError(validationResult.error.message);
    }
  },
};

module.exports = Validator;
