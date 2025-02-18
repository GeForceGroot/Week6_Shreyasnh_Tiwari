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
exports.updateAuthorRoute = void 0;
const express_1 = require("express");
const updateAuthorController_1 = require("../../controller/authorController/updateAuthorController");
const updateAuthorRoute = (0, express_1.Router)();
exports.updateAuthorRoute = updateAuthorRoute;
updateAuthorRoute.post('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const updatedAuthor = yield (0, updateAuthorController_1.updateAuthor)(req, res, id);
        return updatedAuthor;
    }
    catch (error) {
        res.status(500).send('Error in updating author' + error);
    }
}));
//# sourceMappingURL=updateAuthorRoute.js.map