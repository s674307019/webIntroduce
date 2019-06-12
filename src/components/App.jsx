import React, { Component } from 'react';
import { Timeline, Icon, Drawer, Card } from 'antd';
const { Item: TimelineItem }=Timeline;

import './App.styl';
import netscapePic from 'images/netscape.png';
import pageLc from 'images/page_lc.png';
import angularPic from 'images/angular.png';
import reactPic from 'images/react.jpg';
import vuePic from 'images/vue.png';
import webChange from 'images/web_change.png';
import mvcPic from 'images/mvc.png';
import mvvmPic from 'images/mvvm.png';
import webpackPic from 'images/webpack.png';

class App extends Component {
    constructor(){
        super();
        this.state={
            visibleDrawer: false
            ,titleDrawer: ''
            ,imgDrawer: ''
        }
    }

    componentDidMount() {
    }

    // 路由发生变化-触发生命周期函数
    componentWillReceiveProps(){
    }

    // 关闭抽屉
    onCloseDrawer=() => {
        this.setState({
            visibleDrawer: false
        })
    };

    netscapeShow=() => {
        this.setState({
            visibleDrawer: true
            ,titleDrawer: '网景浏览器'
            ,imgDrawer: netscapePic
        })
    };

    angularShow=() => {
        this.setState({
            visibleDrawer: true
            ,titleDrawer: 'angular生命周期'
            ,imgDrawer: angularPic
        })
    };

    reactShow=() => {
        this.setState({
            visibleDrawer: true
            ,titleDrawer: 'react生命周期'
            ,imgDrawer: reactPic
        })
    };

    vueShow=() => {
        this.setState({
            visibleDrawer: true
            ,titleDrawer: 'vue生命周期'
            ,imgDrawer: vuePic
        })
    };

    render() {
        const { visibleDrawer, titleDrawer, imgDrawer }=this.state;
        return (
            <div className="app">
                <h1>前端演变过程</h1>
                <Card title={<span style={{fontWeight: 600}}>一、前言</span>}>
                    <p>记得，在12年我刚开始参加工作的时候，那时还没有专职的“前端开发”。当时的前端开发工作是由设计师（“美工”）来完成的，在这种模式下，设计师需要完成页面的设计、切图、css、html，以及部分js交互的工作。这些完成的工作会成为设计资源的一部分被一并提供给开发人员，由于设计师对css、js了解的很有限，他们完成的页面代码会有许多问题还需要开发人员来调整和修改，当时的页面还都是后端同步渲染输出的，基本上大家也只会改一些js表单验证，常用的css属性。所以在这个时期，前端工具、类库、框架是几乎没有的。</p>
                    <p>万维网（WWW）是欧洲核子研究组织的一帮科学家为了方便看文档、传论文而创造的，这就是为什么Web网页都基于Document。Document就是用标记语言+超链接写成的由文字和图片构成的HTML页面，这样的功能已经完全满足学术交流的需要，所以网页的早期形态和Document一样，完全基于HTML页面，并且所有内容都是静态的。</p>
                    <ul>
                        <li>
                            <p>随着网页从学术机构走向公众社会，网页承载的功能便超出了学术范围而变得愈加丰富，因此早期网页的局限性也逐渐显露出来。</p>
                            <ul>
                                <li>第一，所有的网页都基于HTML页面，因为没有任何手段可以控制局部内容的显示和隐藏，因此任何局部的变化哪怕只多出一个标点符号，都只能重新下载一个新的页面。</li>
                                <li>第二，计算任务只能在服务端实现。由于网速限制，与服务器通信的过程是非常缓慢的，并且此过程是同步阻塞的，于是会出现这样的场景：用户提交一个表单，然后整个页面消失，浏览器呈现白屏，经过漫长的等待，浏览器渲染出一个和之前一模一样的页面，只不过输入框旁边多了一排红色小字：用户名错误。</li>
                                <li>第三，所有页面都是静态的，这意味着一个电商网站有一千种商品，哪怕页面布局一模一样，也必须写一千个单独的页面。</li>
                            </ul>
                        </li>
                    </ul>
                    <p>早期网页形态低下的效率是无法通过提高网速来解决的。</p>
                </Card>
                <Card title={<span style={{fontWeight: 600}}>二、发展历程</span>} style={{marginTop: 20}}>
                    <Timeline mode="alternate">
                        <TimelineItem>
                            <section onClick={this.netscapeShow} style={{cursor: 'pointer'}}>
                                1994年可以看做前端历史的起点，这一年10月13日网景推出了第一版Navigator；这一年，Tim Berners-Lee创建了W3C；这一年，Tim的基友发布了CSS。还是这一年，为动态web网页设计的服务端脚本PHP诞生。
                            </section>
                        </TimelineItem>
                        <TimelineItem color="green">
                            <section>
                                1995年网景推出了JavaScript，实现了客户端的计算任务（如表单验证）
                            </section>
                        </TimelineItem>
                        <TimelineItem dot={<Icon type="clock-circle-o" style={{ fontSize: '16px' }} />}>
                            <section>
                                1996年微软推出了iframe标签，实现了异步的局部加载
                            </section>
                        </TimelineItem>
                        <TimelineItem>
                            <section>
                                1997年第一代es规范发布
                            </section>
                        </TimelineItem>
                        <TimelineItem color="red">
                            <section>
                                1999年W3C发布第四代HTML标准，同年微软推出用于异步数据传输的ActiveX，随即各大浏览器厂商模仿实现了XMLHttpRequest。这标识着Ajax的诞生，但是Ajax这个词是在六年后问世的，特别是在谷歌使用Ajax技术打造了Gmail和谷歌地图之后，Ajax获得了巨大的关注。Ajax是Web网页迈向Web应用的关键技术，它标识着Web2.0时代的到来
                            </section>
                        </TimelineItem>
                        <TimelineItem>
                            <section>
                                ......
                            </section>
                        </TimelineItem>
                        <TimelineItem>
                            <section>
                                2006年，XMLHttpRequest被W3C正式纳入标准；至此，早期的Document终于进化为了Web page，前言中的三个局限都得到了妥善的解决
                            </section>
                        </TimelineItem>
                        <TimelineItem dot={<Icon type="clock-circle-o" style={{ fontSize: '16px' }} />}>
                            <section>
                                也在2006年，John Resig发布了jQuery，jQuery主要用于操作DOM，其优雅的语法、符合直觉的事件驱动型的编程思维使其极易上手，因此很快风靡全球，大量基于jQuery的插件构成了一个庞大的生态系统，更加稳固了jQuery作为JS库一哥的地位；起初制约Web开发从后到前的因素很简单，就是前端很多事干不了或干不好，当时的浏览器性能弱，标准化程度低。特别是占据大量市场份额的IE，不仅low，并且bug多
                            </section>
                        </TimelineItem>
                        <TimelineItem>
                            <section>
                                2008年问世的谷歌V8引擎改变了这一局面。现代浏览器的崛起终结了微软的垄断时代，前端的计算能力一下子变得过剩了
                            </section>
                        </TimelineItem>
                        <TimelineItem>
                            <section onClick={this.angularShow} style={{cursor: 'pointer'}}>
                                2009年第五代es标准发布，标准组织（欧洲计算机制造商联盟——European Computer Manufacturers Association,ECMA）也非常配合的发布了第五代JavaScript，前端的装备得到了整体性的提高，前端界如同改革开放走进了一个令人目不暇接的新时代；
                                同年AngularJS诞生，随后被谷歌收购
                            </section>
                        </TimelineItem>
                        <TimelineItem>
                            <section>
                                2010年，backbone.js诞生
                            </section>
                        </TimelineItem>
                        <TimelineItem>
                            <section onClick={this.reactShow} style={{cursor: 'pointer'}}>
                                2011年，React和Ember诞生
                            </section>
                        </TimelineItem>
                        <TimelineItem>
                            <section onClick={this.vueShow} style={{cursor: 'pointer'}}>
                                2014年，Vue.js诞生，第五代HTML标准发布
                            </section>
                        </TimelineItem>
                        <TimelineItem>
                            <section>
                                2015年第六代es标准发布，也就是现在说的ES6
                            </section>
                        </TimelineItem>
                        <TimelineItem>
                            <section>
                                ......
                            </section>
                        </TimelineItem>
                    </Timeline>
                </Card>
                <Card title={<span style={{fontWeight: 600}}>三、早期网页与服务器交互导图</span>} style={{marginTop: 20}}>
                    <section style={{textAlign: 'center'}}>
                        <img style={{width: '50%'}} src={pageLc} alt=""/>
                    </section>
                </Card>
                <Card title={<span style={{fontWeight: 600}}>四、现在网页与服务器交互导图</span>} style={{marginTop: 20}}>
                    <section style={{textAlign: 'center'}}>
                        <img style={{width: '50%'}} src={webChange} alt=""/>
                    </section>
                </Card>
                <Card title={<span style={{fontWeight: 600}}>五、MVC-react</span>} style={{marginTop: 20}}>
                    <ul>
                        <li>Model：读写数据</li>
                        <li>View：展示数据</li>
                        <li>Controller：数据处理</li>
                    </ul>
                    <section style={{textAlign: 'center'}}>
                        <img style={{width: '50%'}} src={mvcPic} alt=""/>
                    </section>
                </Card>
                <Card title={<span style={{fontWeight: 600}}>六、MVVM-vue</span>} style={{marginTop: 20}}>
                    <ul>
                        <li>MVVM与MVC最大的区别就是：它实现了View和Model的自动同步</li>
                    </ul>
                    <section style={{textAlign: 'center'}}>
                        <img style={{width: '50%'}} src={mvvmPic} alt=""/>
                    </section>
                </Card>
                <Card title={<span style={{fontWeight: 600}}>七、SPA</span>} style={{marginTop: 20}}>
                    <section style={{textAlign: 'center'}}>
                        前端可以做到读写数据、切换视图、用户交互，这意味着，网页其实是一个应用程序，而不是信息的纯展示。这种单张网页的应用程序称为 SPA（single-page application）
                    </section>
                </Card>
                <Card title={<span style={{fontWeight: 600}}>八、NPM</span>} style={{marginTop: 20}}>
                    <ul>
                        <li>
                            <p>NPM是随同NodeJS一起安装的包管理工具，能解决NodeJS代码部署上的很多问题，常见的使用场景有以下几种：</p>
                            <ul>
                                <li>允许用户从NPM服务器下载别人编写的第三方包到本地使用。</li>
                                <li>允许用户从NPM服务器下载并安装别人编写的命令行程序到本地使用。</li>
                                <li>允许用户将自己编写的包或命令行程序上传到NPM服务器供别人使用</li>
                            </ul>
                        </li>
                    </ul>
                </Card>
                <Card title={<span style={{fontWeight: 600}}>九、webpack</span>} style={{marginTop: 20}}>
                    <ul>
                        <li>
                            <p>本质上，webpack 是一个现代 JavaScript 应用程序的静态模块打包器(module bundler)。当 webpack 处理应用程序时，它会递归地构建一个依赖关系图(dependency graph)，其中包含应用程序需要的每个模块，然后将所有这些模块打包成一个或多个 bundle</p>
                            <ul>
                                <li>入口(entry)</li>
                                <li>输出(output)</li>
                                <li>loader</li>
                                <li>插件(plugins)</li>
                            </ul>
                        </li>
                    </ul>
                    <section style={{textAlign: 'center'}}>
                        <img style={{width: '50%'}} src={webpackPic} alt=""/>
                    </section>
                </Card>
                <Card title={<span style={{fontWeight: 600}}>十、致未来</span>} style={{marginTop: 20}}>
                    <section>
                        <p>阮一峰老师说未来有两种软件工程师：</p>
                        <ul>
                            <li>
                                <h3>前端工程师</h3>
                                <ul>
                                    <li>手机端</li>
                                    <li>PC端</li>
                                    <li>TV端</li>
                                    <li>VR端</li>
                                    <li>......</li>
                                </ul>
                            </li>
                            <li>
                                <h3>云工程师</h3>
                            </li>
                        </ul>
                    </section>
                </Card>

                <Drawer
                    width={700}
                    title={titleDrawer}
                    placement="right"
                    closable={false}
                    onClose={this.onCloseDrawer}
                    visible={visibleDrawer}
                >
                    <img style={{width: '100%'}} src={imgDrawer} alt={titleDrawer}/>
                </Drawer>
            </div>
        );
    }
}

export default App;
