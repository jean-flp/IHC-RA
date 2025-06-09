/**
 * @file CGSubtract.js
 * @author liujiacheng
 * @date 2021/8/23
 * @brief CGSubtract.js
 * @copyright Copyright (c) 2021, ByteDance Inc, All Rights Reserved
 */

const {BaseNode} = require('../Utils/BaseNode');
const {GraphUtils} = require('../Utils/GraphUtils');
const APJS = require('../../../amazingpro');

class CGSubtract extends BaseNode {
  constructor() {
    super();
  }

  setNext(index, func) {
    this.nexts[index] = func;
  }

  setInput(index, func) {
    this.inputs[index] = func;
  }

  getOutput(index) {
    const v1 = this.inputs[0]();
    const v2 = this.inputs[1]();
    if (v1 !== undefined && v2 !== undefined) {
      const lastOutput = this.outputs[index];
      if (this.valueType === 'Vector2f') {
        const resultX = v1.x - v2.x;
        const resultY = v1.y - v2.y;
        this.outputs[index] = GraphUtils.getUpdatedValue('Vector2f', lastOutput, resultX, resultY);
      } else if (this.valueType === 'Vector3f') {
        const resultX = v1.x - v2.x;
        const resultY = v1.y - v2.y;
        const resultZ = v1.z - v2.z;
        this.outputs[index] = GraphUtils.getUpdatedValue('Vector3f', lastOutput, resultX, resultY, resultZ);
      } else if (this.valueType === 'Vector4f') {
        const resultX = v1.x - v2.x;
        const resultY = v1.y - v2.y;
        const resultZ = v1.z - v2.z;
        const resultW = v1.w - v2.w;
        this.outputs[index] = GraphUtils.getUpdatedValue('Vector4f', lastOutput, resultX, resultY, resultZ, resultW);
      } else {
        this.outputs[index] = v1 - v2;
      }
      return this.outputs[index];
    }
    return null;
  }
}

exports.CGSubtract = CGSubtract;
