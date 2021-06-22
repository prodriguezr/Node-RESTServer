const { Category } = require('../../models');

const existsCategoryById = async(userId = '') => {
    const exists = await Category.findById(userId);

    if (!exists) {
        throw new Error(`There is no category with that id`);
    }
}

module.exports = {
    existsCategoryById,
}