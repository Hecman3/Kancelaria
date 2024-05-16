const Header = () => {
  const linkArray = [
    { key: "about", value: "O mnie", path: "/about" },
    { key: "services", value: "Usługi", path: "/services" },
    { key: "contact", value: "Kontakt", path: "/contact" },
  ];
  return (
    <header>
      <div className="shadow">
        <nav className="flex justify-between max-w-screen-xl mx-auto items-center">
          <a href="/">
            <h1 className="inline-block">
              <span className="block">Kancelaria adwokacka</span>{" "}
              <span className="uppercase">adwokat Marcin Hećman</span>
            </h1>
          </a>
          <ul className="flex">
            {linkArray.map((link) => (
              <li key={link.key}>
                <a href={link.path} className="px-3 py-2 inline-block">
                  {link.value}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};
export default Header;
