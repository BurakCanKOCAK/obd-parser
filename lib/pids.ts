
import * as PIDS from './pids/pid';
import { OBD_MESSAGE_TYPES } from './constants';

export = {
  FuelLevel: new PIDS.FuelLevel(),
  Rpm: new PIDS.Rpm(),
  CoolantTemp: new PIDS.CoolantTemp(),
  VehicleSpeed: new PIDS.VehicleSpeed()
};
