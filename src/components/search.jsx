import React, {Component} from 'react'
import PropTypes from 'prop-types'

export default class Search extends Component{

    static propTypes = {
        setSearchName: PropTypes.func.isRequired
    }

    handleSearch = ()=>{
        const searchName = this.input.value.trim()
        if (searchName) {
            this.props.setSearchName(searchName)
        } else {
            alert("未输入任何关键字！")
        }
    }

    render() {
        return (
            <section className="jumbotron">
                <h3 className="jumbotron-heading">Search Github Users</h3>
                <div>
                    <input type="text" placeholder="enter the name you search"
                           ref={input => this.input = input}/>&nbsp;
                    <button onClick={this.handleSearch}>Search</button>
                </div>
            </section>
        )
    }
}