import React from 'react';
import Button, { ButtonType, ButtonSize } from './components/Button/button';
import Alert, { AlertType } from './components/Alert/alert';
import Menu from './components/Menu/menu'
import MenuItem from './components/Menu/menuItem'
import SubMenu from './components/Menu/subMenu'
import Tabs from './components/Tabs/tabs'
import TabItem from './components/Tabs/tabItem'
import './App.css'
const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
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
        <Button btnType={ButtonType.Primary} disabled size={ButtonSize.Large}>
          Primary
        </Button>
        <Button btnType={ButtonType.Primary} disabled size={ButtonSize.Small}>
          Primary
        </Button>
        <Button btnType={ButtonType.Danger} disabled size={ButtonSize.Large}>
          Danger
        </Button>
        <Button btnType={ButtonType.Danger} disabled size={ButtonSize.Small}>
          Danger
        </Button>
        <Button
          btnType={ButtonType.Link}
          target="_blank"
          href="http://www.baidu.com"
          size={ButtonSize.Large}
        >
          Default Link
        </Button>
        <Button
          btnType={ButtonType.Link}
          href="http://www.baidu.com"
          disabled
          size={ButtonSize.Large}
        >
          Disabled Link
        </Button>
        <Alert
          title="Hello Alert"
          closable
          description="this is Alert"
          onClose={() => alert('关闭alert')}
        />
        <Alert type={AlertType.Info} title="Hello Alert" />
        <Alert type={AlertType.Success} title="Hello Alert" />
        <Alert type={AlertType.Warning} title="Hello Alert" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
};

export default App;
