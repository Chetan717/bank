
const asyncHandler = require('express-async-handler')

// @desc Get users
//@route Get /api/users
//@access Private

const getUsers = asyncHandler (async(req, res) => {
    res.status(200).json({message: 'Get Users'})
})
// @desc Set user
//@route Post /api/users
//@access Private

const setUser = asyncHandler (async(req, res) => {
if (!req.body.text) {
    res.status(400) 
    throw new Error ('add a text')
}
    res.status(200).json({message: 'Set User'})
})
// @desc Update user
//@route Put /api/users
//@access Private

const updateUser = asyncHandler (async(req, res) => {
    res.status(200).json({message: `Update User ${req.params.id}`})
})
// @desc Delete user
//@route DELETE /api/users/:id
//@access Private

const deleteUser = asyncHandler (async(req, res) => {
    res.status(200).json({message: `Delete User ${req.params.id}`})
})




module.exports = {
    getUsers,
    setUser,
    updateUser,
    deleteUser,
}