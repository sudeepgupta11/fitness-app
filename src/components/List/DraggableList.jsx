import React, { useState } from "react";
import "./DraggableList.css";
import DraggableListItem from "./DraggableListItem";
import { Grid, TextField } from "@mui/material";

const DraggableList = (props) => {
  const [data, setdata] = useState(props.data);
  const [unfilteredData, setUnfilteredData] = useState(props.data);
  const [dragStartIndex, setdragStartIndex] = useState(null);

  const onDragStart = (index) => setdragStartIndex(index);

  const onDrop = (dropIndex) => {
    const dragItem = data[dragStartIndex];

    let list = [...data];
    list.splice(dragStartIndex, 1);

    if (dragStartIndex < dropIndex) {
      const updatedArray = [
        ...list.slice(0, dropIndex - 1),
        dragItem,
        ...list.slice(dropIndex - 1, list.length),
      ];
      setdata(updatedArray);
      setUnfilteredData(updatedArray);
    } else {
      const updatedArray = [
        ...list.slice(0, dropIndex),
        dragItem,
        ...list.slice(dropIndex, list.length),
      ];
      setdata(updatedArray);
      setUnfilteredData(updatedArray);
    }
  };
  const onChange = (e) => {
    const searchValue = e.target.value;
    var newData = unfilteredData.filter((item) => {
      if (searchValue === "") return item;
      else if (
        item.description.toLowerCase().includes(searchValue.toLowerCase())
      ) {
        return item;
      }
      return null;
    });
    setdata(newData);
  };

  return (
    <ul className="draggable-list">
      <Grid container>
        <Grid item xs={1} md={2} />
        <Grid item xs={9} md={8}>
          <TextField
            id="filled-search"
            label="Search Keyword"
            type="search"
            variant="filled"
            className="inputField"
            onChange={onChange}
          />
        </Grid>
        <Grid item xs={2} md={2} />

        {data.map((item, index) => (
          <Grid key={index} item xs={11} md={4}>
            <DraggableListItem
              key={index}
              index={index}
              onDragStart={(index) => onDragStart(index)}
              onDrop={(index) => onDrop(index)}
            >
              {props.renderItemContent(item)}
            </DraggableListItem>
          </Grid>
        ))}
      </Grid>

      <DraggableListItem
        key={data.length}
        index={data.length}
        draggale={false}
        onDrop={(index) => onDrop(index)}
      />
    </ul>
  );
};

export default DraggableList;
