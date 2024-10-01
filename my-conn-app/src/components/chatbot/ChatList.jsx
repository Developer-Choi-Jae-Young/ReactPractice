import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-direction: column;
`

const MessageDiv = styled.div`
    float: right;
    text-align: right;
    border: 1px dotted pink;
`
const ResponseDiv = styled.div`
    float: left;
    text-align: left;
    border: 1px dotted skyblue;
`

const commonStyle = {
    borderRadius:'10px',
    padding: '15px',
    margin: '2px'
}

function ChatList({chatList, loading}) {
    return (
        <Container>
            {
                chatList.map((item, index) => {
                    return (
                        <div key={index}>
                            <MessageDiv style={commonStyle}>
                                {item.message}
                            </MessageDiv>
                            <br clear="both"/>
                            <ResponseDiv style={commonStyle}>
                                {item.response}
                            </ResponseDiv>
                        </div>
                    )
                })
            }
            {
                loading && 
                <div>
                    챗봇이 답장을 고민하고 있습니다..
                </div>
            }
        </Container>
    )
}

export default ChatList;