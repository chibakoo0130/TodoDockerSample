import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header style={styles.header}>
      <h1 style={styles.title}>サンプルTodo</h1>
      <nav>
        <Link href="/login" style={styles.link}>ログイン</Link>
        <button onClick={() => setMenuOpen(!menuOpen)} style={styles.menuButton}>☰</button>
      </nav>
      {menuOpen && (
        <div style={styles.menu}>
          <Link href="/" style={styles.menuItem}>ホーム</Link>
          <Link href="/settings" style={styles.menuItem}>設定</Link>
        </div>
      )}
    </header>
  );
}

const styles = {
  header: { display: 'flex', justifyContent: 'space-between', padding: '10px', background: '#2196F3', color: 'white' },
  title: { margin: 0 },
  link: { marginLeft: '10px', color: 'white', textDecoration: 'none' },
  menuButton: { background: 'none', border: 'none', color: 'white', fontSize: '20px' },
  menu: { position: 'absolute', top: '40px', right: '10px', background: 'white', padding: '10px', borderRadius: '5px' },
  menuItem: { display: 'block', padding: '5px', color: '#333', textDecoration: 'none' }
};