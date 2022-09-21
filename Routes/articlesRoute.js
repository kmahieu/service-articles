import express from 'express';
import { getArticles, getArticle, createArticle, deleteArticle,getArticleByCategorieId, updateArticle,} from "../controllers/articlesControllers.js"

const router = express.Router();

router.get('/articles', getArticles)
router.get('/article/:id', getArticle)
router.post('/article', createArticle);
router.delete('/article/:id', deleteArticle)
router.get('/article/cat/:id', getArticleByCategorieId)
router.put('/article/:id', updateArticle)

export default router;