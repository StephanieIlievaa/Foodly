import Card from "../card-categorie/Card.jsx";
// import { useState } from "react";
import styles from "./SeaFood.module.scss";
import { Container, Grid } from "@mui/material";

export default function SeaFood({ cards = [] }) {
  return (
    <div className={styles.wrapperHome}>
      <Container className={styles.container} maxWidth="xl">
        <Grid
          container
          className={styles.gridContainer}
          sx={{ position: "relative", left: "154px" }}
        >
          <Grid item className={styles.titleWrapper}>
            <div className={styles.title}>
              <img
                src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/160/apple/285/water-wave_1f30a.png"
                alt="wave"
                width="50"
                height="50"
              />
              DOWN FOR SEAFOOD TONIGHT?
            </div>
          </Grid>
        </Grid>
        <Grid
          sx={{ mt: 3 }}
          container
          spacing={2}
          item
          className={styles.cards}
          xl
        >
          {cards.map((card) => (
            <Grid item xs={3} md={3}>
              <Card
                name={card.name}
                tags={card.tags}
                mediaUrl={card.mediaUrl}
                ingrediens={card.ingrediens}
                instructions={card.instructions}
                key={card.id}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
}
