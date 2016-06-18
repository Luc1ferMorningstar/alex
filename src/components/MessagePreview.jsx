import React from 'react';

import "./MessagePreview.less";

class MessagePreview extends React.Component{
    render(){
        const {title, senderName, onClick} = this.props;
        return(
            <div className="MessagePreview" onClick={onClick}>
                <div className="title">
                    {title}
                </div>
                <div class="from">
                    {`from ${senderName}`}
                </div>
            </div>
        )
    }

}
export default MessagePreview;