import React from "react";
import { getMergeSortAnimations } from "../sortingAlgorithms/sortingAlgorithms";
import "../SortingVisualizer/SortingVisualizer.css";

// Speed of animation can be changed here
const ANIMATION_SPEED_MS = 3;

// Number of bars (values) in the array can be changed here
const NUMBER_OF_ARRAY_BARS = 200;

export default class SortingVisualizer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      array: [],
    };
  }

  componentDidMount() {
    this.resetArray();
  }

  resetArray() {
    const array = [];
    for (let i = 0; i < NUMBER_OF_ARRAY_BARS; i++) {
      array.push(randomIntFromInterval(5, 730));
    }
    this.setState({ array });
  }

  mergeSort() {
    const animations = getMergeSortAnimations(this.state.array);
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName('array-bar');
      const isColorChange = i % 3 !== 2;
      if (isColorChange) {
        const [barOneIdx, barTwoIdx] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        const color = i % 3 === 0 ? '#07f71f' : '#ff9e4e';
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * ANIMATION_SPEED_MS);
      } else {
        setTimeout(() => {
          const [barOneIdx, newHeight] = animations[i];
          const barOneStyle = arrayBars[barOneIdx].style;
          barOneStyle.height = `${newHeight}px`;
        }, i * ANIMATION_SPEED_MS);
      }
    }
  }

  quickSort() {}

  heapSort() {}

  bubbleSort() {}

  render() {
    const { array } = this.state;

    return (
      <div className="array-container">
        {array.map((value, idx) => (
          <div
            className="array-bar"
            key={idx}
            style={{ height: `${value}px` }}
          ></div>
        ))}
        <button
          id="startBtn"
          type="button"
          className="btn btn-lg btn-primary"
          onClick={() => this.resetArray()}
        >
          Generate New Array
        </button>
        <button
          id="startBtn"
          type="button"
          className="btn btn-lg btn-primary"
          onClick={() => this.mergeSort()}
        >
          Merge Sort
        </button>
        <button
          id="startBtn"
          type="button"
          className="btn btn-lg btn-primary"
          onClick={() => this.quickSort()}
        >
          Quick Sort
          (coming Soon)
        </button>
        <button
          id="startBtn"
          type="button"
          className="btn btn-lg btn-primary"
          onClick={() => this.heapSort()}
        >
          Heap Sort
          (coming soon)
        </button>
        <button
          id="startBtn"
          type="button"
          className="btn btn-lg btn-primary"
          onClick={() => this.bubbleSort()}
        >
          Bubble Sort
          (coming soon)
        </button>
      </div>
    );
  }
}

export function randomIntFromInterval(min, max) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}
