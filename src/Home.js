import React from 'react';
import { connect } from 'react-redux';
import { changeName, getBlogs } from './store';

export class Home extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    event.preventDefault();

    this.props.changeName({ name: event.target.value });
  }

  render() {
    const { list } = this.props;

    return (
      <div>
        <div>
          <input type="text" onChange={this.handleChange} />
          <div>{this.props.name}</div>
          <div>
            {list.map(item => (
              <div key={item.id}>{item.title}</div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default connect(
  state => ({ name: state.get('name'), list: state.get('list') }),
  (dispatch, ownProps) => ({
    getBlogs: dispatch(getBlogs()),
    changeName: name => dispatch(changeName(name))
  })
)(Home);
