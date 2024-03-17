import {Container, Grid} from "@mui/material";
import BookTile from "./BookTile";

const SearchResultsList = ({ books }) => {
  return (
    <Container>
      <Grid container spacing={3}>
        {
          books.map((book, i) => {
            return (
              <Grid item key={i} xs={12} md={6} lg={4}>
                {books && books.length > 0 &&<BookTile book={book}/>}
              </Grid>
            )
          })
        }
      </Grid>
    </Container>
  );
};

export default SearchResultsList;