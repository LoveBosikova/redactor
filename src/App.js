

import { useState } from 'react';

import Editor, { DiffEditor, useMonaco, loader } from '@monaco-editor/react';

import styles from './App.module.scss';
import CodeEditor from './ui/codeEditor/codeEditor';
import { LANGUAGE_VERSIONS } from './constants';
import LanguageItem from './ui/languageItem/languageItem';
import Output from './ui/output/output';
import checkAnswer from './api';

function App() {

  const languages = Object.entries(LANGUAGE_VERSIONS) // Забираем данные языков программирования

  const [language, setLanguage] = useState('javascript') // PHP | JavaScript

  const [editorValue, setEditorValue] = useState('') // Содержимое редактора

  const [output, setOutput] = useState('Output') // Значение поля Output

  // Валидация введенного кода
  async function runCode (language, editorValue) {
    if (!editorValue) return null;
    try {
      const result = await checkAnswer(language, editorValue);
      setOutput(result ? result : 'Output') // Если пришло корректное значение, показываем его. Если нет - показываем надпись 'Output
    } catch (error) {
      throw new Error ('Something went wrong');
    }
  }

  return (
    <div className={styles.App}>
      <header className={styles.header}>
        <h1 className={styles.taskName}>Task name</h1>
        <button className={styles.btnRun} type='submit' onClick={()=> runCode(language, editorValue)}>Run</button>
      </header>
      <div className={styles.container}>
        <section className={styles.task}>
          <form method='post'>
            <label className={styles.titleDescription}> 
              <p className={styles.titleDescription}>Language</p>
              <select value={language} className={styles.selectLanguage} name="selectedFruit" onChange={e => setLanguage(e.target.value)}>
                {languages.map((lang) => <LanguageItem 
                                            key={lang[0]} 
                                            className={styles.option} 
                                            value={lang[0]} 
                                            onClick={setLanguage} 
                                            selectedLanguage={language}>
                                            </LanguageItem>)}
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
          <CodeEditor handleEditorChange={setEditorValue} language={language} value={editorValue}></CodeEditor>
        </section>
      </div>
      <h2 className={styles.taskName}>Output</h2>
      <Output value={output}></Output>
    </div>
  );
}

export default App;
