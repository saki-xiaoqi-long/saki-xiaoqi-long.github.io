import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Main from '../layouts/Main';

const Index = () => {
  const poemLines = [
    '        与谁同坐，明月清风我。',
    '        舞蝶迷香径，翩翩逐晚风。',
    '        假作真时真亦假，无为有处有还无。',
    '        采菊东篱下，悠然见南山。',
    '        路漫漫其修远兮，吾将上下而求索。',
    '        不能胜寸心，安能胜苍穹。',
    '        用舍由时，行藏在我，袖手何妨闲处看。',
    '        天上月，水中天。夜夜烟波得意眠。',
    '        青松皓鹤，绵绵度岁。',
    '        好风凭借力，送我上青云。',
    '        已识乾坤大，犹怜草木青。',
    '        悟已往之不谏，知来者之可追。',
  ];

  const getRandomLine = () => {
    const randomIndex = Math.floor(Math.random() * poemLines.length);
    return poemLines[randomIndex];
  };

  const [poemLine, setPoemLine] = useState('');

  useEffect(() => {
    setPoemLine(getRandomLine());

    // Dynamically load Google Fonts
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Noto+Serif+SC:wght@400;700&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
  }, []);

  return (
    <Main
      description={"Michael D'Angelo's personal website. New York based Stanford ICME graduate, "
        + 'VP of Engineering at Smile Identity, co-founder of Arthena and Matroid, and YC Alumni.'}
    >
      <style>
        {`
        .header-poem {
          font-family: 'Noto Serif SC', serif;
          font-size: 1.5em;
          font-weight: bold;
          text-align: center;
          margin: 1em 0;
          white-space: pre-wrap;
        }
      `}
      </style>
      <article className="post" id="index">
        <header>
          <div className="header-poem">
            {poemLine}
          </div>
        </header>
        <p> Welcome to my website. Please feel free to read more <Link to="/about">about me</Link>,
          or you can check out my {' '}
          <Link to="/resume">resume</Link>, {' '}
          <Link to="/projects">projects</Link>, {' '}
          view <Link to="/stats">site statistics</Link>, {' '}
          or <Link to="/contact">contact</Link> me.
        </p>
        <p> Source available <a href="https://github.com/mldangelo/personal-site">here</a>.</p>
      </article>
    </Main>
  );
};

export default Index;