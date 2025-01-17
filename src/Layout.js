import "./Layout.css";

export function Layout({ children }) {
  return (
    <>
      <body>
        <nav className="navbar">
          <div className="logo">coliicount</div>
        </nav>
        {children}
      </body>
    </>
  );
}
