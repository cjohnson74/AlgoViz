import React from "react";
import { getBubbleSortAnimations, getMergeSortAnimations, getQuickSort, getQuickSortAnimations } from "../sortingAlgorithms/sortingAlgorithms";
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

  quickSort() {
    const animations = getQuickSortAnimations(this.state.array);
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName('array-bar');
      const isColorChange = i % 3 !== 2;
      if (isColorChange) {
        const [pivotIdx, barOneIdx, barTwoIdx] = animations[i];
        const barPivotIdx = arrayBars[pivotIdx].style;
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        const color = i % 3 === 0 ? '#07f71f' : '#00aaff';
        setTimeout(() => {
          barPivotIdx.backgroundColor = color;
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * ANIMATION_SPEED_MS);
      } else {
        setTimeout(() => {
          const [barOneIdx, barOneNewHeight, barTwoIdx, barTwoNewHeight] = animations[i];
          const barOneStyle = arrayBars[barOneIdx].style;
          const barTwoStyle = arrayBars[barTwoIdx].style;
          barOneStyle.height = `${barOneNewHeight}px`;
          barTwoStyle.height = `${barTwoNewHeight}px`;
          barTwoStyle.backgroundColor = '#ff9e4e';
        }, i * ANIMATION_SPEED_MS);
      }
    }
  }

  heapSort() {}

  bubbleSort() {
    const animations = getBubbleSortAnimations(this.state.array);
    for (let i = 0; i < animations.length; i++){
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
          const [barOneIdx, barOneNewHeight, barTwoIdx, barTwoNewHeight] = animations[i];
          const barOneStyle = arrayBars[barOneIdx].style;
          const barTwoStyle = arrayBars[barTwoIdx].style;
          barOneStyle.height = `${barOneNewHeight}px`;
          barTwoStyle.height = `${barTwoNewHeight}px`;
          barOneStyle.backgroundColor = '#00aaff';
        }, i * ANIMATION_SPEED_MS);
      }
    }
  }

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
        </button>
      </div>
    );
  }
}

export function randomIntFromInterval(min, max) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}
