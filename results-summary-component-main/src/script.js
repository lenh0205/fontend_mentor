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
const statistic = document.querySelector(".summery__individual");
(function () {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const result = yield fetch("./data.json")
                .then((res) => res.json())
                .then((res) => res);
            const statistic_content = result
                .map((summery, index) => `
        <article class="summery__type summery__type__${index}">
            <span class="summery__type__icon">
              <img src=".${summery.icon}" class="">
            </span>
            <span class="summery__type__category summery__type__${index}__category">
              ${summery.category}
            </span>
            <span class="summery__type__score">${summery.score}</span>
            <span class="summery__type__total">/ 100</span>
        </article>
    `)
                .join("");
            if (statistic)
                statistic.innerHTML = statistic_content;
        }
        catch (error) {
            console.log(error);
        }
    });
})();
