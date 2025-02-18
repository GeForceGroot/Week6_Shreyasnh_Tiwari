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
exports.addNewUser = void 0;
const createUserservices_1 = require("../../services/userServices/createUserservices");
const addNewUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield (0, createUserservices_1.addUser)(req.body);
    res.send(user);
});
exports.addNewUser = addNewUser;
//# sourceMappingURL=createUserController.js.map