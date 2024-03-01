import styles from './HomeBanner.module.css';

export default function HomeBanner() {
    return (
        <div className={styles["home-banner"]}>
            <div className={styles["home-container05"]}>
                <img src="/images/logo.jpeg" alt="logo" />
            </div>
        </div>
    );
}