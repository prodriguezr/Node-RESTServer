const { request, response } = require('express');
const Role = require('../../models/role');

const getRoles = async(req = request, res = response) => {
    const { limit = 5, from = 0 } = req.query;
    const query = { status: true }

    const [ total, roles ] = await Promise.all([
        Role.countDocuments(query),
        Role.find(query)
            .skip(Number(from))
            .limit(Number(limit))
    ]);

    const pages = Math.ceil(Number(total) / Number(limit));

    res.json({
        total,
        pages,
        roles,
    });
}

const postRole = async(req = request, res = response) => {
    try {
        const { name } = req.body;
        
        const role = new Role({ name });

        await role.save();
        
        return res.status(200).json({
            role,
        });
    } catch (err) {
        console.log(err);
        
        res.status(500).json({
            msg: "Error in Role POST method",
        });
    }
}

const putRole = async(req = request, res = response) => {
    const { roleId } = req.params;

    const { _id, name, ... rest } = req.body;

    const role = await Role.findByIdAndUpdate(roleId, { name });

    res.status(200).json({ msg: role ? 'OK' : 'Error' });
}

const delRole = async(req = request, res = response) => {
    const { roleId } = req.params;

    const role = await User.findByIdAndUpdate(roleId, { status: false });

    res.status(200).json({ msg: role ? 'OK' : 'Error' });
} 

const patRole = (req = request, res = response) => {
    res.status(501).json({ msg: "User PATCH method"});
} 

module.exports = {
    getRoles,
    postRole,
    putRole,
    delRole,
    patRole
}