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
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.isRawNode = exports.decodeNode = exports.decodeRawNode = exports.LeafNode = exports.ExtensionNode = exports.BranchNode = void 0;
var rlp = __importStar(require("rlp"));
var sbr_util_1 = require("sbr-util");
var nibbles_1 = require("./util/nibbles");
var hex_1 = require("./util/hex");
var BranchNode = /** @class */ (function () {
    function BranchNode() {
        this._branches = new Array(16).fill(null);
        this._value = null;
    }
    BranchNode.fromArray = function (arr) {
        var node = new BranchNode();
        node._branches = arr.slice(0, 16);
        node._value = arr[16];
        return node;
    };
    Object.defineProperty(BranchNode.prototype, "value", {
        get: function () {
            return this._value && this._value.length > 0 ? this._value : null;
        },
        set: function (v) {
            this._value = v;
        },
        enumerable: false,
        configurable: true
    });
    BranchNode.prototype.setBranch = function (i, v) {
        this._branches[i] = v;
    };
    BranchNode.prototype.raw = function () {
        return __spread(this._branches, [this._value]);
    };
    BranchNode.prototype.serialize = function () {
        return rlp.encode(this.raw());
    };
    BranchNode.prototype.hash = function () {
        return sbr_util_1.keccak256(this.serialize());
    };
    BranchNode.prototype.getBranch = function (i) {
        var b = this._branches[i];
        if (b !== null && b.length > 0) {
            return b;
        }
        else {
            return null;
        }
    };
    BranchNode.prototype.getChildren = function () {
        var children = [];
        for (var i = 0; i < 16; i++) {
            var b = this._branches[i];
            if (b !== null && b.length > 0) {
                children.push([i, b]);
            }
        }
        return children;
    };
    return BranchNode;
}());
exports.BranchNode = BranchNode;
var ExtensionNode = /** @class */ (function () {
    function ExtensionNode(nibbles, value) {
        this._nibbles = nibbles;
        this._value = value;
    }
    ExtensionNode.encodeKey = function (key) {
        return hex_1.addHexPrefix(key, false);
    };
    ExtensionNode.decodeKey = function (key) {
        return hex_1.removeHexPrefix(key);
    };
    Object.defineProperty(ExtensionNode.prototype, "key", {
        get: function () {
            return this._nibbles.slice(0);
        },
        set: function (k) {
            this._nibbles = k;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ExtensionNode.prototype, "value", {
        get: function () {
            return this._value;
        },
        set: function (v) {
            this._value = v;
        },
        enumerable: false,
        configurable: true
    });
    ExtensionNode.prototype.encodedKey = function () {
        return ExtensionNode.encodeKey(this._nibbles.slice(0));
    };
    ExtensionNode.prototype.raw = function () {
        return [nibbles_1.nibblesToBuffer(this.encodedKey()), this._value];
    };
    ExtensionNode.prototype.serialize = function () {
        return rlp.encode(this.raw());
    };
    ExtensionNode.prototype.hash = function () {
        return sbr_util_1.keccak256(this.serialize());
    };
    return ExtensionNode;
}());
exports.ExtensionNode = ExtensionNode;
var LeafNode = /** @class */ (function () {
    function LeafNode(nibbles, value) {
        this._nibbles = nibbles;
        this._value = value;
    }
    LeafNode.encodeKey = function (key) {
        return hex_1.addHexPrefix(key, true);
    };
    LeafNode.decodeKey = function (encodedKey) {
        return hex_1.removeHexPrefix(encodedKey);
    };
    Object.defineProperty(LeafNode.prototype, "key", {
        get: function () {
            return this._nibbles.slice(0);
        },
        set: function (k) {
            this._nibbles = k;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LeafNode.prototype, "value", {
        get: function () {
            return this._value;
        },
        set: function (v) {
            this._value = v;
        },
        enumerable: false,
        configurable: true
    });
    LeafNode.prototype.encodedKey = function () {
        return LeafNode.encodeKey(this._nibbles.slice(0));
    };
    LeafNode.prototype.raw = function () {
        return [nibbles_1.nibblesToBuffer(this.encodedKey()), this._value];
    };
    LeafNode.prototype.serialize = function () {
        return rlp.encode(this.raw());
    };
    LeafNode.prototype.hash = function () {
        return sbr_util_1.keccak256(this.serialize());
    };
    return LeafNode;
}());
exports.LeafNode = LeafNode;
function decodeRawNode(raw) {
    if (raw.length === 17) {
        return BranchNode.fromArray(raw);
    }
    else if (raw.length === 2) {
        var nibbles = nibbles_1.bufferToNibbles(raw[0]);
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
    var des = rlp.decode(raw);
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