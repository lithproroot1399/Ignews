import { FaGithub } from 'react-icons/fa'
import { FiX } from 'react-icons/fi'

import styles from './styles.module.scss';

export function SinInButton() {
    const isUserLoggedIn = true;
    
    return isUserLoggedIn ? (
        <button 
        type="button"
        className={styles.signInButton}
        >
            <FaGithub color="#04d361" />
            Leandro Savio
            <FiX color="#737380" className={styles.closeIcon} />
        </button>
    ) : (
        <button 
        type="button"
        className={styles.signInButton}
        >
            <FaGithub color="#eba417" />
            SingIn in with GitHub
        </button>
    );
}