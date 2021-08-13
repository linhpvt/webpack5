export const generatePromise = (delay, sampleResult) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(sampleResult);
    }, delay);
  });
};

export const asyncFunc = async (delay, sampleResult) => {
  const result = await generatePromise(delay, sampleResult);
  console.log(`SAMPLE RESULT OUTPUT: ${result}`);
};
