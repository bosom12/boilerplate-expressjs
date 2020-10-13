// some imported dependencies

/**
 * @class UserController
 */
export class UserController {

  /**
   * @author DanielAdek
   * @method registerUser
   * @desc Feature register user
   * @param {object} req Request object
   * @param {object} res Response object
   * @returns {object} Json data
   */
  registerUser(req, res) {
    // some codes in here

    return res.status(200).jsend.success({ status: 200, message: 'Success'});
  }

  /**
   * @author DanielAdek
   * @method authenticateUser
   * @desc Feature register user
   * @param {object} req Request object
   * @param {object} res Response object
   * @returns {object} Json data
   */
  authenticateUser(req, res) {
    // some codes in here

    return res.status(200).jsend.success({ status: 200, message: 'Success'})
  }
}