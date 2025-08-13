import "./Error.css";

const Error = () => {
  return (
    <div className="error-container">
      <h1 className="error-code">404</h1>
      <h2 className="error-title">Oops! Page Not Found</h2>
      <p className="error-message">
        The page you are looking for doesn't exist or has been moved.
      </p>
      <a href="/" className="error-button">
        Go Back Home
      </a>
    </div>
  );
};

export default Error;
