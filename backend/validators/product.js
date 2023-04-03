const {check} = require('express-validator')

exports.productCreateValidator = [
    check('earnings')
    .notEmpty()
    .withMessage('Earnings are required')
    .isFloat()
    .withMessage('Earnings must be a number'),
    check('name')
        .notEmpty()
        .withMessage('Name is required')
        .isString()
        .withMessage('Name must be a string'),
    check('price')
        .notEmpty()
        .withMessage('Price is required')
        .isFloat()
        .withMessage('Price must be a number'),
    check('stock')
        .isNumeric()
        .withMessage('Stock must be a number'),
    check('categoryId')
        .notEmpty()
        .withMessage('Category is required')
        .isNumeric()
        .withMessage('Category must be a number')

]
