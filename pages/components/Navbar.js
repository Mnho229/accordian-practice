import Link from 'next/link';

const Navbar = (props) => {
  return (
    <nav>
      <ul className="c-nav">
        <li><Link href="/">Home</Link></li>
        <li><Link href="/accordions">Accordions</Link></li>
        <li><Link href="/tutorial">Guts</Link></li>
      </ul>

      {style()}
    </nav>
  )
}

function style() {
  return <style jsx="true">{`
    .c-nav {
      list-style: none;
      display: flex;
      justify-content: center;
      padding-top: 10vh;
      padding-bottom: 1rem;
      background-color: #48ACF0;
      margin-top: 0;
    }
    .c-nav li {
      margin: 0 2rem;
      font-size: 2.5rem;
      font-family: sans-serif;
      font-weight: bold;
    }
    .c-nav li:first-child {
      margin-left: 0;
    }
    .c-nav li a {
      text-decoration: none;
      color: white;
    }
  `}</style>
}

export default Navbar;