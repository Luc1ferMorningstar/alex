import React from 'react';

import MessagePreview from "./MessagePreview.jsx";

import './InboxPage.less';

import messages from '../messages.json';

class InboxPage extends React.Component {
   static contextTypes = {
        router: React.PropTypes.object.isRequired
    };

    state = {
        messages
    };

    constructor(props){
        super(props)
    };

    handlePreviewClick(messageId){
        this.context.router.push(`/inbox/messages/${messageId}`)
    };

    render(){
        const {messages} = this.state;

        return(
            <div className='InboxPage'>
                <div className='messages'>

                    {
                        messages.map(message =>
                        <MessagePreview
                            key={message.id}
                            onClick={this.handlePreviewClick.bind(this,message.id)}
                            title={message.subject}
                            senderName={message.senderName}
                        />
                            )
                        }


                </div>
                <div className="this.handke">
                    {this.props.children}
                </div>

            </div>
        )
    }

}
export default InboxPage;