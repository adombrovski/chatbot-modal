export type message = string;

export type displayModal =  boolean;

export interface ChatMessage {
  name: 'bot'|'you';
  message: message;
}
