import React, { useState } from 'react';
import Button from './components/Button/button';
import Alert from './components/Alert/alert';
import Menu from './components/Menu/menu';
import MenuItem from './components/Menu/menuItem';
import SubMenu from './components/Menu/subMenu';
import Tabs from './components/Tabs/tabs';
import TabItem from './components/Tabs/tabItem';
import Icon from './components/Icon/icon';
import Transition from './components/Transition/transition';
import './App.css';
const App: React.FC = () => {
  const [show, setShow] = useState(true);
  return (
    <div className="App">
      <Button onClick={() => setShow(!show)}>Transition</Button>
      <Transition in={show} timeout={300} wrapper>
        <Button onClick={() => setShow(!show)}>Transition</Button>
      </Transition>
      <Transition in={show} timeout={300}>
        <header className="App-header">
          <Icon icon="coffee" theme="primary" size="10x" />
          <Tabs>
            <TabItem label="tab1">This is content tab1</TabItem>
            <TabItem label="tab2" disabled>
              This is content tab2
            </TabItem>
            <TabItem label="tab3">This is content tab3</TabItem>
          </Tabs>
          <Tabs type="card">
            <TabItem label="tab1">This is content tab1</TabItem>
            <TabItem label="tab2" disabled>
              This is content tab2
            </TabItem>
            <TabItem label="tab3">This is content tab3</TabItem>
          </Tabs>
          <Menu>
            <MenuItem>cool link1</MenuItem>
            <MenuItem disabled>cool link2</MenuItem>
            <SubMenu title="dropdown">
              <MenuItem>dropdown1</MenuItem>
              <MenuItem>dropdown2</MenuItem>
            </SubMenu>
            <MenuItem>cool link3</MenuItem>
          </Menu>
          <Menu mode="vertical" defaultIndex="0" defaultOpenSubMenus={['2']}>
            <MenuItem>cool link1</MenuItem>
            <MenuItem disabled>cool link2</MenuItem>
            <SubMenu title="dropdown">
              <MenuItem>dropdown1</MenuItem>
              <MenuItem>dropdown2</MenuItem>
            </SubMenu>
            <MenuItem>cool link3</MenuItem>
          </Menu>
          <Button
            className="hello"
            onClick={(e) => {
              e.preventDefault();
              alert(123);
            }}
          >
            Hello
          </Button>
          <Button btnType="primary" disabled size="lg">
            Primary
          </Button>
          <Button btnType="primary" disabled size="sm">
            Primary
          </Button>
          <Button btnType="danger" disabled size="lg">
            Danger
          </Button>
          <Button btnType="danger" disabled size="sm">
            Danger
          </Button>
          <Button
            btnType="link"
            target="_blank"
            href="http://www.baidu.com"
            size="lg"
          >
            Default Link
          </Button>
          <Button btnType="link" href="http://www.baidu.com" disabled size="lg">
            Disabled Link
          </Button>
          <Alert
            title="Hello Alert"
            closable
            description="this is Alert"
            onClose={() => console.log('closable alert')}
          />
          <Alert type="danger" title="Hello Alert" closable />
          <Alert type="success" title="Hello Alert" closable />
          <Alert type="warning" title="Hello Alert" closable />
        </header>
      </Transition>
    </div>
  );
};

export default App;
