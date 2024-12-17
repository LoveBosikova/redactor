

import { useState } from 'react';
import styles from './App.module.scss';

function App() {

  const [language, setLanguage] = useState('Go') // Python | Go
  console.log(language)

  function handleSubmit(e) {
    // Prevent the browser from reloading the page
    e.preventDefault();
    // Read the form data
    const form = e.target;
    const formData = new FormData(form);
    // You can pass formData as a fetch body directly:
    fetch('/some-api', { method: form.method, body: formData });
    // You can generate a URL out of it, as the browser does by default:
    console.log(new URLSearchParams(formData).toString());
    // You can work with it as a plain object.
    const formJson = Object.fromEntries(formData.entries());
    console.log(formJson); // (!) This doesn't include multiple select values
    // Or you can get an array of name-value pairs.
    console.log([...formData.entries()]);
  }

  return (
    <div className={styles.App}>
      <header className={styles.header}>
        <h1 className={styles.taskName}>Task name</h1>
        <button className={styles.btnRun} type='submit'>Run</button>
      </header>
      <div className={styles.container}>
        <section className={styles.task}>
          <form method='post' onSubmit={handleSubmit}>
            <label className={styles.titleDescription}> 
              <p className={styles.titleDescription}>Language</p>
              <select className={styles.selectLanguage} name="selectedFruit">
                <option className={styles.option} value='Go' onClick={()=> setLanguage('Go')}>Go</option>
                <option className={styles.option} value='Python' onClick={()=> setLanguage('Python')}>Python</option>
              </select>
            </label>
            <p className={styles.difficulty}>Easy</p>
            <div className={styles.title}>
              <svg className={styles.titleImg} aria-hidden="true" focusable="false" data-prefix="far" data-icon="memo" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="currentColor" d="M64 48c-8.8 0-16 7.2-16 16V448c0 8.8 7.2 16 16 16H320c8.8 0 16-7.2 16-16V64c0-8.8-7.2-16-16-16H64zM0 64C0 28.7 28.7 0 64 0H320c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V64zm120 64H264c13.3 0 24 10.7 24 24s-10.7 24-24 24H120c-13.3 0-24-10.7-24-24s10.7-24 24-24zm0 96H264c13.3 0 24 10.7 24 24s-10.7 24-24 24H120c-13.3 0-24-10.7-24-24s10.7-24 24-24zm0 96h48c13.3 0 24 10.7 24 24s-10.7 24-24 24H120c-13.3 0-24-10.7-24-24s10.7-24 24-24z"></path></svg>
              <p className={styles.titleDescription}>Description</p>
            </div>
          </form>

          <h2 className={styles.example}>Example 1:</h2>
          <code className={styles.exampleCode}>
            Input: args = []
            Output: "Hello World"
            Explanation:
            const f = createHelloWorld();
            f(); // "Hello World"
            The function returned by createHelloWorld should always return "Hello World".
          </code>

          <ul>
            <h3>Constraints:</h3>
            <li>{'0 <= args.length <= 10'}</li>
          </ul>

        </section>
        <section className={styles.code}>

        </section>
      </div>
      <div className={styles.results}>

      </div>
    </div>
  );
}

export default App;
