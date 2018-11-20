import * as React from 'react';
import { AppRegistry, View, Text, TextInput, TouchableHighlight, ViewStyle, StyleProp, TextStyle, Linking } from 'react-native';
import { ChatFeed, Message, Author, ChatBubbleProps, ChatFeedApi } from '../lib';

const styles = {
  button: {
    backgroundColor: '#fff',
    borderColor: '#1D2129',
    borderStyle: 'solid',
    borderRadius: 20,
    borderWidth: 2,
    paddingTop: 8,
    paddingBottom: 8,
    paddingLeft: 16,
    paddingRight: 16,
  } as StyleProp<ViewStyle>,
  selected: {
    backgroundColor: '#0084FF',
    borderColor: '#0084FF',
  } as StyleProp<ViewStyle>,
  buttonText: {
    color: '#1D2129',
    fontSize: 18,
    fontWeight: '300',
  } as StyleProp<TextStyle>,
  buttonTextSelected: {
    color: '#fff',
  } as StyleProp<TextStyle>
};

const buttonHighlighColor = 'rgb(112, 180, 243)';

const customBubble: React.SFC<ChatBubbleProps> = props => (
  <div>
    <p>{props.author && props.author.name + ' ' + (props.message.authorId !== props.yourAuthorId ? 'says' : 'said') + ': ' + props.message.message}</p>
  </div>
);

interface ChatProps {

}

interface ChatState {
  authors: Author[];
  messages: Message[];
  useCustomBubble: boolean;
  currentUser: number;
  messageText: string;
  simulateTyping: boolean;
  showAvatar: boolean;
  showLastSeen: boolean;
  showDateRow: boolean;
  showIsTyping: boolean;
  showLoadingMessages: boolean;
  hasOldMessages: boolean;
}

class Chat extends React.Component<ChatProps, ChatState> {
  private chat: ChatFeedApi;
  private firstAuthorTimer: number;
  private secondAuthorTimer: number;

  constructor(props: ChatProps) {
    super(props);
    this.state = {
      authors: [
        {
          id: 0,
          name: 'You',
        },
        {
          id: 1,
          name: 'Mark',
          isTyping: true,
          lastSeenMessageId: 7,
        },
        {
          id: 2,
          name: 'Evan',
          isTyping: true,
          lastSeenMessageId: 7,
        }
      ],
      messages: [
        {
          id: 0,
          authorId: 1,
          message: 'Hey guys!!',
          createdOn: new Date(2018, 2, 27, 18, 32, 24),
          isSend: true
        },
        {
          id: 1,
          authorId: 2,
          message: 'Hey! Evan here. react-native-bell-chat is pretty dooope.',
          createdOn: new Date(2018, 2, 28, 18, 12, 24),
          isSend: true
        },
        {
          id: 2,
          authorId: 2,
          message: 'Rly is.',
          createdOn: new Date(2018, 2, 28, 18, 13, 24),
          isSend: true
        },
        {
          id: 3,
          authorId: 2,
          message: 'Long group.',
          createdOn: new Date(2018, 2, 28, 18, 13, 24),
          isSend: true
        },
        {
          id: 4,
          authorId: 0,
          message: 'My message.',
          createdOn: new Date(2018, 2, 29, 19, 32, 24),
          isSend: true
        },
        {
          id: 5,
          authorId: 0,
          message: 'One more.',
          createdOn: new Date(2018, 2, 29, 19, 33, 24),
          isSend: true
        },
        {
          id: 6,
          authorId: 2,
          message: 'One more group to see the scroll.',
          createdOn: new Date(2018, 2, 29, 19, 35, 24),
          isSend: true
        },
        {
          id: 7,
          authorId: 2,
          message: 'I said group.',
          createdOn: new Date(2018, 2, 29, 19, 35, 24),
          isSend: true
        }
      ],
      useCustomBubble: false,
      currentUser: 0,
      messageText: '',
      simulateTyping: false,
      showAvatar: true,
      showDateRow: true,
      showLastSeen: true,
      showIsTyping: true,
      showLoadingMessages: false,
      hasOldMessages: true
    } as ChatState;
  }

  onPress(user: number) {
    this.setState({ currentUser: user });
  }

  onMessageSubmit() {
    if (this.state.messageText !== '') {
      const id = Number(new Date());
      const newMessage: Message = {
        id,
        authorId: this.state.currentUser,
        message: this.state.messageText,
        createdOn: new Date(),
        isSend: false
      };
      this.setState(previousState => ({
        messageText: '',
        messages: previousState.messages.concat(newMessage)
      }), () => this.chat && this.chat.onMessageSend());
      setTimeout(() => {
        this.setState(previousState => ({ messages: previousState.messages.map(m => m.id === id ? { ...m, isSend: true } : m) }));
      }, 2000);
    }
    return true;
  }

  render() {
    return (
      <View
        style={{
          maxWidth: 850,
          margin: 0,
          marginLeft: 'auto',
          marginRight: 'auto',
          height: '100%'
        }}
      >
        <Text style={{ textAlign: 'center', fontSize: 48 }}>react-native-bell-chat</Text>
        <Text style={{ textAlign: 'center' }}>
          <Text
            style={{ color: 'blue' }}
            onPress={() => Linking.openURL('https://github.com/PeterKottas/react-native-bell-chat')}
          >
            Github
          </Text>
        </Text>
        <Text
          style={{
            textAlign: 'center',
            margin: 20,
            marginLeft: 'auto',
            marginRight: 'auto',
            backgroundColor: '#eee',
            padding: 10,
            paddingLeft: 20,
            paddingRight: 20
          }}
        >
          npm i -S react-native-bell-chat
        </Text>
        <Text
          style={{
            textAlign: 'center',
            marginLeft: 'auto',
            marginRight: 'auto',
          }}
        >
          OR
        </Text>
        <Text
          style={{
            textAlign: 'center',
            margin: 20,
            marginLeft: 'auto',
            marginRight: 'auto',
            backgroundColor: '#eee',
            padding: 10,
            paddingLeft: 20,
            paddingRight: 20
          }}
        >
          yarn add react-native-bell-chat
        </Text>
        <View
          style={{
            shadowColor: 'rgba(0, 0, 0, .08)',
            shadowOffset: { width: 20, height: 20 },
            shadowRadius: 20,
            margin: 0,
            marginLeft: 'auto',
            marginRight: 'auto',
            borderWidth: 1,
            borderColor: '#ddd',
            paddingBottom: 20,
          }}
        >
          <ChatFeed
            yourAuthorId={0}
            authors={this.state.authors}
            customChatBubble={this.state.useCustomBubble && customBubble}
            maxHeight={350}
            messages={this.state.messages}
            showRecipientAvatar={this.state.showAvatar}
            ref={e => this.chat = e}
            showIsTyping={this.state.showIsTyping}
            showRecipientLastSeenMessage={this.state.showLastSeen}
            showDateRow={this.state.showDateRow}
            showLoadingMessages={this.state.showLoadingMessages}
            // tslint:disable-next-line:no-console
            onLoadOldMessages={() => new Promise(resolve => setTimeout(() => {
              this.setState(previousState => ({
                messages: (new Array(10).fill(1)).map((e, i) => ({
                  id: Number(new Date()),
                  createdOn: new Date(2017, 1, 1),
                  message: 'Old message ' + (i + 1).toString(),
                  authorId: Math.round(Math.random() + 1)
                } as Message)).concat(previousState.messages)
              }), () => resolve());
            }, 1000))}
            hasOldMessages={this.state.hasOldMessages}
          />
          <TextInput
            style={{
              padding: 20
            }}
            placeholder="Type a message..."
            value={this.state.messageText}
            onChange={e => {
              this.setState({ messageText: e.nativeEvent.text });
            }}
            onSubmitEditing={() => this.onMessageSubmit()}
          />
          <View style={{ display: 'flex', justifyContent: 'space-around', flexDirection: 'row' }}>
            <TouchableHighlight
              style={[
                styles.button,
                (this.state.currentUser === 0 ? styles.selected : {}),
              ]}
              onPress={() => this.onPress(0)}
              underlayColor={buttonHighlighColor}
            >
              <Text style={[styles.buttonText, (this.state.currentUser === 0 ? styles.buttonTextSelected : {})]}>You</Text>
            </TouchableHighlight>
            <TouchableHighlight
              style={[
                styles.button,
                (this.state.currentUser === 1 ? styles.selected : {}),
              ]}
              onPress={() => this.onPress(1)}
              underlayColor={buttonHighlighColor}
            >
              <Text style={[styles.buttonText, (this.state.currentUser === 1 ? styles.buttonTextSelected : {})]}>Mark</Text>
            </TouchableHighlight>
            <TouchableHighlight
              style={[
                styles.button,
                (this.state.currentUser === 2 ? styles.selected : {}),
              ]}
              onPress={() => this.onPress(2)}
              underlayColor={buttonHighlighColor}
            >
              <Text style={[styles.buttonText, (this.state.currentUser === 2 ? styles.buttonTextSelected : {})]}>Evan</Text>
            </TouchableHighlight>
          </View>
          <View
            style={{ display: 'flex', justifyContent: 'space-around', marginTop: 10, flexDirection: 'row' }}
          >
            <TouchableHighlight
              style={[
                styles.button,
                (this.state.useCustomBubble ? styles.selected : {}),
              ]}
              onPress={() =>
                this.setState({ useCustomBubble: !this.state.useCustomBubble })
              }
              underlayColor={buttonHighlighColor}
            >
              <Text style={[styles.buttonText, (this.state.useCustomBubble ? styles.buttonTextSelected : {})]}>Custom Bubbles</Text>
            </TouchableHighlight>
            <TouchableHighlight
              style={[
                styles.button,
                (this.state.simulateTyping ? styles.selected : {}),
              ]}
              onPress={() => {
                if (this.state.simulateTyping) {
                  clearInterval(this.firstAuthorTimer);
                  clearInterval(this.secondAuthorTimer);
                } else {
                  this.firstAuthorTimer = setInterval(() => this.setState({
                    authors: this.state.authors.slice(0).map((a, i) => i === 1 ? a : { ...a, isTyping: !a.isTyping })
                    // tslint:disable-next-line:no-any
                  }), 2000) as any;
                  this.secondAuthorTimer = setInterval(() => this.setState({
                    authors: this.state.authors.slice(0).map((a, i) => i === 2 ? a : { ...a, isTyping: !a.isTyping })
                    // tslint:disable-next-line:no-any
                  }), 3200) as any;
                }
                this.setState({ simulateTyping: !this.state.simulateTyping });
              }}
              underlayColor={buttonHighlighColor}
            >
              <Text style={[styles.buttonText, (this.state.simulateTyping ? styles.buttonTextSelected : {})]}>Simulate typing</Text>
            </TouchableHighlight>
            <TouchableHighlight
              style={[
                styles.button,
              ]}
              onPress={() => {
                this.setState({
                  messages: this.state.messages.concat([{
                    id: Number(new Date()),
                    createdOn: new Date(),
                    message: 'Simulated message',
                    authorId: Math.round(Math.random() + 1)
                  }])
                });
              }}
              underlayColor={buttonHighlighColor}
            >
              <Text style={[styles.buttonText]}>Simulate message</Text>
            </TouchableHighlight>
            <TouchableHighlight
              style={[
                styles.button,
              ]}
              onPress={() => {
                this.setState({
                  messages: this.state.messages.concat([{
                    id: Number(new Date()),
                    createdOn: new Date(),
                    message: 'System message',
                  }])
                });
              }}
              underlayColor={buttonHighlighColor}
            >
              <Text style={[styles.buttonText]}>System message</Text>
            </TouchableHighlight>
          </View>
          <View
            style={{ display: 'flex', justifyContent: 'space-around', marginTop: 10, flexDirection: 'row' }}
          >
            <TouchableHighlight
              style={[
                styles.button,
                (this.state.showAvatar ? styles.selected : {}),
              ]}
              onPress={() => this.setState({ showAvatar: !this.state.showAvatar })}
              underlayColor={buttonHighlighColor}
            >
              <Text style={[styles.buttonText, (this.state.showAvatar ? styles.buttonTextSelected : {})]}>Show avatar</Text>
            </TouchableHighlight>
            <TouchableHighlight
              style={[
                styles.button,
                (this.state.showIsTyping ? styles.selected : {}),
              ]}
              onPress={() => this.setState({ showIsTyping: !this.state.showIsTyping })}
              underlayColor={buttonHighlighColor}
            >
              <Text style={[styles.buttonText, (this.state.showIsTyping ? styles.buttonTextSelected : {})]}>Show typing</Text>
            </TouchableHighlight>
            <TouchableHighlight
              style={[
                styles.button,
                (this.state.showLastSeen ? styles.selected : {}),
              ]}
              onPress={() => this.setState({ showLastSeen: !this.state.showLastSeen })}
              underlayColor={buttonHighlighColor}
            >
              <Text style={[styles.buttonText, (this.state.showLastSeen ? styles.buttonTextSelected : {})]}>Show last seen</Text>
            </TouchableHighlight>
            <TouchableHighlight
              style={[
                styles.button,
                (this.state.showDateRow ? styles.selected : {}),
              ]}
              onPress={() => this.setState({ showDateRow: !this.state.showDateRow })}
              underlayColor={buttonHighlighColor}
            >
              <Text style={[styles.buttonText, (this.state.showDateRow ? styles.buttonTextSelected : {})]}>Show date row</Text>
            </TouchableHighlight>
          </View>
          <View
            style={{ display: 'flex', justifyContent: 'space-around', marginTop: 10, flexDirection: 'row' }}
          >
            <TouchableHighlight
              style={[
                styles.button,
                (this.state.showLoadingMessages ? styles.selected : {}),
              ]}
              onPress={() => this.setState({ showLoadingMessages: !this.state.showLoadingMessages })}
              underlayColor={buttonHighlighColor}
            >
              <Text style={[styles.buttonText, (this.state.showLoadingMessages ? styles.buttonTextSelected : {})]}>Show Loading</Text>
            </TouchableHighlight>
            <TouchableHighlight
              style={[
                styles.button,
                (this.state.hasOldMessages ? styles.selected : {}),
              ]}
              onPress={() => this.setState({ hasOldMessages: !this.state.hasOldMessages })}
              underlayColor={buttonHighlighColor}
            >
              <Text style={[styles.buttonText, (this.state.hasOldMessages ? styles.buttonTextSelected : {})]}>Has more messages</Text>
            </TouchableHighlight>
          </View>
        </View>
      </View>
    );
  }
}

AppRegistry.registerComponent('App', () => Chat);

AppRegistry.runApplication('App', {
  initialProps: {},
  rootTag: document.getElementById('chat-ui')
});
