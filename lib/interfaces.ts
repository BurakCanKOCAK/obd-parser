import { PID } from './pids/pid';

export interface OBDConnection {
  write: Function,
  on: Function
}

export interface OBDOutput {
  ts: Date
  value: any|null,
  pretty: string|null,
  bytes: string
}

export interface PIDArgs {
  pid: string,
  mode: string,
  bytes: number,
  name: string,
  min: number,
  max: number,
  unit: string
}

export interface PIDInfo {
  name: string,
  pid: string
}


export interface PollerArgs {
  pid: PID,
  interval: number
}
