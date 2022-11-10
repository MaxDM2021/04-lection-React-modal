import { Component } from "react";

import Controls from "./Controls";
import Progress from "./Progress";
import Publication from "./Publication";

const LS_KEY = "reader_item_index";

class Reader extends Component {
  state = {
    index: 0,
  };

  changeIndex = (value) => {
    this.setState((state) => ({ index: state.index + value }));
  };

  componentDidMount() {
    const savedState = localStorage.getItem(LS_KEY);
    if (savedState) {
      this.setState({ index: Number(savedState) });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.index !== this.state.index) {
      localStorage.setItem(LS_KEY, this.state.index);
    }
  }

  //   onPrev = () => {
  //     this.setState((state) => ({ index: state.index - 1 }));
  //   };

  //   onNext = () => {
  //     this.setState((state) => ({ index: state.index + 1 }));
  //   };

  render() {
    const { index } = this.state;
    const { items } = this.props;
    const totalItems = items.length;
    const currentItem = items[index];

    return (
      <div>
        <Controls
          current={index + 1}
          total={totalItems}
          onChange={this.changeIndex}
        />

        <Progress current={index + 1} total={totalItems} />

        <Publication item={currentItem} />
      </div>
    );
  }
}

export default Reader;
