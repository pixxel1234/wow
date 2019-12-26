export enum MainMessage {
  WEBSOCKET_CLOSE = 'WEBSOCKET_CLOSE',
  EMULATOR_DISCONNECT = 'EMULATOR_DISCONNECT',
  EMULATOR_CONNECTED = 'EMULATOR_CONNECTED',
  UPDATE_EMULATORS = 'UPDATE_EMULATORS',
  SET_SERVER = 'SET_SERVER',
  SET_PLAYERS = 'SET_PLAYERS',
  SET_PLAYER = 'SET_PLAYER',
  SET_PLAYER_ID = 'SET_PLAYER_ID',
  GAME_MODE = 'GAME_MODE',
  SERVER_FULL = 'SERVER_FULL',
  WRONG_VERSION = 'WRONG_VERSION',
  AUTHENTICATION_ACCEPTED = 'AUTHENTICATION_ACCEPTED',
  AUTHENTICATION_DENIED = 'AUTHENTICATION_DENIED',
  CHAT_GLOBAL = 'CHAT_GLOBAL',
  CHAT_COMMAND = 'CHAT_COMMAND',
  SET_CONNECTION_ERROR = 'SET_CONNECTION_ERROR',
  SET_EMULATOR_ERROR = 'SET_EMULATOR_ERROR',
  CONSOLE_INFO = 'CONSOLE_INFO',
  SET_CHARACTER = 'SET_CHARACTER'
}

export enum RendererMessage {
  CREATE_CONNECTION = 'CREATE_CONNECTION',
  DISCONNECT = 'DISCONNECT',
  UPDATE_EMULATORS = 'UPDATE_EMULATORS',
  CREATE_EMULATOR_CONNECTION = 'CREATE_EMULATOR_CONNECTION',
  DISCONNECT_EMULATOR = 'DISCONNECT_EMULATOR',
  PLAYER_UPDATE = 'PLAYER_UPDATE',
  PASSWORD = 'PASSWORD',
  CHAT_GLOBAL = 'CHAT_GLOBAL',
  CHAT_COMMAND = 'CHAT_COMMAND',
  HOTKEYS_CHANGED = 'HOTKEYS_CHANGED'
}
