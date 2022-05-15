import Card from "../card-categorie/Card.jsx"
// import { useState } from "react";
import styles from "./ItalianFood.module.scss";
import {  Container, Grid} from "@mui/material";

export default function ItalianFood({ cards = [] }) {

  return (
    <div className={styles.wrapperHome}>
      <Container className={styles.container} maxWidth="xl">
      <Grid container className={styles.gridContainer} sx={{position:'relative', left: '154px'}}>
          <Grid item className={styles.titleWrapper}>
            <div className={styles.title}>
            🍝 MAYBE SOME ITALIAN?
            </div>
          </Grid>
        </Grid>
        <Grid sx={{mt: 3}} container spacing={2} item className={styles.cards} xl>
          {cards.map((card) => (
            <Grid item xs={3} md={3}>
              <Card lassName={styles.card}
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
