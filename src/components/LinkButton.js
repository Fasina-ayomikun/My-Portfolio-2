import { Button } from "react-bootstrap";

const LinkButton = ({ url, children }) => {
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
