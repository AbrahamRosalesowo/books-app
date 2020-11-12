import { Router } from 'express';
import { booksController } from '../controllers/booksController';

class BookRoutes {
    public router: Router = Router();
    constructor() {
        this.config();
    }
    config(): void {

        this.router.get('/', booksController.index);
        this.router.get('/add', booksController.renderFormBook);
        this.router.post('/add', booksController.saveBook);
    }
}


const booksRoutes = new BookRoutes();
export default booksRoutes.router;