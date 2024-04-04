const MenuButton = ({id}) => {

  const toggleVisibility = () => {
      const element = document.getElementById(id);
      
      if(element.classList.contains("nav-bar-hide")){
          element.classList.remove("nav-bar-hide");
      }else {
          element.classList.add("nav-bar-hide");
      }
  };

  return (
      <>
          <div onClick={toggleVisibility} className="menu-button">
              <div className="bar"></div>
              <div className="bar"></div>
              <div className="bar"></div>
          </div>
      </>
  );
};


function Header() {

    return (
      <header>
        <div className="logo">
           <h1>Arthur A. Kennedy</h1>
        </div>

        <MenuButton id="nav-bar"/>

        <nav className="nav-bar-hide" id="nav-bar">
            <ul className="menu">
                <li><a href="#home">Home</a></li>
                <li><a href="#portfolio">Portfolio</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
      </header>
    )
}
  
  export default Header
  