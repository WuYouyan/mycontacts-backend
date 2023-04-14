const { constants } = require("../constants");

/**
 * 
 * @param {Error} error 
 * @param {Request} req 
 * @param {Response} res 
 * @param {RequestHandler} next  
 */
const errorHandle = (error, req, res, next) => {
    const statusCode = res.statusCode ? res.statusCode : 500;
    switch (statusCode) {
        case constants.BAD_REQUEST:
            res.status(statusCode).json({ 
                title: "Bad Request",
                message: error.message, 
                stackTrace: error.stack 
            });
            break;
        case constants.NOT_FOUND:
            res.status(statusCode).json({ 
                title: "Not Found",
                message: error.message, 
                stackTrace: error.stack 
            });
            break;
        case constants.UNAUTHORIZED:
            res.status(statusCode).json({ 
                title: "Unauthorized",
                message: error.message, 
                stackTrace: error.stack 
            });
            break;
        case constants.FORBIDDEN:
            res.status(statusCode).json({ 
                title: "Forbidden",
                message: error.message, 
                stackTrace: error.stack 
            });
            break;
        case constants.SERVER_ERROR:
            res.status(statusCode).json({ 
                title: "Server Error",
                message: error.message, 
                stackTrace: error.stack 
            });
            break;
        default:
            console.log("No error, all good !")
            break;
    }
    
};


module.exports = errorHandle;