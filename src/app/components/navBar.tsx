import "./navBar.css"

export function NavBar() {
  return (
    <nav className="navBar">
      <img src="/icon.png" alt="" />
      <ul className="nav-list">
        <li className="nav-item"><a href="/">Home</a></li>
        <li className="nav-item"><a href="/products/services">Gastronomy</a></li>
        <li className="nav-item"><a href="/products/party">Events</a></li>
        <li className="nav-item"><a href="/products/others">Our products</a></li>
        <li className="nav-item"><a href="/reservation">Reservation</a></li>
        <li className="nav-item"><a href="/#contact">Contact</a></li>
      </ul>
    </nav>
  )
}

