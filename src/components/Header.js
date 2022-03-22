// React stuff
import { useParams, Link } from 'react-router-dom';  

const Header = () => {  
  const { Articles } = useParams(); // useParams returns an object containing the url params - { topic_slug: 'url_value' }

    return (
      <header>
        <nav>        
          <h3 id = "logo">
            <Link to="/" title="Go to home page">News<span>blaster </span> <small>blasting words in your face 24/7</small></Link>
          </h3>

          <Link to="/">News</Link>
          <Link to="/topics">Topics</Link>
          <p className="user"><i className="fa-solid fa-user-large"></i> Username</p>
          {Articles}
        </nav>
      </header>
    )
};

// export component/s
export { Header };