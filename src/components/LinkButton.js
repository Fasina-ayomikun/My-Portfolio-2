import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const LinkButton = ({ url, children }) => {
  const navigate = useNavigate();

  //   const navigateHandler = (path) => {
  //     navigate(path);
  //   };

  return (
    <Button
      variant="outline-primary"
      href={url}
      target="blank"
      className="project-button"
    >
      {children}
    </Button>
  );
};

export default LinkButton;
