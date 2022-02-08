import { useParams, Link } from 'react-router-dom';  // handles links

const Header = () => {  

  const { Articles } = useParams(); // useParams returns an object containing the url params - { topic_slug: 'url_value' }

    return (
      <header>
        <nav>        
          <h3 id = "logo"><strong>Gorge</strong>it</h3>
            <Link to="/">Articles</Link>
            <Link to="/topics">Topics</Link>
            {Articles}
        </nav>
      </header>
    )
};

// export component/s
export { Header };