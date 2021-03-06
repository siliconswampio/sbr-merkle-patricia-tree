"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.isRawNode = exports.decodeNode = exports.decodeRawNode = exports.LeafNode = exports.ExtensionNode = exports.BranchNode = void 0;
const rlp = __importStar(require("rlp"));
const sbr_util_1 = require("sbr-util");
const nibbles_1 = require("./util/nibbles");
const hex_1 = require("./util/hex");
class BranchNode {
    constructor() {
        this._branches = new Array(16).fill(null);
        this._value = null;
    }
    static fromArray(arr) {
        const node = new BranchNode();
        node._branches = arr.slice(0, 16);
        node._value = arr[16];
        return node;
    }
    get value() {
        return this._value && this._value.length > 0 ? this._value : null;
    }
    set value(v) {
        this._value = v;
    }
    setBranch(i, v) {
        this._branches[i] = v;
    }
    raw() {
        return [...this._branches, this._value];
    }
    serialize() {
        return rlp.encode(this.raw());
    }
    hash() {
        return sbr_util_1.keccak256(this.serialize());
    }
    getBranch(i) {
        const b = this._branches[i];
        if (b !== null && b.length > 0) {
            return b;
        }
        else {
            return null;
        }
    }
    getChildren() {
        const children = [];
        for (let i = 0; i < 16; i++) {
            const b = this._branches[i];
            if (b !== null && b.length > 0) {
                children.push([i, b]);
            }
        }
        return children;
    }
}
exports.BranchNode = BranchNode;
class ExtensionNode {
    constructor(nibbles, value) {
        this._nibbles = nibbles;
        this._value = value;
    }
    static encodeKey(key) {
        return hex_1.addHexPrefix(key, false);
    }
    static decodeKey(key) {
        return hex_1.removeHexPrefix(key);
    }
    get key() {
        return this._nibbles.slice(0);
    }
    set key(k) {
        this._nibbles = k;
    }
    get value() {
        return this._value;
    }
    set value(v) {
        this._value = v;
    }
    encodedKey() {
        return ExtensionNode.encodeKey(this._nibbles.slice(0));
    }
    raw() {
        return [nibbles_1.nibblesToBuffer(this.encodedKey()), this._value];
    }
    serialize() {
        return rlp.encode(this.raw());
    }
    hash() {
        return sbr_util_1.keccak256(this.serialize());
    }
}
exports.ExtensionNode = ExtensionNode;
class LeafNode {
    constructor(nibbles, value) {
        this._nibbles = nibbles;
        this._value = value;
    }
    static encodeKey(key) {
        return hex_1.addHexPrefix(key, true);
    }
    static decodeKey(encodedKey) {
        return hex_1.removeHexPrefix(encodedKey);
    }
    get key() {
        return this._nibbles.slice(0);
    }
    set key(k) {
        this._nibbles = k;
    }
    get value() {
        return this._value;
    }
    set value(v) {
        this._value = v;
    }
    encodedKey() {
        return LeafNode.encodeKey(this._nibbles.slice(0));
    }
    raw() {
        return [nibbles_1.nibblesToBuffer(this.encodedKey()), this._value];
    }
    serialize() {
        return rlp.encode(this.raw());
    }
    hash() {
        return sbr_util_1.keccak256(this.serialize());
    }
}
exports.LeafNode = LeafNode;
function decodeRawNode(raw) {
    if (raw.length === 17) {
        return BranchNode.fromArray(raw);
    }
    else if (raw.length === 2) {
        const nibbles = nibbles_1.bufferToNibbles(raw[0]);
        if (hex_1.isTerminator(nibbles)) {
            return new LeafNode(LeafNode.decodeKey(nibbles), raw[1]);
        }
        return new ExtensionNode(ExtensionNode.decodeKey(nibbles), raw[1]);
    }
    else {
        throw new Error('Invalid node');
    }
}
exports.decodeRawNode = decodeRawNode;
function decodeNode(raw) {
    const des = rlp.decode(raw);
    if (!Array.isArray(des)) {
        throw new Error('Invalid node');
    }
    return decodeRawNode(des);
}
exports.decodeNode = decodeNode;
function isRawNode(n) {
    return Array.isArray(n) && !Buffer.isBuffer(n);
}
exports.isRawNode = isRawNode;
//# sourceMappingURL=trieNode.js.map