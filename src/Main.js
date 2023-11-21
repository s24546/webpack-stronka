import React from 'react';

const Main = ({ data }) => {
 return (
    <main>
      <h2>Popular Web Browsers</h2>
      <section>
        {data.map((browser, index) => (
          <article key={index}>
            <h3>{browser.name}</h3>
            <img src={browser.logo} alt={browser.name} />
            <p>{browser.description}</p>
          </article>
        ))}
      </section>
    </main>
 );
};

export default Main;