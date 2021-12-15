import * as React from "react";
import Box from "@mui/material/Box";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import Container from '@mui/material/Container'
import styles from './SearchBar.module.scss'


export default function SearchBar({
  setSearchTerm
}) {

  return (
    <Container className={styles.wrapper} sx={{ position: 'relative', top: '40px', left: '70px' }}>
      <Box
        component="form"
        className={styles.searchForm}
        sx={{
          display: "flex",
          alignItems: "center",
          width: 940,
          height: "90px",
          bgcolor: "black",
          borderRadius: 60,
          backgroundColor: "white",

        }}
      >
        <IconButton
          type="submit"
          sx={{ p: "10px", color: "black" }}
          aria-label="search"
        >
          <SearchIcon sx={{ ml: 3 }} />
        </IconButton>
        <InputBase
          type="text"
          placeholder="Search for recepies"
          onChange={(event) => {
            setSearchTerm(event.target.value)
          }}
        />
      </Box>
    </Container>
  );
}
