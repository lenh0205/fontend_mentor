const statistic = document.querySelector(".summery__individual");

interface Summery {
  icon: string;
  category: string;
  score: number;
}

(async function () {
  try {
    const result = await fetch("./src/data.json")
      .then((res) => res.json())
      .then((res) => res);
    const statistic_content = result
      .map(
        (summery: any, index: number) => `
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
    `
      )
      .join("");

    if (statistic) statistic.innerHTML = statistic_content;
  } catch (error) {
    console.log(error);
  }
})();
