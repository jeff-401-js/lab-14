'use strict';

/**
 * @module src/middleware/500
 */

/**
   * @param {object} req - request object
   * @param {object} res - response object
   * @desc server error handler
   * Export object
   * @type {Object}
   */
  
module.exports = (err, req, res, next) => {
  console.log('__SERVER_ERROR__', err);
  let error = { error: err.message || err };
  res.status(500).json(error);
};
