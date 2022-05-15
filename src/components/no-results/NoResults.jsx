import { Container, Grid } from "@mui/material";
import { Button } from "@mui/material";
export default function NoResults({ searchTerm }) {
  return (
    <div>
      <Container sx={{width: "940"}} backgroundColor="#FFFFFF">
      <Grid container sx={{ position: 'relative', right: '50px' }}>
        <Grid item xs={12} md={12} lg={12}>
            <span>
              No results found for "{searchTerm}".
              <span style={{ fontWeight: "bold" }}>
                How about some burgers?
              </span>
            </span> 
        </Grid>
        <Grid sx={{mt: 5}} item xs={12} md={12} lg={12}>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#FAC234",
              borderRadius: "30px",
              padding: "20px 45px 20px 45px",
            }}
          >
            Yeah, sure
          </Button>
        </Grid>
      </Grid>
     </Container>
    </div>
  );
}
