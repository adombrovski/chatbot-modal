export type message = string;

export interface ChatMessage {
  name: 'bot'|'you';
  message: message;
}
