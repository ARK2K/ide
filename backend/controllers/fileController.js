const File = require('../models/File');

const createFile = async (req, res) => {
    const { name, content } = req.body;
    const newFile = new File({ name, content });
    const savedFile = await newFile.save();
    res.status(201).json(savedFile);
};

const getFiles = async (req, res) => {
    const files = await File.find();
    res.status(200).json(files);
};

const updateFile = async (req, res) => {
    const updatedFile = await File.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json(updatedFile);
};

const deleteFile = async (req, res) => {
    await File.findByIdAndDelete(req.params.id);
    res.status(204).send();
};

module.exports = { createFile, getFiles, updateFile, deleteFile };
