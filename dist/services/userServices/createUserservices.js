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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addUser = void 0;
const UserModel_1 = require("../../model/UserModel");
const bcrypt_1 = __importDefault(require("bcrypt"));
const uuid_1 = require("uuid");
function addUser(data) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            //  Hashing Passowrd
            const hasedPassword = yield bcrypt_1.default.hash(data.password, 10);
            const newUser = yield UserModel_1.User.create({
                id: (0, uuid_1.v4)(),
                username: data.username,
                password: hasedPassword,
                email: data.email,
                isAdmin: data.admin
            });
            return newUser;
        }
        catch (error) {
            console.log('Error creating new user account');
            return `Error in creating new user:- ${error}`;
        }
    });
}
exports.addUser = addUser;
//# sourceMappingURL=createUserservices.js.map