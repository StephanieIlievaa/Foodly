import styles from './Footer.module.scss'
import Container from "@mui/material/Container";

export default function Footer() {
  return (
    <div className={styles.wrapper}>
      <Container className={styles.footerContainer} maxWidth="xl">
            <p style={{padding: '1.25rem', margin: 0}}>Made with ❤️ by Stephanie.</p>
      </Container>
    </div>
  );
}
