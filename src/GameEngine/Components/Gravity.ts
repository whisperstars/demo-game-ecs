import {ComponentInterface} from '../../ECS_lib/types';
import {Component} from '../../ECS_lib/Component';

export class Gravity implements ComponentInterface{
  value: number;
  
  constructor(value: number = 9.8) {
    this.value = value;
  }
}