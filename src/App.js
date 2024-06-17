import './App.css';
import Post from './components/Post';
import NavBar, { MenuBar } from './components/NavBar';
import { POSTS } from './features/data';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faLocationArrow } from '@fortawesome/free-solid-svg-icons';
function App() {
  return (
    <div className="container-fluid">
      <NavBar />
      <div>
        <img className="img-lg" src="./images/cse-eng.png" alt="cse-pic" />
      </div>

      <div className="container">
        <MenuBar />
        <div className="row">
          <div className="col-sm-12 col-md-8">
            {POSTS.map((post) => (
              <Post key={post.id} post={post} />
            ))}
          </div>
          <div className="col-sm-12 col-md-4">
            <div className="d-flex justify-content-between">
              <div>
                <FontAwesomeIcon icon={faLocationArrow} />
                <span className="mx-2">Noida India</span>
              </div>
              <div>
                <FontAwesomeIcon icon={faEdit} />
              </div>
            </div>
            <hr />
            <p className="small text-muted">
              Your location will help us serve better and extend a personalised
              experience.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
