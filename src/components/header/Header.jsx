
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Logo from "../logo/Logo";
import styles from "./Header.module.scss"
import SearchBar from "../SearchBar/SearchBar.js";


export default function Header({
  onChange,
  searchTerm
}) {
  return (
    <div className={styles.wrapper}>
      <Container>
        <Grid container xs={12} sx={{display: 'flex', alignItems: 'center'}} >
          <Grid xs={12} item className={styles.logo} sx={{pt:'40px'}}>
            <Logo />
          </Grid>
          <Grid xs={12} item className={styles.searchBar}  sx={{pt:'40px'}}>
            <SearchBar onChange={onChange}   searchTerm={searchTerm}/>
          </Grid>
        
        </Grid>
      </Container>
    </div>
  );
}
