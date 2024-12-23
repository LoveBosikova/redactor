async function checkAnswer(lang, code) {

  function check(lang, code) {
    let result;
    if (lang == 'javascript') {
      if (code == 'console.log("Hello World!")') {
        result = "Hello World!";
      } else result = false;
    }
  
    if (lang == 'bash') {
      if (code == '`echo "Hello World!"`') {
        result = "Hello World!";
      } else result = false;
    }

    return result;
  }

  const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(check(lang, code));
    }, 1000);
  });

  return promise1;
}

export default checkAnswer;