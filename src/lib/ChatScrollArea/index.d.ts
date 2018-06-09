/// <reference types="react" />
import * as React from 'react';
import { StyleProp, ViewStyle } from 'react-native';
export interface ChatScrollAreaProps {
    maxHeight?: string | number;
    minHeight?: string | number;
    children?: JSX.Element | JSX.Element[];
    containerStyles?: StyleProp<ViewStyle>;
    apiRef?: (api: ChatScrollAreaApi) => void;
    loadOldMessagesThreshold: number;
    onLoadOldMessages: () => Promise<void>;
}
export interface ChatScrollAreaApi {
    scrollToBottom: (animated?: boolean) => void;
    scrollTo: (top: number) => void;
    scrollTop: () => number;
    scrollHeight: () => number;
    clientHeight: () => number;
    scrolledToBottom: () => boolean;
    scrolledToLoadThreshold: () => boolean;
}
export declare class ChatScrollArea extends React.Component<ChatScrollAreaProps> {
    private scrollContainer;
    private clientHeight;
    private scrollHeight;
    private scrollTop;
    constructor(props: ChatScrollAreaProps);
    render(): JSX.Element;
}
export default ChatScrollArea;
