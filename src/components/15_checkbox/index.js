import { Component } from 'react'
import {Table, Button } from 'antd';
 import {Link} from 'react-router'
const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
  },
  {
    title: 'Age',
    dataIndex: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
  },
];

const data = [];
for (let i = 0; i < 46; i++) {
  data.push({
    key: i,
    name: `Edward King ${i}`,
    age: 32,
    address: `London, Park Lane no. ${i}`,
  });
}

export default class CheckBoxDemo extends Component {
  state = {
    selectedRowKeys: [], // Check here to configure the default column
    loading: false,
  };

  start = () => {
    console.log( "loading btn clicked");
    window.location.href = "https://google.com/contact"; 

{/* <Link
    // 弹出新的选项卡只能用search来传递数据，单页面的话可以使用state
    // 注意，此处search传递是以URL拼接的方式传递传递长度根据浏览器限制来的，只能传递字符串，
    // 还有search传递过去的参数会默认追加一个? e.g search?id=1
    // state则没有限制，可直接传递obj
    to={{ pathname: "/compare", search: JSON.stringify({a:1}) }}
    target="_blank"
    // 当target="_blank"打开新页面的时候，state内容无法传递
    // state：{id:1}
     >
     打开新页面
</Link>  */}

   // this.setState({ loading: true });
    // ajax request after empty completing
    // setTimeout(() => {
    //   this.setState({
    //     selectedRowKeys: [],
    //     loading: false,
    //   });
    // }, 1000);
  };

  onSelectChange = selectedRowKeys => {
    console.log('selectedRowKeys changed: ', selectedRowKeys);
    this.setState({ selectedRowKeys });
  };

  render() {
    const { loading, selectedRowKeys } = this.state;
    const rowSelection = {
      selectedRowKeys,
      onChange: this.onSelectChange,
    };
    const hasSelected = selectedRowKeys.length > 0;
    return (
      <div>
        <div style={{ marginBottom: 16 }}>
          <Button type="primary" onClick={
              this.start
              
        } disabled={!hasSelected} loading={loading}>
            Reload
          </Button>
          <span style={{ marginLeft: 8 }}>
            {hasSelected ? `Selected ${selectedRowKeys.length} items` : ''}
          </span>
        </div>
        <Table rowSelection={rowSelection} columns={columns} dataSource={data} />
      </div>
    );
  }
}
 