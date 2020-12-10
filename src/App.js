import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { Container, List, ListItem } from './style';

const App = () => {
  const [dataList, setDataList] = useState([
    {
      id: 'data-1',
      content: 'data-1',
    },
    {
      id: 'data-2',
      content: 'data-2',
    },
    {
      id: 'data-3',
      content: 'data-3',
    },
  ]);

  const onDragStart = result => {
    console.log('onDragStart', result);
  };

  const onDragEnd = result => {
    console.log('onDragEnd', result);
    if (!result.destination) return;

    const target = dataList[result.source.index];

    const newDataList = [...dataList];
    newDataList.splice(result.source.index, 1);
    newDataList.splice(result.destination.index, 0, target);

    setDataList(newDataList);
  };

  return (
    <Container>
      <DragDropContext onDragStart={onDragStart} onDragEnd={onDragEnd}>
        <Droppable droppableId="droppable-list">
          {provided => (
            <List ref={provided.innerRef} {...provided.droppableProps}>
              {dataList &&
                dataList.map((data, index) => (
                  <Draggable key={data.id} draggableId={data.id} index={index}>
                    {(provided, snapshot) => (
                      <ListItem
                        ref={provided.innerRef}
                        isDragging={snapshot.isDragging}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                      >
                        {data.content}
                      </ListItem>
                    )}
                  </Draggable>
                ))}
              {provided.placeholder}
            </List>
          )}
        </Droppable>
      </DragDropContext>
    </Container>
  );
};

export default App;
