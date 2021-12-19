import CardMedia from "@mui/material/CardMedia";
import CardWrap from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import styles from "./Card.module.scss";
import React, { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Grid, IconButton, Button, Stack, Chip } from "@mui/material";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";

const style = {
  box: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 960,
    height: 917,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  },
};

export default function Card({
  name,
  mediaUrl,
  instructions,
  ingrediens,
  tags,
  id,
}) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const ingredients = ingrediens.split(", ");
  const splitTags = tags.split(", ");
  console.log(ingredients);
  return (
    <CardWrap
      className={styles.card}
      sx={{
        maxWidth: 500,
        borderRadius: "15px",
      }}
    >
      <IconButton sx={{ width: "100%" }} onClick={handleOpen}>
        <CardMedia
          className={styles.media}
          component="img"
          image={mediaUrl}
          tags={tags}
        ></CardMedia>
      </IconButton>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style.box}>
          <Grid container p={"38px"}>
            <Grid
              item
              xs={6}
              sx={{ position: "relative", right: "110px", bottom: "105px" }}
            >
              <img src={mediaUrl} alt="" width={"90%"} />
            </Grid>
            <Grid item xs={6}>
              <Typography id="modal-modal-title" variant="h1" component="h1">
                <h1 className={styles.name}>{name.toUpperCase()}</h1>
              </Typography>
              <Button
                startIcon={<PlayCircleOutlineIcon fontSize="large" />}
                variant="contained"
                sx={{
                  backgroundColor: "#FAC234",
                  borderRadius: "30px",
                  padding: "1rem 4rem",
                  margin: "1rem 0rem",
                }}
              >
                PLAY VIDEO
              </Button>
            </Grid>
            <Grid item xs={6}>
              <h3>INGREDIENTS</h3>

              {ingredients &&
                ingredients.map((ingredient) => (
                  <>
                    <div className={styles.listItem}>
                      <span className={styles.ingredient}>👉</span>
                      <span>{ingredient}</span>
                    </div>
                  </>
                ))}
            </Grid>
            <Grid item xs={6}>
              <Typography
                id="modal-modal-description"
                sx={{ mt: 2, pb: "30px" }}
              >
                <h3>INSTRUCTIONS</h3>
                {instructions}
              </Typography>
              <Stack sx={{ my: 2, flexDirection: 'row', display: 'flex' }}>
                {splitTags &&
                  splitTags.map((tag) => (
                    <>
                      <Chip
                        sx={{ mx: 1, px: 2, border: "2px solid", alignSelf: 'start' }}
                        color="warning"
                        variant="outlined"
                        label={tag.toUpperCase()}
                      />
                    </>
                  ))}
              </Stack>
            </Grid>
          </Grid>
        </Box>
      </Modal>
      <CardContent sx={{ flexDirection: "column" }} className={styles.content}>
        <Box sx={{ ml: 1 }} className={styles.content__info}>
          <div>{name.toUpperCase()}</div>
        </Box>
        <Stack sx={{ flexDirection: "row" }}>
          {" "}
          {splitTags &&
            splitTags.map((tag) => (
              <>
                <Stack sx={{ my: 2, mx: 1 }}>
                  <Chip
                    sx={{ px: 1, border: "2px solid" }}
                    color="warning"
                    variant="outlined"
                    label={tag.toUpperCase()}
                  />
                </Stack>
              </>
            ))}
        </Stack>
      </CardContent>
    </CardWrap>
  );
}
