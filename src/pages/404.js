import * as React from "react"
import { Link } from "gatsby"
import { navigate } from 'gatsby';


const pageStyles = {
  color: "#232129",
  padding: "96px",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
}

const paragraphStyles = {
  marginBottom: 48,
}
const codeStyles = {
  color: "#8A6534",
  padding: 4,
  backgroundColor: "#FFF4DB",
  fontSize: "1.25rem",
  borderRadius: 4,
}


const NotFoundPage = () => {
  React.useEffect(() => {
    if (process.env.NODE_ENV !== 'development') {
      navigate('/404');
    }
  }, []);

  return (
    <div>
      <h1>404: Página no encontrada</h1>
      <p>Lo siento, la página que estás buscando no existe.</p>
    </div>
  );
};

export default NotFoundPage;

export const Head = () => <title>Not found</title>
