import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import {
  Link
} from 'react-router-dom';
import React from 'react';
import { menu } from '../untils/menu.js'

import Routes from '../router/routes'

const { Header, Content, Footer, Sider } = Layout;
const SubMenu = Menu.SubMenu;

class SiderDemo extends React.Component {
  state = {
    collapsed: false,
  };

  onCollapse = (collapsed) => {
    console.log(collapsed);
    this.setState({ collapsed });
  }

  toggle = () => {
    this.setState({ 
        collapsed: !this.state.collapsed 
    }); 
  }

  render() {
    console.log('layouts')
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Sider
          collapsible
          collapsed={this.state.collapsed}
          onCollapse={this.onCollapse}
        >
          <div className="logo" style={{height: "64px", color: "#fff", lineHeight: "64px", fontSize: '23px', paddingLeft: '24px'}}>
            {this.state.collapsed ? 'Yan' : 'Infun'}
          </div>
          <Menu theme="dark" defaultSelectedKeys={['0']} mode="inline">
            { 
              menu.map((subMenu, index) => {
                if (subMenu.children && subMenu.children.length) {
                  return (
                    <SubMenu key={index} title={<span><Icon type={subMenu.icon} /><span>{subMenu.name}</span></span>}>
                      {subMenu.children.map(menu => (
                        <Menu.Item key={menu.url}><Link to={`/${menu.url}`}>{menu.name}</Link></Menu.Item>
                      ))}
                    </SubMenu>
                  )
                } else {
                  return (
                    <Menu.Item key={index}>
                      <Link to={`/${subMenu.url}`}>
                        <Icon type={subMenu.icon} /><span className="nav-text">{subMenu.name}</span>
                      </Link>
                    </Menu.Item>
                  )
                }
              })
            }
            {/* <Menu.Item key="2">
              <Icon type="pie-chart" />
              <span>我的主页</span>
            </Menu.Item>
            <Menu.Item key="1">
              <Icon type="desktop" />
              <span>Option 2</span>
            </Menu.Item>
            <SubMenu
              key="sub1"
              title={<span><Icon type="user" /><span>User</span></span>}
            >
              <Menu.Item key="3">wangyanfeng</Menu.Item>
              <Menu.Item key="4">gongli</Menu.Item>
              <Menu.Item key="5">Alex</Menu.Item>
            </SubMenu>
            <SubMenu
              key="sub2"
              title={<span><Icon type="team" /><span>Team</span></span>}
            >
              <Menu.Item key="6">Team 1</Menu.Item>
              <Menu.Item key="8">Team 2</Menu.Item>
            </SubMenu>
            <Menu.Item key="9">
              <Icon type="file" />
              <span>File</span>
            </Menu.Item> */}
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: '0 16px' }}>
          <Icon
              className="trigger"
              type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={this.toggle}
            />
          </Header>
          <Content style={{ margin: '16px 16px' }}>
            {/* <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>User</Breadcrumb.Item>
              <Breadcrumb.Item>Bill</Breadcrumb.Item>
            </Breadcrumb> */}
            <Routes></Routes>
          </Content>
          <Footer style={{ textAlign: 'center' }}>
            Ant Design ©2018 Created by Ant UED
          </Footer>
        </Layout>
      </Layout>
    );
  }
}

export default SiderDemo