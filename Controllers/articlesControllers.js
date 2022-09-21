import User from '../Model/articlesModel.js'
import mongoose from 'mongoose'
import Article from '../Model/articlesModel.js';

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

export const getArticleByCategorieId = async (req, res) => {
    try
    {
        console.log("wwww" + req.params.id);

        const upArticle = await Article.findOne({"categorieId": req.params.id});
        res.status(201).json(upArticle);
    }catch (error) 
    {
        res.status(404).json({ message: error.message});
    }
}



export const createArticle = async (req, res) => {
    const body = req.body;
    const newArticle = new Article(body);
    const catId = newArticle.categorieId;
    const usId = newArticle.userId;

    try {
        await fetch(`http://localhost:2000/categorie/${catId}`)
            .then((response) => response.json())
            .then((data) => {
                console.log(data['_id']);
                newArticle.Categorie._id = data['_id'];
                newArticle.Categorie.name = data['name'];
             //   data['name'] = newArticle.Categorie.name;
            });

            await fetch(`http://localhost:1000/user/${usId}`)
            .then((response) => response.json())
            .then((data) => {
                console.log(data['_id']);
                newArticle.User._id = data['_id'];
                newArticle.User.name = data['name'];
                newArticle.User.firstname = data['firstname'];

             //   data['name'] = newArticle.Categorie.name;
            });
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