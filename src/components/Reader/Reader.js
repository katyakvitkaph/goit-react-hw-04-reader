import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import qs from "query-string";
import Controls from './Controls/Controls';
import Publications from './Publication/Publication';
import Counter from './Counter/Counter';
import s from '../styles.css';

export default class Reader extends Component {
  static propTypes = {
    items: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
      }),
    ),
  };

  componentDidMount() {
    const { history, location, items } = this.props;
    console.log('location :', location);
    const queryString = location.search;
    // const sp = qs.parse(queryString);
    const searchParams = new URLSearchParams(queryString);

    const item = searchParams.get('item');
    if (!item || item > items.length) {
      history.replace({
        pathname: location.pathname,
        search: 'item=1',
      });
    }
  }

  incrementBut = () => {
    this.props.history.push({
      pathname: this.props.location.pathname,
      search: `item=${this.getItem() + 1}`,
    });
  };

  decrementBut = () => {
    this.props.history.push({
      pathname: this.props.location.pathname,
      search: `item=${this.getItem() - 1}`,
    });
  };

  getItem = () => {
    const { items } = this.props;
    const paramsString = this.props.location.search;
    const searchParams = new URLSearchParams(paramsString);
    const item = +searchParams.get('item');
    return !item || item < 1 || item > items.length ? 1 : item;
  };

  render() {
    const index = this.getItem() - 1;

    const { items } = this.props;
    const isNextDisabled = index === items.length;
    const isPrevDisabled = index === 0;

    return (
      <div className={s.reader}>
        <Publications publications={items[index]} />
        <Controls
          decrementBut={this.decrementBut}
          incrementBut={this.incrementBut}
          index={index}
          length={items.length}
          isNextDisabled={isNextDisabled}
          isPrevDisabled={isPrevDisabled}
        />
        <Counter countNumbs={index + 1} />
      </div>
    );
  }
}
