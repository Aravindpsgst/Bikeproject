var userDao = require('../daos/userDao');
function getAllUserDetails(callback) {
    userDao.getAll(callback);
}
function addUser(data, callback) {
    userDao.create(data, callback);
}

module.exports.getAllUserDetails = getAllUserDetails;
module.exports.addUser = addUser;