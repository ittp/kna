import Link from 'next/link';

const buttonStyle = {
  marginRight: 15,
  fontSize: 20
};

const Header = () => (
  <header>
    <Link href={{ pathname: '/' }} prefetch>
      <button style={buttonStyle}>Home</button>
    </Link>
    <Link href={{ pathname: '/about', query: { name: 'Zeit' } }} prefetch>
      <button style={buttonStyle}>Go to About Page</button>
    </Link>
  </header>
);

export default Header;
