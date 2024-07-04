import { StatusCodes } from "http-status-codes";

export const status = {
    SUCCESS: { status: StatusCodes.OK, isSuccess: true, code: 2000, message: 'Success!' },
  
    // Client errors
    BAD_REQUEST: { status: StatusCodes.BAD_REQUEST, isSuccess: false, code: 4000, message: 'Bad request' },
  
    // Server errors
    INTERNAL_SERVER_ERROR: { status: StatusCodes.INTERNAL_SERVER_ERROR, isSuccess: false, code: 5000, message: 'Internal server error' },
  };