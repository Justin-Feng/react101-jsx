

import './App.css';

function App() {
  const commentsHTML = [(<li>Thank you</li>), (<li>Awesome</li>), (<li>I love it</li>), "+100", (<li>+100</li>)];

  // If we want to use HTML elements in jsx, use parenthesis ()
  // If we want to use JavaScript variables in HTML, use cural parenthesis {}
  return (
    <ul className="comments">
      {commentsHTML[0]}
      {commentsHTML[1]}
      <li>{commentsHTML[2]}</li>
      {commentsHTML[3]}
      <li>{commentsHTML[4]}</li>
    </ul>
  )
}

export default App;
