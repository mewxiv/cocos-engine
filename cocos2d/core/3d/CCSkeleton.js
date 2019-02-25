/****************************************************************************
 Copyright (c) 2017-2018 Xiamen Yaji Software Co., Ltd.

 http://www.cocos.com

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated engine source code (the "Software"), a limited,
  worldwide, royalty-free, non-assignable, revocable and non-exclusive license
 to use Cocos Creator solely to develop games on your target platforms. You shall
  not use Cocos Creator software for developing other software or tools that's
  used for developing games. You are not granted to publish, distribute,
  sublicense, and/or sell copies of Cocos Creator.

 The software or tools in this License Agreement are licensed, not sold.
 Xiamen Yaji Software Co., Ltd. reserves all rights not expressly granted to you.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 THE SOFTWARE.
 ****************************************************************************/

import { mat4 } from '../../core/vmath';

let Skeleton = cc.Class({
    name: 'cc.Skeleton',
    extends: cc.Asset,

    ctor () {
        // {[Mat4]}
        this._bindposes = [];
    },

    properties: {
        _jointPaths: [],
        /**
         * Bindposes data stores in one array, it is better for data size.
         */
        _bindposesData: [],

        jointPaths: {
            get () {
                return this._jointPaths;
            }
        },
        bindposes: {
            get () {
                return this._bindposes;
            }
        }
    },

    onLoad () {
        let data = this._bindposesData;
        let poses = this._bindposes;
        for (let i = 0; i < data.length; i++) {
            let pose = data[i];
            poses[i] = mat4.create(
                pose[0], pose[1], pose[2], pose[3],
                pose[4], pose[5], pose[6], pose[7],
                pose[8], pose[9], pose[10], pose[11],
                pose[12], pose[13], pose[14], pose[15],
            );
        }
    }
});

cc.Skeleton = module.exports = Skeleton;