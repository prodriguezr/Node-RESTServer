const CategoriesCtrl = require('./categories.controllers');
const UsersCtrl = require('./users.controllers');
const AuthCtrl = require('./auth.controllers');
const RolesCtrl = require('./roles.controllers');
const SearchCtrl = require('./search.controllers');
const ProductsCtrl = require('./products.controllers');

module.exports = {
    AuthCtrl,
    CategoriesCtrl,
    ProductsCtrl,
    RolesCtrl,
    SearchCtrl,
    UsersCtrl,
}