'use strict';


/**
 * @module src/middleware/404
 */

/**
   * @param {object} req - request object
   * @param {object} res - response object
   * @desc resource error handler
   * Export object
   * @type {Object}
   */
  
module.exports = (req,res,next) => {
  let error = { error: 'Resource Not Found' };
  res.status(404).json(error);
};
