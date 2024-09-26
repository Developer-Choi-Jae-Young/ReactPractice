import { Component } from "react";
import Comment from "./Comment";

const comments = [
    { id: 1, value: '안녕하세요 ?' },
    { id: 2, value: '반갑습니다. 곧 점심시간이네요^^' },
    { id: 3, value: '맛있게 드세요.' }
];

let interval = null;

export default class CommentList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            list: []
        }
    }
    
    componentWillMount() {  
        const { list } = this.state;    // 비구조 할당

        interval = setInterval(() => {
            if(list.length < comments.length) {  
                const idx = list.length;
                list.push(comments[idx]);
                this.setState({...list});
            } else {
                this.setState({
                    list: []
                });

                clearInterval(interval);
            }
        }, 2000);
    }

    /*
        interval = setInterval(() => {
            if(this.statelist.length < comments.length) {  
                const idx = this.statelist.length;
                this.statelist.push(comments[idx]);
                this.setState({...list});
            } 
        }, 2000);
    */

    componentWillUnmount() {
        if(interval != null) {
            clearInterval(interval);
        }
    }

    render() {
        return( 
            <div>
                {this.state.list.map((comment, key) =>  {
                    return (
                        <Comment key={key} value={comment.value}/>
                    );
                })}
            </div>
        );
    }
}