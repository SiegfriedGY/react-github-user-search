import React, {Component} from 'react'

import Search from './search'
import Main from './main'

export default class App extends Component{

    // 把两个内部组件都要用到的数据放在这里
    state = {
        searchName: ''
    }

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