// Topics covered
// The following is a list of all the topics we cover in the MDN learning area.
// Getting started with the web
// Provides a practical introduction to web development for complete beginners.
// HTML - Structuring the web
// HTML is the language that we use to structure the different parts of our content and define what their meaning or purpose is. This topic teaches HTML in detail.
// CSS- Styling the web
// CSS is the language that we use to control our web content's style and layout, as well as adding behavior like animation. This topic provides comprehensive coverage of CSS.


const { createRoot } = ReactDOM;

const App = () => {

   return (
        <div>
        <h1>Topics covered</h1>
        <p>The following is a list of all the topics we cover in the MDN learning area.</p>
        <a  style={{color:"blue"}} href="https://developer.mozilla.org/en-US/docs/Web/HTML">Getting started with the web</a>
        <p>Provides a practical introduction to web development for complete beginners.</p>
        <a  style={{color:"blue"}} href="https://developer.mozilla.org/en-US/docs/Web/HTML">HTML - Structuring the web</a>
        <p>HTML is the language that we use to structure the different parts of our content and define what their meaning or purpose is. This topic teaches HTML in detail.</p>
        <a  style={{color:"blue"}} href="https://developer.mozilla.org/en-US/docs">CSS- Styling the web</a>
        <p>CSS is the language that we use to control our web content style and layout, as well as adding behavior like animation. This topic provides comprehensive coverage of CSS. </p>
 </div>
    );

}


const root=document.getElementById("root");
createRoot(root).render(<App/>);  // Render the <App /> component to the DOM