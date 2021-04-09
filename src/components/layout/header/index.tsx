import * as React from "react";
import { Layout, Menu } from 'antd';
import { withRouter, RouteComponentProps } from 'react-router-dom'
const { Header } = Layout;
const { Item, SubMenu } = Menu
import './index.scss'
interface IProps { }
interface IState {
  selectedKeys?: Array<string>,
  openKeys?: Array<string>
}
type HomeProps = IProps & RouteComponentProps;
interface Path { key: string, title: string, path?: string }
const navList = [
  { key: '1', title: '首页', path: '/home' },
  { key: '2', title: '发现', path: '/find' },
  { key: '3', title: '知识库', path: '/knowledge' },
]
class HeaderComponent extends React.Component<HomeProps, IState>{
  constructor(props: any) {
    super(props)
    this.state = {
      selectedKeys: [],
      openKeys: []
    }
  }
  UNSAFE_componentWillMount() {
    const currentPath = this.props.location.pathname;
    if (currentPath === '/') {
      this.props.history.push(navList[0].path)
      this.setState({
        selectedKeys: [navList[0].key]
      })
    }
    navList.forEach(item => {
      if (item.path === currentPath) {// 没有二级菜单的话
        this.setState({
          selectedKeys: [item.key]
        })
      }
    })
  }
  menuItemClick = (item: any) => {
    let toPath: Path = { key: '', title: '', path: '' }
    navList.forEach(it=>{
      if(it.key===item.key){
        toPath=it
        this.props.history.push(toPath.path)
      }
    })
    
  }
  render() {
    const { selectedKeys, openKeys } = this.state
    return (
      <Header>
        <Menu mode={'horizontal'} defaultSelectedKeys={selectedKeys} defaultOpenKeys={openKeys} onClick={this.menuItemClick}>
          {navList.map((item) =>
            <Item key={item.key}>{item.title}</Item>
          )}
        </Menu>
      </Header>
    )
  }
}
export default withRouter(HeaderComponent)