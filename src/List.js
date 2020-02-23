import React from 'react';

export class List extends React.PureComponent {
  render() {
    const { list, filteredText } = this.props;
    console.log('list rendered');
    return (
      <div>
        {list.map(item => (
          <div key={item.id}>{item.title}</div>
        ))}
      </div>
    );
  }
}

export default List;
