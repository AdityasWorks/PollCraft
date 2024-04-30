import {
  Avatar,
  Card,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@mui/material";
import { useState } from "react";
import { UilUserCircle, UilTrash } from "@iconscout/react-unicons";

const ListBox = ({ candidate, setCandidate }) => {
  const [dense, setDense] = useState(false);

  const deleteIconOnClick = (index) => {
    setCandidate((prev) => prev.filter((_, i) => i !== index));
  };

  if (candidate.length !== 0) {
    return (
      <Card
        sx={{
          width: "28%",
          height: "70vh",
          m: "auto",
          mt: 12,
          overflow: "scroll",
        }}
      >
        <List dense={dense}>
          {candidate.map((value, index) => {
            return (
              <ListItem
                key={index}
                secondaryAction={
                  <IconButton
                    edge="end"
                    onClick={() => {
                      deleteIconOnClick(index);
                    }}
                  >
                    <UilTrash />
                  </IconButton>
                }
              >
                <ListItemAvatar>
                  <Avatar>
                    <UilUserCircle />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary={value} />
              </ListItem>
            );
          })}
        </List>
      </Card>
    );
  }
};

export default ListBox;
