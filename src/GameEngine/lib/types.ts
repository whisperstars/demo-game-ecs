import {Entity} from './Entity';

export type EntityId = string;

export type idGenerator = () => EntityId;

export interface ComponentInterface {
}

export interface SystemInterface {
  test: (entity: Entity) => boolean;
  update: (entity: Entity) => void;
}

