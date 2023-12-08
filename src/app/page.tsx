'use client';
import styles from './page.module.css';
import Link from 'next/link';
import { Button } from 'antd';
import { useLocalStorage } from 'usehooks-ts';
import { useEffect } from 'react';

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useLocalStorage('darktheme', false);
  useEffect(() => {
    console.log(isDarkMode);
  }, [isDarkMode]);
  return (
    <main className={styles.main}>
      <Link href={'/login'}>Login</Link>
      <Link href={'/register'}>Register</Link>
      <Button onClick={(prev) => setIsDarkMode(!prev)}>
        Change Theme to {isDarkMode ? 'Light' : 'Dark'}
      </Button>
    </main>
  );
}
