import React, { Component } from 'react';
import ImageCard from './ImageCard';
import {
  AutoSizer,
  CellMeasurer,
  CellMeasurerCache,
  createMasonryCellPositioner,
  Masonry,
  WindowScroller
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
  },
  {
    source: 'game-of-thrones.jpg'
  }
];

class ImageBoard extends Component {
  constructor(props) {
    super(props);

    this._cache = new CellMeasurerCache({
      defaultHeight: Constants.IMAGE_CARD_CELL_MAX_HEIGHT,
      defaultWidth: Constants.IMAGE_CARD_CELL_WIDTH,
      fixedWidth: true
    });

    this.calculateColumnCount = this.calculateColumnCount.bind(this);
    this.cellRenderer = this.cellRenderer.bind(this);
    this.initCellPositioner = this.initCellPositioner.bind(this);
    this.onResize = this.onResize.bind(this);
    this.renderAutoSizer = this.renderAutoSizer.bind(this);
    this.renderMasonry = this.renderMasonry.bind(this);
    this.setMasonryRef = this.setMasonryRef.bind(this);
  }

  calculateColumnCount() {
    this._columnCount = Math.floor(this._width / (Constants.IMAGE_CARD_CELL_WIDTH + Constants.IMAGE_BOARD_CONTAINER_SPACER));
    this._columnCount = this._columnCount > Constants.IMAGE_BOARD_COLUMN_MAX_COUNT?
      Constants.IMAGE_BOARD_COLUMN_MAX_COUNT : this._columnCount;
  }

  cellRenderer({ index, key, parent, style }) {
    const datum = imageList[index];
    return (
      <CellMeasurer
        cache={this._cache}
        index={index}
        key={key}
        parent={parent}
      >
        <ImageCard style={style} src={datum.source} />
      </CellMeasurer>
    )
  }

  initCellPositioner() {
    if (typeof this._cellPositioner === 'undefined') {
      this._cellPositioner = createMasonryCellPositioner({
        cellMeasurerCache: this._cache,
        columnCount: Constants.IMAGE_BOARD_COLUMN_MAX_COUNT,
        columnWidth: Constants.IMAGE_CARD_CELL_WIDTH,
        spacer: Constants.IMAGE_BOARD_CONTAINER_SPACER
      })
    }
  }

  onResize({width}) {
    this._width = width;

    this.calculateColumnCount();
    this.resetCellPositioner();
    this._masonry.recomputeCellPositions();
  }

  renderAutoSizer({height, scrollTop}) {
    this._height = height;
    this._scrollTop = scrollTop;

    return (
      <AutoSizer
        disableHeight
        height={height}
        onResize={this.onResize}
        scrollTop={this._scrollTop}>
        {this.renderMasonry}
      </AutoSizer>
    );
  }

  renderMasonry({width}) {
    this._width = width;

    this.calculateColumnCount();
    this.initCellPositioner();

    return(
      <Masonry
        autoHeight={true}
        cellCount={imageList.length}
        cellMeasurerCache={this._cache}
        cellPositioner={this._cellPositioner}
        cellRenderer={this.cellRenderer}
        height={this._height}
        ref={this.setMasonryRef}
        scrollTop={this._scrollTop}
        width={width}
      />
    );
  }

  resetCellPositioner() {
    this._cellPositioner.reset({
      columnCount: this._columnCount,
      columnWidth: Constants.IMAGE_CARD_CELL_WIDTH,
      spacer: Constants.IMAGE_BOARD_CONTAINER_SPACER
    })
  }

  setMasonryRef(ref) {
    this._masonry = ref;
  }

  render() {
    return (
      <div className="image-card-container">
        <WindowScroller>
          {this.renderAutoSizer}
        </WindowScroller>
      </div>
    );
  }
}

export default ImageBoard;
