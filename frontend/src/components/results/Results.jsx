import { Grid } from "@mui/material";
import React from "react";
import Card from "../cardCategorie/Card.jsx";
import NoResults from "../no-results/NoResults.jsx";

const Results = ({ data, searchTerm, setHaveResult, haveResult }) => {
  return (
    <div>
      <Grid sx={{ mx: 5, justifyContent: "center" }} container spacing={2}>
        {data
          .filter((val) => {
            if (val.name.toLowerCase().includes(searchTerm?.toLowerCase())) {
              setHaveResult(true);
              return (
                <>
                  <Grid item xs={12} md={3}>
                    <Card
                      name={val.name}
                      mediaUrl={val.mediaUrl}
                      instructions={val.instructions}
                      ingrediens={val.ingrediens}
                      tags={val.tags}
                    />
                  </Grid>
                </>
              );
            } else {
              setHaveResult(false);
            }
          })
          .map((val, id) => {
            return (
              <>
                <Grid item xs={12} md={3}>
                  <Card
                    name={val.name}
                    mediaUrl={val.mediaUrl}
                    instructions={val.instructions}
                    ingrediens={val.ingrediens}
                    tags={val.tags}
                  />
                </Grid>
              </>
            );
          })}
        {haveResult === false ? <NoResults searchTerm={searchTerm} /> : null}
      </Grid>
    </div>
  );
};

export default Results;
