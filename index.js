const generate = (maximumOpened, numberOpened, queue, output) => {
  if (maximumOpened === numberOpened) {
    return [`${output}${")".repeat(queue.length)}`];
  }

  const outputs = [];

  if (queue.length === 0) {
    outputs.push(
      generate(maximumOpened, numberOpened + 1, [...queue, "("], output + "(")
    );
  } else {
    outputs.push(
      generate(maximumOpened, numberOpened + 1, [...queue, "("], output + "(")
    );
    outputs.push(
      generate(
        maximumOpened,
        numberOpened,
        [...queue.slice(0, queue.length - 1)],
        output + ")"
      )
    );
  }

  return outputs.flat();
};

/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  return generate(n, 0, [], "");
};

module.exports = {
  generateParenthesis,
};
