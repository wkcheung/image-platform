import React, { Component } from 'react';
import ImageCard from './ImageCard';
import {
  CellMeasurer,
  CellMeasurerCache,
  createMasonryCellPositioner,
  Masonry
} from 'react-virtualized';

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
  defaultHeight: 620,
  defaultWidth: 400,
  fixedWidth: true
})

// Our masonry layout will use 3 columns with a 10px gutter between
const cellPositioner = createMasonryCellPositioner({
  cellMeasurerCache: cache,
  columnCount: 3,
  columnWidth: 400,
  spacer: 10
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
          height={1000}
          width={1000}
        />
        <ImageCard src={imageList[0].source} />
      </div>
    );
  }
}

export default ImageBoard;
