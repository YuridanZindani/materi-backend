const Data = require('../models/data');

const getAllData = async (req, res) => {
    try {
        const data = await Data.find();
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
};

const getDataById = async (req, res) => {
    const { id } = req.params;
    try {
        const data = await Data.findById(id);
        if (!data) {
            return res.status(404).json({ error: 'Data not found' });
        }
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
};

const createData = async (req, res) => {
    const { nama, umur, nomor_tlpn, alamat, berat_badan } = req.body;
    try {
        const newData = await Data.create({ nama, umur, nomor_tlpn, alamat, berat_badan });
        res.status(201).json(newData);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
};

const updateDataById = async (req, res) => {
    const { id } = req.params;
    const { nama, umur, nomor_tlpn, alamat, berat_badan } = req.body;
    try {
        const updatedData = await Data.findByIdAndUpdate(
            id,
            { nama, umur, nomor_tlpn, alamat, berat_badan },
            { new: true }
        );
        if (!updatedData) {
            return res.status(404).json({ error: 'Data not found' });
        }
        res.json(updatedData);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
};

const deleteDataById = async (req, res) => {
    const { id } = req.params;
    try {
        const deletedData = await Data.findByIdAndDelete(id);
        if (!deletedData) {
            return res.status(404).json({ error: 'Data not found' });
        }
        res.json({ message: 'Data deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
};

module.exports = {
    getAllData,
    getDataById,
    createData,
    updateDataById,
    deleteDataById,
};