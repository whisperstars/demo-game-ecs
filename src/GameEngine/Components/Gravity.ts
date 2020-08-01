import {ComponentInterface} from '../lib/types';
import {Component} from '../lib/Component';

export class Gravity implements ComponentInterface{
  value: number;
  
  constructor(value: number = 9.8) {
    this.value = value;
  }
}