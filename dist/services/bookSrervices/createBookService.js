"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addBook = void 0;
const bookModel_1 = require("../../model/bookModel");
const authcanticate_1 = require("../../common/authcanticate");
const uuid_1 = require("uuid");
function addBook(data) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const islogin = yield (0, authcanticate_1.authencation)(data);
            if (islogin) {
                const isAdmin = yield islogin.isAdmin;
                if (isAdmin) {
                    const newBook = yield bookModel_1.Book.create({
                        id: (0, uuid_1.v4)(),
                        bookCode: data.bookCode,
                        title: data.title,
                        description: data.description,
                        publishedYear: data.publishedYear,
                        price: data.price,
                        authors: data.authors,
                        externalId: islogin.id
                    });
                    return newBook;
                }
                else {
                    return "Only Admin can Create Book.";
                }
            }
            else {
                return "You are not logged In.";
            }
        }
        catch (error) {
            return `Error in creating new book:- ${error}`;
        }
    });
}
exports.addBook = addBook;
//# sourceMappingURL=createBookService.js.map