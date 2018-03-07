import React, { Component } from 'react';
import ImageCard from './ImageCard';
import {
  CellMeasurer,
  CellMeasurerCache,
  createMasonryCellPositioner,
  Masonry
} from 'react-virtualized';
import * as Constants from '../../constants/constants';


// Array of images with captions
const imageList = [
  {
    source: 'the-end-of-the-f-world.jpg'
  },
  {
    source: 'the-end-of-the-f-world.jpg'
  },
  {
    source: 'game-of-thrones.jpg'
  }
];

// Default sizes help Masonry decide how many images to batch-measure
const cache = new CellMeasurerCache({
  defaultHeight: Constants.IMAGE_CARD_CELL_MAX_HEIGHT,
  defaultWidth: Constants.IMAGE_CARD_CELL_WIDTH,
  fixedWidth: true
})

// Our masonry layout will use 3 columns with a 10px gutter between
const cellPositioner = createMasonryCellPositioner({
  cellMeasurerCache: cache,
  columnCount: Constants.IMAGE_BOARD_COLUMN_COUNT,
  columnWidth: Constants.IMAGE_CARD_CELL_WIDTH,
  spacer: Constants.IMAGE_BOARD_CONTAINER_SPACER
})

function cellRenderer ({ index, key, parent, style }) {
  const datum = imageList[index];
  return (
    <CellMeasurer
      cache={cache}
      index={index}
      key={key}
      parent={parent}
    >
      <ImageCard style={style} src={datum.source} />
    </CellMeasurer>
  )
}

class ImageBoard extends Component {
  render() {
    return(
      <div className="image-card-container">
        <Masonry
          autoHeight={false}
          cellCount={imageList.length}
          cellMeasurerCache={cache}
          cellPositioner={cellPositioner}
          cellRenderer={cellRenderer}
          height={Constants.IMAGE_BOARD_CONTAINER_HEIGHT}
          width={Constants.IMAGE_BOARD_CONTAINER_WIDTH}
        />
        <ImageCard src={imageList[0].source} />
      </div>
    );
  }
}

export default ImageBoard;
