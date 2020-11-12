"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const booksController_1 = require("../controllers/booksController");
class BookRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', booksController_1.booksController.index);
        this.router.get('/add', booksController_1.booksController.renderFormBook);
        this.router.post('/add', booksController_1.booksController.saveBook);
    }
}
const booksRoutes = new BookRoutes();
exports.default = booksRoutes.router;
