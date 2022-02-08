import { useParams, Link } from 'react-router-dom';  // handles links

const Header = () => {  

  const { Articles } = useParams(); // useParams returns an object containing the url params - { topic_slug: 'url_value' }

    return (
      <header>
        <nav>        
          <h3 id = "logo">Newsy</h3>
            <Link to="/"><h4>Articles</h4></Link>
            <Link to="/topics"><h4>Topics</h4></Link>
            {Articles}
        </nav>
      </header>
    )
};

// export component/s
export { Header };