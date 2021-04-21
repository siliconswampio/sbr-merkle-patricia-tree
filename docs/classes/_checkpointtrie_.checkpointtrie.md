[merkle-patricia-tree](../README.md) › ["checkpointTrie"](../modules/_checkpointtrie_.md) › [CheckpointTrie](_checkpointtrie_.checkpointtrie.md)

# Class: CheckpointTrie

Adds checkpointing to the {@link BaseTrie}

## Hierarchy

* [Trie](_basetrie_.trie.md)

  ↳ **CheckpointTrie**

  ↳ [SecureTrie](_secure_.securetrie.md)

## Index

### Constructors

* [constructor](_checkpointtrie_.checkpointtrie.md#constructor)

### Properties

* [EMPTY_TRIE_ROOT](_checkpointtrie_.checkpointtrie.md#empty_trie_root)
* [db](_checkpointtrie_.checkpointtrie.md#db)

### Accessors

* [isCheckpoint](_checkpointtrie_.checkpointtrie.md#ischeckpoint)
* [root](_checkpointtrie_.checkpointtrie.md#root)

### Methods

* [_createInitialNode](_checkpointtrie_.checkpointtrie.md#private-_createinitialnode)
* [_deleteNode](_checkpointtrie_.checkpointtrie.md#private-_deletenode)
* [_findDbNodes](_checkpointtrie_.checkpointtrie.md#private-_finddbnodes)
* [_findValueNodes](_checkpointtrie_.checkpointtrie.md#private-_findvaluenodes)
* [_formatNode](_checkpointtrie_.checkpointtrie.md#private-_formatnode)
* [_saveStack](_checkpointtrie_.checkpointtrie.md#private-_savestack)
* [_setRoot](_checkpointtrie_.checkpointtrie.md#_setroot)
* [_updateNode](_checkpointtrie_.checkpointtrie.md#private-_updatenode)
* [batch](_checkpointtrie_.checkpointtrie.md#batch)
* [checkRoot](_checkpointtrie_.checkpointtrie.md#checkroot)
* [checkpoint](_checkpointtrie_.checkpointtrie.md#checkpoint)
* [commit](_checkpointtrie_.checkpointtrie.md#commit)
* [copy](_checkpointtrie_.checkpointtrie.md#copy)
* [createReadStream](_checkpointtrie_.checkpointtrie.md#createreadstream)
* [del](_checkpointtrie_.checkpointtrie.md#del)
* [findPath](_checkpointtrie_.checkpointtrie.md#findpath)
* [get](_checkpointtrie_.checkpointtrie.md#get)
* [lookupNode](_checkpointtrie_.checkpointtrie.md#lookupnode)
* [put](_checkpointtrie_.checkpointtrie.md#put)
* [revert](_checkpointtrie_.checkpointtrie.md#revert)
* [walkTrie](_checkpointtrie_.checkpointtrie.md#walktrie)
* [createProof](_checkpointtrie_.checkpointtrie.md#static-createproof)
* [fromProof](_checkpointtrie_.checkpointtrie.md#static-fromproof)
* [prove](_checkpointtrie_.checkpointtrie.md#static-prove)
* [verifyProof](_checkpointtrie_.checkpointtrie.md#static-verifyproof)

## Constructors

###  constructor

\+ **new CheckpointTrie**(...`args`: any): *[CheckpointTrie](_checkpointtrie_.checkpointtrie.md)*

*Overrides [Trie](_basetrie_.trie.md).[constructor](_basetrie_.trie.md#constructor)*

*Defined in [checkpointTrie.ts:8](https://github.com/ethereumjs/ethereumjs-vm/blob/master/packages/trie/src/checkpointTrie.ts#L8)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any |

**Returns:** *[CheckpointTrie](_checkpointtrie_.checkpointtrie.md)*

## Properties

###  EMPTY_TRIE_ROOT

• **EMPTY_TRIE_ROOT**: *Buffer*

*Inherited from [Trie](_basetrie_.trie.md).[EMPTY_TRIE_ROOT](_basetrie_.trie.md#empty_trie_root)*

*Defined in [baseTrie.ts:45](https://github.com/ethereumjs/ethereumjs-vm/blob/master/packages/trie/src/baseTrie.ts#L45)*

The root for an empty trie

___

###  db

• **db**: *CheckpointDB*

*Overrides [Trie](_basetrie_.trie.md).[db](_basetrie_.trie.md#db)*

*Defined in [checkpointTrie.ts:8](https://github.com/ethereumjs/ethereumjs-vm/blob/master/packages/trie/src/checkpointTrie.ts#L8)*

## Accessors

###  isCheckpoint

• **get isCheckpoint**(): *boolean*

*Overrides [Trie](_basetrie_.trie.md).[isCheckpoint](_basetrie_.trie.md#ischeckpoint)*

*Defined in [checkpointTrie.ts:18](https://github.com/ethereumjs/ethereumjs-vm/blob/master/packages/trie/src/checkpointTrie.ts#L18)*

Is the trie during a checkpoint phase?

**Returns:** *boolean*

___

###  root

• **get root**(): *Buffer*

*Inherited from [Trie](_basetrie_.trie.md).[root](_basetrie_.trie.md#root)*

*Defined in [baseTrie.ts:71](https://github.com/ethereumjs/ethereumjs-vm/blob/master/packages/trie/src/baseTrie.ts#L71)*

Gets the current root of the `trie`

**Returns:** *Buffer*

• **set root**(`value`: Buffer): *void*

*Inherited from [Trie](_basetrie_.trie.md).[root](_basetrie_.trie.md#root)*

*Defined in [baseTrie.ts:66](https://github.com/ethereumjs/ethereumjs-vm/blob/master/packages/trie/src/baseTrie.ts#L66)*

Sets the current root of the `trie`

**Parameters:**

Name | Type |
------ | ------ |
`value` | Buffer |

**Returns:** *void*

## Methods

### `Private` _createInitialNode

▸ **_createInitialNode**(`key`: Buffer, `value`: Buffer): *Promise‹void›*

*Inherited from [Trie](_basetrie_.trie.md).[_createInitialNode](_basetrie_.trie.md#private-_createinitialnode)*

*Defined in [baseTrie.ts:238](https://github.com/ethereumjs/ethereumjs-vm/blob/master/packages/trie/src/baseTrie.ts#L238)*

Creates the initial node from an empty tree.

**Parameters:**

Name | Type |
------ | ------ |
`key` | Buffer |
`value` | Buffer |

**Returns:** *Promise‹void›*

___

### `Private` _deleteNode

▸ **_deleteNode**(`k`: Buffer, `stack`: TrieNode[]): *Promise‹void›*

*Inherited from [Trie](_basetrie_.trie.md).[_deleteNode](_basetrie_.trie.md#private-_deletenode)*

*Defined in [baseTrie.ts:381](https://github.com/ethereumjs/ethereumjs-vm/blob/master/packages/trie/src/baseTrie.ts#L381)*

Deletes a node from the database.

**Parameters:**

Name | Type |
------ | ------ |
`k` | Buffer |
`stack` | TrieNode[] |

**Returns:** *Promise‹void›*

___

### `Private` _findDbNodes

▸ **_findDbNodes**(`onFound`: [FoundNodeFunction](../modules/_basetrie_.md#foundnodefunction)): *Promise‹void›*

*Inherited from [Trie](_basetrie_.trie.md).[_findDbNodes](_basetrie_.trie.md#private-_finddbnodes)*

*Defined in [baseTrie.ts:697](https://github.com/ethereumjs/ethereumjs-vm/blob/master/packages/trie/src/baseTrie.ts#L697)*

Finds all nodes that are stored directly in the db
(some nodes are stored raw inside other nodes)
called by {@link ScratchReadStream}

**Parameters:**

Name | Type |
------ | ------ |
`onFound` | [FoundNodeFunction](../modules/_basetrie_.md#foundnodefunction) |

**Returns:** *Promise‹void›*

___

### `Private` _findValueNodes

▸ **_findValueNodes**(`onFound`: [FoundNodeFunction](../modules/_basetrie_.md#foundnodefunction)): *Promise‹void›*

*Inherited from [Trie](_basetrie_.trie.md).[_findValueNodes](_basetrie_.trie.md#private-_findvaluenodes)*

*Defined in [baseTrie.ts:715](https://github.com/ethereumjs/ethereumjs-vm/blob/master/packages/trie/src/baseTrie.ts#L715)*

Finds all nodes that store k,v values
called by {@link TrieReadStream}

**Parameters:**

Name | Type |
------ | ------ |
`onFound` | [FoundNodeFunction](../modules/_basetrie_.md#foundnodefunction) |

**Returns:** *Promise‹void›*

___

### `Private` _formatNode

▸ **_formatNode**(`node`: TrieNode, `topLevel`: boolean, `opStack`: BatchDBOp[], `remove`: boolean): *Buffer | (null | Buffer‹› | Buffer‹›[])[]*

*Inherited from [Trie](_basetrie_.trie.md).[_formatNode](_basetrie_.trie.md#private-_formatnode)*

*Defined in [baseTrie.ts:549](https://github.com/ethereumjs/ethereumjs-vm/blob/master/packages/trie/src/baseTrie.ts#L549)*

Formats node to be saved by `levelup.batch`.

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`node` | TrieNode | - | the node to format. |
`topLevel` | boolean | - | if the node is at the top level. |
`opStack` | BatchDBOp[] | - | the opStack to push the node's data. |
`remove` | boolean | false | whether to remove the node (only used for CheckpointTrie). |

**Returns:** *Buffer | (null | Buffer‹› | Buffer‹›[])[]*

The node's hash used as the key or the rawNode.

___

### `Private` _saveStack

▸ **_saveStack**(`key`: Nibbles, `stack`: TrieNode[], `opStack`: BatchDBOp[]): *Promise‹void›*

*Inherited from [Trie](_basetrie_.trie.md).[_saveStack](_basetrie_.trie.md#private-_savestack)*

*Defined in [baseTrie.ts:511](https://github.com/ethereumjs/ethereumjs-vm/blob/master/packages/trie/src/baseTrie.ts#L511)*

Saves a stack of nodes to the database.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`key` | Nibbles | the key. Should follow the stack |
`stack` | TrieNode[] | a stack of nodes to the value given by the key |
`opStack` | BatchDBOp[] | a stack of levelup operations to commit at the end of this funciton  |

**Returns:** *Promise‹void›*

___

###  _setRoot

▸ **_setRoot**(`value?`: Buffer): *void*

*Inherited from [Trie](_basetrie_.trie.md).[_setRoot](_basetrie_.trie.md#_setroot)*

*Defined in [baseTrie.ts:75](https://github.com/ethereumjs/ethereumjs-vm/blob/master/packages/trie/src/baseTrie.ts#L75)*

**Parameters:**

Name | Type |
------ | ------ |
`value?` | Buffer |

**Returns:** *void*

___

### `Private` _updateNode

▸ **_updateNode**(`k`: Buffer, `value`: Buffer, `keyRemainder`: Nibbles, `stack`: TrieNode[]): *Promise‹void›*

*Inherited from [Trie](_basetrie_.trie.md).[_updateNode](_basetrie_.trie.md#private-_updatenode)*

*Defined in [baseTrie.ts:278](https://github.com/ethereumjs/ethereumjs-vm/blob/master/packages/trie/src/baseTrie.ts#L278)*

Updates a node.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`k` | Buffer | - |
`value` | Buffer | - |
`keyRemainder` | Nibbles | - |
`stack` | TrieNode[] |   |

**Returns:** *Promise‹void›*

___

###  batch

▸ **batch**(`ops`: BatchDBOp[]): *Promise‹void›*

*Inherited from [Trie](_basetrie_.trie.md).[batch](_basetrie_.trie.md#batch)*

*Defined in [baseTrie.ts:594](https://github.com/ethereumjs/ethereumjs-vm/blob/master/packages/trie/src/baseTrie.ts#L594)*

The given hash of operations (key additions or deletions) are executed on the DB

**`example`** 
const ops = [
   { type: 'del', key: Buffer.from('father') }
 , { type: 'put', key: Buffer.from('name'), value: Buffer.from('Yuri Irsenovich Kim') }
 , { type: 'put', key: Buffer.from('dob'), value: Buffer.from('16 February 1941') }
 , { type: 'put', key: Buffer.from('spouse'), value: Buffer.from('Kim Young-sook') }
 , { type: 'put', key: Buffer.from('occupation'), value: Buffer.from('Clown') }
]
await trie.batch(ops)

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`ops` | BatchDBOp[] |   |

**Returns:** *Promise‹void›*

___

###  checkRoot

▸ **checkRoot**(`root`: Buffer): *Promise‹boolean›*

*Inherited from [Trie](_basetrie_.trie.md).[checkRoot](_basetrie_.trie.md#checkroot)*

*Defined in [baseTrie.ts:86](https://github.com/ethereumjs/ethereumjs-vm/blob/master/packages/trie/src/baseTrie.ts#L86)*

Checks if a given root exists.

**Parameters:**

Name | Type |
------ | ------ |
`root` | Buffer |

**Returns:** *Promise‹boolean›*

___

###  checkpoint

▸ **checkpoint**(): *void*

*Defined in [checkpointTrie.ts:26](https://github.com/ethereumjs/ethereumjs-vm/blob/master/packages/trie/src/checkpointTrie.ts#L26)*

Creates a checkpoint that can later be reverted to or committed.
After this is called, all changes can be reverted until `commit` is called.

**Returns:** *void*

___

###  commit

▸ **commit**(): *Promise‹void›*

*Defined in [checkpointTrie.ts:35](https://github.com/ethereumjs/ethereumjs-vm/blob/master/packages/trie/src/checkpointTrie.ts#L35)*

Commits a checkpoint to disk, if current checkpoint is not nested.
If nested, only sets the parent checkpoint as current checkpoint.

**`throws`** If not during a checkpoint phase

**Returns:** *Promise‹void›*

___

###  copy

▸ **copy**(`includeCheckpoints`: boolean): *[CheckpointTrie](_checkpointtrie_.checkpointtrie.md)*

*Overrides [Trie](_basetrie_.trie.md).[copy](_basetrie_.trie.md#copy)*

*Defined in [checkpointTrie.ts:64](https://github.com/ethereumjs/ethereumjs-vm/blob/master/packages/trie/src/checkpointTrie.ts#L64)*

Returns a copy of the underlying trie with the interface of CheckpointTrie.

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`includeCheckpoints` | boolean | true | If true and during a checkpoint, the copy will contain the checkpointing metadata and will use the same scratch as underlying db.  |

**Returns:** *[CheckpointTrie](_checkpointtrie_.checkpointtrie.md)*

___

###  createReadStream

▸ **createReadStream**(): *ReadStream*

*Inherited from [Trie](_basetrie_.trie.md).[createReadStream](_basetrie_.trie.md#createreadstream)*

*Defined in [baseTrie.ts:679](https://github.com/ethereumjs/ethereumjs-vm/blob/master/packages/trie/src/baseTrie.ts#L679)*

The `data` event is given an `Object` that has two properties; the `key` and the `value`. Both should be Buffers.

**Returns:** *ReadStream*

Returns a [stream](https://nodejs.org/dist/latest-v12.x/docs/api/stream.html#stream_class_stream_readable) of the contents of the `trie`

___

###  del

▸ **del**(`key`: Buffer): *Promise‹void›*

*Inherited from [Trie](_basetrie_.trie.md).[del](_basetrie_.trie.md#del)*

*Defined in [baseTrie.ts:143](https://github.com/ethereumjs/ethereumjs-vm/blob/master/packages/trie/src/baseTrie.ts#L143)*

Deletes a value given a `key`.

**Parameters:**

Name | Type |
------ | ------ |
`key` | Buffer |

**Returns:** *Promise‹void›*

A Promise that resolves once value is deleted.

___

###  findPath

▸ **findPath**(`key`: Buffer): *Promise‹Path›*

*Inherited from [Trie](_basetrie_.trie.md).[findPath](_basetrie_.trie.md#findpath)*

*Defined in [baseTrie.ts:157](https://github.com/ethereumjs/ethereumjs-vm/blob/master/packages/trie/src/baseTrie.ts#L157)*

Tries to find a path to the node for the given key.
It returns a `stack` of nodes to the closest node.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`key` | Buffer | the search key  |

**Returns:** *Promise‹Path›*

___

###  get

▸ **get**(`key`: Buffer): *Promise‹Buffer | null›*

*Inherited from [Trie](_basetrie_.trie.md).[get](_basetrie_.trie.md#get)*

*Defined in [baseTrie.ts:103](https://github.com/ethereumjs/ethereumjs-vm/blob/master/packages/trie/src/baseTrie.ts#L103)*

Gets a value given a `key`

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`key` | Buffer | the key to search for |

**Returns:** *Promise‹Buffer | null›*

A Promise that resolves to `Buffer` if a value was found or `null` if no value was found.

___

###  lookupNode

▸ **lookupNode**(`node`: Buffer | Buffer[]): *Promise‹TrieNode | null›*

*Inherited from [Trie](_basetrie_.trie.md).[lookupNode](_basetrie_.trie.md#lookupnode)*

*Defined in [baseTrie.ts:247](https://github.com/ethereumjs/ethereumjs-vm/blob/master/packages/trie/src/baseTrie.ts#L247)*

Retrieves a node from db by hash.

**Parameters:**

Name | Type |
------ | ------ |
`node` | Buffer &#124; Buffer[] |

**Returns:** *Promise‹TrieNode | null›*

___

###  put

▸ **put**(`key`: Buffer, `value`: Buffer): *Promise‹void›*

*Inherited from [Trie](_basetrie_.trie.md).[put](_basetrie_.trie.md#put)*

*Defined in [baseTrie.ts:118](https://github.com/ethereumjs/ethereumjs-vm/blob/master/packages/trie/src/baseTrie.ts#L118)*

Stores a given `value` at the given `key`.

**Parameters:**

Name | Type |
------ | ------ |
`key` | Buffer |
`value` | Buffer |

**Returns:** *Promise‹void›*

A Promise that resolves once value is stored.

___

###  revert

▸ **revert**(): *Promise‹void›*

*Defined in [checkpointTrie.ts:50](https://github.com/ethereumjs/ethereumjs-vm/blob/master/packages/trie/src/checkpointTrie.ts#L50)*

Reverts the trie to the state it was at when `checkpoint` was first called.
If during a nested checkpoint, sets root to most recent checkpoint, and sets
parent checkpoint as current.

**Returns:** *Promise‹void›*

___

###  walkTrie

▸ **walkTrie**(`root`: Buffer, `onFound`: [FoundNodeFunction](../modules/_basetrie_.md#foundnodefunction)): *Promise‹void›*

*Inherited from [Trie](_basetrie_.trie.md).[walkTrie](_basetrie_.trie.md#walktrie)*

*Defined in [baseTrie.ts:220](https://github.com/ethereumjs/ethereumjs-vm/blob/master/packages/trie/src/baseTrie.ts#L220)*

Walks a trie until finished.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`root` | Buffer | - |
`onFound` | [FoundNodeFunction](../modules/_basetrie_.md#foundnodefunction) | callback to call when a node is found. This schedules new tasks. If no tasks are available, the Promise resolves. |

**Returns:** *Promise‹void›*

Resolves when finished walking trie.

___

### `Static` createProof

▸ **createProof**(`trie`: [Trie](_basetrie_.trie.md), `key`: Buffer): *Promise‹[Proof](../modules/_basetrie_.md#proof)›*

*Inherited from [Trie](_basetrie_.trie.md).[createProof](_basetrie_.trie.md#static-createproof)*

*Defined in [baseTrie.ts:649](https://github.com/ethereumjs/ethereumjs-vm/blob/master/packages/trie/src/baseTrie.ts#L649)*

Creates a proof from a trie and key that can be verified using [Trie.verifyProof](_basetrie_.trie.md#static-verifyproof).

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`trie` | [Trie](_basetrie_.trie.md) | - |
`key` | Buffer |   |

**Returns:** *Promise‹[Proof](../modules/_basetrie_.md#proof)›*

___

### `Static` fromProof

▸ **fromProof**(`proof`: [Proof](../modules/_basetrie_.md#proof), `trie?`: [Trie](_basetrie_.trie.md)): *Promise‹[Trie](_basetrie_.trie.md)›*

*Inherited from [Trie](_basetrie_.trie.md).[fromProof](_basetrie_.trie.md#static-fromproof)*

*Defined in [baseTrie.ts:614](https://github.com/ethereumjs/ethereumjs-vm/blob/master/packages/trie/src/baseTrie.ts#L614)*

Saves the nodes from a proof into the trie. If no trie is provided a new one wil be instantiated.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`proof` | [Proof](../modules/_basetrie_.md#proof) | - |
`trie?` | [Trie](_basetrie_.trie.md) |   |

**Returns:** *Promise‹[Trie](_basetrie_.trie.md)›*

___

### `Static` prove

▸ **prove**(`trie`: [Trie](_basetrie_.trie.md), `key`: Buffer): *Promise‹[Proof](../modules/_basetrie_.md#proof)›*

*Inherited from [Trie](_basetrie_.trie.md).[prove](_basetrie_.trie.md#static-prove)*

*Defined in [baseTrie.ts:640](https://github.com/ethereumjs/ethereumjs-vm/blob/master/packages/trie/src/baseTrie.ts#L640)*

prove has been renamed to [Trie.createProof](_basetrie_.trie.md#static-createproof).

**`deprecated`** 

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`trie` | [Trie](_basetrie_.trie.md) | - |
`key` | Buffer |   |

**Returns:** *Promise‹[Proof](../modules/_basetrie_.md#proof)›*

___

### `Static` verifyProof

▸ **verifyProof**(`rootHash`: Buffer, `key`: Buffer, `proof`: [Proof](../modules/_basetrie_.md#proof)): *Promise‹Buffer | null›*

*Inherited from [Trie](_basetrie_.trie.md).[verifyProof](_basetrie_.trie.md#static-verifyproof)*

*Defined in [baseTrie.ts:665](https://github.com/ethereumjs/ethereumjs-vm/blob/master/packages/trie/src/baseTrie.ts#L665)*

Verifies a proof.

**`throws`** If proof is found to be invalid.

**Parameters:**

Name | Type |
------ | ------ |
`rootHash` | Buffer |
`key` | Buffer |
`proof` | [Proof](../modules/_basetrie_.md#proof) |

**Returns:** *Promise‹Buffer | null›*

The value from the key.
