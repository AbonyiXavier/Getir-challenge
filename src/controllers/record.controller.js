import {
  successfulResponse,
  badRequestResponse,
  serverErrorResponse,
} from "../helper/response";

import Record from "../Models/record.model";

export default class recordController {
  static async store(request, response) {
    try {
      // request payload
      let { startDate, endDate, minCount, maxCount } = request.body;

      // convert startDate and endDate to look createdAt format
      const start = new Date(startDate);
      const end = new Date(endDate);

      // Query the db to fetch records and filter createdAt
      const record = await Record.find({
        createdAt: {
          $gte: start,
          $lt: end,
        },
      }).exec();

      for await (const item of record) {
        const { key, createdAt, counts } = item.toJSON();
        // Get total sum of the counts arrary in db
        const totalSum = counts.reduce((a, b) => a + b);
        // Check if the total sum is between the minCount and maxCount
        if (totalSum >= minCount && totalSum <= maxCount) {
         return successfulResponse({
            response,
            code: 0,
            msg: "success",
            records: {
              key,
              createdAt,
              totalCount: totalSum
            },
          });
        }  
      }
        // return bad reponse if no records meet the above checks
        return badRequestResponse({
          response,
          code: "false",
          msg: "error"
        })
      
     
    } catch (error) {
      return serverErrorResponse({
        response,
        code: "false",
        msg: "something went wrong",
      });
    }
  }
}
