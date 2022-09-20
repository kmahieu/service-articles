import express from 'express';
import { getArticles, getArticle, createArticle, deleteArticle, updateArticle,} from "../controllers/articlesControllers.js"

const router = express.Router();

router.get('/articles', getArticles)
router.get('/article/:id', getArticle)
router.post('/article', createArticle);
router.delete('/article/:id', deleteArticle)
router.put('/article/:id', updateArticle)

export default router;