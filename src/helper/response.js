const successfulResponse = ({ response, code, records, msg }) => {
    return response.status(200).json({
      code,
      msg,
      records,
    });
  };
  
  
  const badRequestResponse = ({ response, code, msg }) => {
    return response.status(400).json({
      code,
      msg,
    });
  };
  
  
  const serverErrorResponse = ({ response, code, data, msg }) => {
    return response.status(500).json({
      code,
      msg,
      data,
    });
  };
  
  
  export {
    successfulResponse,
    badRequestResponse,
    serverErrorResponse,
  };