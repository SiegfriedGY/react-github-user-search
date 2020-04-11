import React, {Component} from 'react'

import Search from './search'
import Main from './main'

export default class App extends Component{

    // 把两个内部组件都要用到的数据放在父组件里
    state = {
        searchName: ''
    }

    // 把修改状态的方法和状态本身放在一起
    setSearchName = (searchName) => {
        this.setState({searchName})
    }

    render() {
        return (
            <div className="container">
                <Search setSearchName = {this.setSearchName}/>
                <Main searchName = {this.state.searchName}/>
            </div>
        )
    }
}