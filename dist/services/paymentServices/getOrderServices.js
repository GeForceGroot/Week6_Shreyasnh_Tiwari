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
exports.orderData = void 0;
const paymentModel_1 = require("../../model/paymentModel");
const authcanticate_1 = require("../../common/authcanticate");
function orderData(data, id) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const islogin = yield (0, authcanticate_1.authencation)(data);
            if (islogin) {
                const isAdmin = yield islogin.isAdmin;
                // to do make it false
                if (isAdmin) {
                    const orderDetails = yield paymentModel_1.Payment.findByPk(id);
                    return orderDetails;
                }
                else {
                    return "Error during getting order deatils";
                }
            }
        }
        catch (error) {
            return `Error during getting order deatils:- ${error}`;
        }
    });
}
exports.orderData = orderData;
//# sourceMappingURL=getOrderServices.js.map