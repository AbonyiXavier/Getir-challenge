import joi from "joi";


export default class Validation {
  static async validatePayload(request, response, next) {
    try {
      const schema = joi.object().keys({
        startDate: joi.string().required(),
        endDate: joi.string().required(),
        minCount: joi.number().required(),
        maxCount: joi.number().required(),
      });
      await schema.validateAsync(request.body);
      return next();
    } catch (error) {
      console.log('validate', error);
      return response
        .status(400)
        .json({ success: false, error: error.details[0].message });
    }
  }
}
