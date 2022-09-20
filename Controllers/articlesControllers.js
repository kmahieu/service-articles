import User from '../Model/articlesModel.js'
import mongoose from 'mongoose'

export var getArticles = async (req, res) => {
    try {

        const articles = await Article.find();
        res.status(200).json(articles);
        
    } catch (error) {
        res.status(404).json({ message: error.message});
    }
}

export const getArticle = async (req, res) => {
    try
    {
        const upArticle = await Article.findById(req.params.id);
        res.status(201).json(upArticle);
    }catch (error) 
    {
        res.status(404).json({ message: error.message});
    }
}
//wesh
export const createArticle = async (req, res) => {
    const body = req.body;
    const newArticle = new User(body);

    try {

        await newArticle.save();

        res.status(201).json(newArticle);
        
    } catch (error) {

        res.status(404).json({ message: error.message});
        
    }
}


export const deleteArticle = async (req, res) => {
    try
    {
        await Articles.findByIdAndDelete(req.params.id);
        res.status(201).json(req.params.id+' : supprimer');
        console.log(req.params.id+' : supprimer')
    }catch (error) 
    {
        res.status(404).json({ message: error.message});
    }
}

export const updateArticle = async (req, res) => {

    await Article.findByIdAndUpdate(req.params.id, {title: req.body.title, description: req.body.description ,categorieId: req.body.categorieId});

    res.status(201).json(req.params.id+' : update');

    console.log(req.params.id+' : update')

    res.json(updateArticle);
}