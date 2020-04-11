import React, {Component} from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'   // npm install --save axios

export default class Main extends Component{

    static propTypes = {
        searchName: PropTypes.string.isRequired
    }

    // 共有四种状态！
    state = {
        initView: true,
        loading: false,
        users: null,
        error: null
    };

    // 在这里面，先把状态设置为loading，同时发送异步请求，根据结果的不同，更新为不同的状态。
    componentWillReceiveProps(nextProps) {
        const {searchName} = nextProps;
        this.setState({
            initView: false,
            loading: true
        });
        const url = `https://api.github.com/search/users?q=${searchName}`
        //发送ajax请求
        axios.get(url).then(
            response => {
                const resultList = response.data.items;
                console.log(resultList);
                // 注意，小括号表示返回值，里面的大括号表示是一个对象！！
                const resultUsers = resultList.map((user, index) => ({ //这个//表示对象，不是函数体！
                        name: user.login,
                        url: user.html_url,
                        avatarUrl: user.avatar_url
                    })
                )
                this.setState({ //只用更改2个
                    loading: false,
                    users: resultUsers
                })
            }
        ).catch(
            error => {
                this.setState({ // 注意，这里也要改loading! 和上面对应！！
                    loading: false,
                    error:error.message
                })
            }
        )
    }

    render() {
        const {searchName} = this.props
        console.log(searchName)

        const {initView, loading, users, error} = this.state

        if(initView){
            return <h3>请输入关键字进行搜索！</h3>
        } else if (loading) {
            return <h3>正在搜索{searchName}...</h3>
        } else if (error) {
            return <h3>{error}</h3>
        } else {
            return (
                <div className="row">
                    {
                        users.map((user, index) => (
                            <div className="card" key={index}>
                                <a href={user.url} target="_blank">
                                    <img src={user.avatarUrl} style={{width: 100}}/>
                                </a>
                                <p className="card-text">{user.name}</p>
                            </div>
                        ))
                    }
                </div>
            )
        }
    }
}