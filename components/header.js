import Link from 'next/link';
import styles from './Header.module.css';

export default function Header() {
    return (
        <header className={styles.header}>
            <Link href={`/`}>
                <a>&larr; home</a>
            </Link>
        </header>
    );
}