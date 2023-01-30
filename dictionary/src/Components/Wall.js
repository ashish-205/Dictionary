import Grid from "@mui/material/Unstable_Grid2";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
export const Wall = ({load}) => {
  
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));
  return (
    <>  <br />
      <div className="container">
        {load?.map((e, index) => {
          return (
            <span key={index}>
              <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={3}>
                  <Grid xs={12}>
                    <Item>
                      <img
                        style={{ borderRadius: "10px" }}
                        src={e.artworkUrl100}
                        alt="Img"
                      />
                      <p>{e.collectionName}</p>
                      <audio
                        style={{ width: "40vw" }}
                        controls
                        src={e.previewUrl}
                      ></audio>
                    </Item>
                  </Grid>
                </Grid>
              </Box>
            </span>
          );
        })}
      </div>
    </>
  );
};
