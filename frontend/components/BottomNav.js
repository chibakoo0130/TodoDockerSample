import Link from 'next/link';

export default function BottomNav() {
  return (
    <nav style={styles.nav}>
      <Link href="/" style={styles.link}>Todo</Link>
    </nav>
  );
}

const styles = {
  nav: { position: 'fixed', bottom: 0, width: '100%', background: '#2196F3', textAlign: 'center', padding: '10px' },
  link: { color: 'white', textDecoration: 'none', fontSize: '18px' }
};