import * as React from 'react';
import Header from '../../components/layout/header'
import Routers from '../../routers'
import { Layout } from 'antd';
const { Content, Sider,Footer} = Layout;
import './index.scss'
export default class DivLayout extends React.Component {
  render() {
    return (
      <Layout>
      <Header>Header</Header>
      <Content>{Routers()}</Content>
    </Layout>
    )
  }
}