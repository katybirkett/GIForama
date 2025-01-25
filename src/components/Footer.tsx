function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>
          Powered by{" "}
          <a href="https://giphy.com" target="_blank" rel="noopener noreferrer">
            GIPHY
          </a>
        </p>
        <p>
          Before using the GIPHY API, please review the{" "}
          <a
            href="https://developers.giphy.com/docs/terms/"
            target="_blank"
            rel="noopener noreferrer"
          >
            API Terms of Service
          </a>
          .
        </p>
      </div>
    </footer>
  );
}

export default Footer;
