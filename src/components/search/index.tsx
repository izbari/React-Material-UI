import React from "react";
import { useUIContext } from "../../context/ui";
import { IconButton, Slide } from "@mui/material";
import { SearchBoxContainer, SearchField } from "../../styles/search";
import { Close ,Search as SearchIcon} from "@mui/icons-material";
function Search() {
  const { searchBoxOpen, setSearchBoxOpen } = useUIContext();
  return (
    <Slide direction="down" timeout={500} in={searchBoxOpen}>
      <SearchBoxContainer>
        <SearchField
          color="secondary"
          variant="standard"
          fullWidth
          placeholder="Search..."
        />
        <IconButton onClick={() => setSearchBoxOpen(false)}>
        <SearchIcon
          sx={{
            fontSize: { xs: "2rem", md: "3rem" },
          }}
          color="secondary"
        />
      </IconButton>
        <IconButton onClick={() => setSearchBoxOpen(false)}
       sx={{
            position: "absolute",
            top: 10,
            right: 10,
          }}
          color="secondary">
        <Close
          sx={{
            fontSize: { xs: "2.5em", md: "3.5em" },
          }}
          color="secondary"
        />
      </IconButton>
      </SearchBoxContainer>
     
    </Slide>
  );
}

export default Search;
