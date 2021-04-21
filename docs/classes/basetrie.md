[sbr-merkle-patricia-tree](../README.md) / BaseTrie

# Class: BaseTrie

The basic trie interface, use with `import { BaseTrie as Trie } from 'merkle-patricia-tree'`.
In Ethereum applications stick with the [SecureTrie](securetrie.md) overlay.
The API for the base and the secure interface are about the same.

## Hierarchy

* **BaseTrie**

  ↳ [*CheckpointTrie*](checkpointtrie.md)

## Table of contents

### Constructors

- [constructor](basetrie.md#constructor)

### Properties

- [EMPTY\_TRIE\_ROOT](basetrie.md#empty_trie_root)
- [db](basetrie.md#db)

### Accessors

- [isCheckpoint](basetrie.md#ischeckpoint)
- [root](basetrie.md#root)

### Methods

- [batch](basetrie.md#batch)
- [checkRoot](basetrie.md#checkroot)
- [copy](basetrie.md#copy)
- [createReadStream](basetrie.md#createreadstream)
- [del](basetrie.md#del)
- [findPath](basetrie.md#findpath)
- [get](basetrie.md#get)
- [lookupNode](basetrie.md#lookupnode)
- [put](basetrie.md#put)
- [setRoot](basetrie.md#setroot)
- [walkTrie](basetrie.md#walktrie)
- [createProof](basetrie.md#createproof)
- [fromProof](basetrie.md#fromproof)
- [prove](basetrie.md#prove)
- [verifyProof](basetrie.md#verifyproof)

## Constructors

### constructor

\+ **new BaseTrie**(`db?`: ``null`` \| *LevelUp*<AbstractLevelDOWN<any, any\>, AbstractIterator<any, any\>\>, `root?`: *Buffer*): [*BaseTrie*](basetrie.md)

test

#### Parameters:

| Name | Type | Description |
| :------ | :------ | :------ |
| `db?` | ``null`` \| *LevelUp*<AbstractLevelDOWN<any, any\>, AbstractIterator<any, any\>\> | A [levelup](https://github.com/Level/levelup) instance. By default (if the db is `null` or left undefined) creates an in-memory [memdown](https://github.com/Level/memdown) instance. |
| `root?` | *Buffer* | A `Buffer` for the root of a previously stored trie |

**Returns:** [*BaseTrie*](basetrie.md)

Defined in: [baseTrie.ts:47](https://github.com/siliconswampio/sbr-merkle-patricia-tree/blob/master/src/baseTrie.ts#L47)

## Properties

### EMPTY\_TRIE\_ROOT

• **EMPTY\_TRIE\_ROOT**: *Buffer*

The root for an empty trie

Defined in: [baseTrie.ts:45](https://github.com/siliconswampio/sbr-merkle-patricia-tree/blob/master/src/baseTrie.ts#L45)

___

### db

• **db**: *DB*

The backend DB

Defined in: [baseTrie.ts:43](https://github.com/siliconswampio/sbr-merkle-patricia-tree/blob/master/src/baseTrie.ts#L43)

## Accessors

### isCheckpoint

• get **isCheckpoint**(): *boolean*

BaseTrie has no checkpointing so return false

**Returns:** *boolean*

Defined in: [baseTrie.ts:101](https://github.com/siliconswampio/sbr-merkle-patricia-tree/blob/master/src/baseTrie.ts#L101)

___

### root

• get **root**(): *Buffer*

Gets the current root of the `trie`

**Returns:** *Buffer*

Defined in: [baseTrie.ts:71](https://github.com/siliconswampio/sbr-merkle-patricia-tree/blob/master/src/baseTrie.ts#L71)

• set **root**(`value`: *Buffer*): *void*

Sets the current root of the `trie`

#### Parameters:

| Name | Type |
| :------ | :------ |
| `value` | *Buffer* |

**Returns:** *void*

Defined in: [baseTrie.ts:66](https://github.com/siliconswampio/sbr-merkle-patricia-tree/blob/master/src/baseTrie.ts#L66)

## Methods

### batch

▸ **batch**(`ops`: BatchDBOp[]): *Promise*<void\>

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

#### Parameters:

| Name | Type |
| :------ | :------ |
| `ops` | BatchDBOp[] |

**Returns:** *Promise*<void\>

Defined in: [baseTrie.ts:601](https://github.com/siliconswampio/sbr-merkle-patricia-tree/blob/master/src/baseTrie.ts#L601)

___

### checkRoot

▸ **checkRoot**(`root`: *Buffer*): *Promise*<boolean\>

Checks if a given root exists.

#### Parameters:

| Name | Type |
| :------ | :------ |
| `root` | *Buffer* |

**Returns:** *Promise*<boolean\>

Defined in: [baseTrie.ts:93](https://github.com/siliconswampio/sbr-merkle-patricia-tree/blob/master/src/baseTrie.ts#L93)

___

### copy

▸ **copy**(): [*BaseTrie*](basetrie.md)

Creates a new trie backed by the same db.

**Returns:** [*BaseTrie*](basetrie.md)

Defined in: [baseTrie.ts:693](https://github.com/siliconswampio/sbr-merkle-patricia-tree/blob/master/src/baseTrie.ts#L693)

___

### createReadStream

▸ **createReadStream**(): *TrieReadStream*

The `data` event is given an `Object` that has two properties; the `key` and the `value`. Both should be Buffers.

**Returns:** *TrieReadStream*

Returns a [stream](https://nodejs.org/dist/latest-v12.x/docs/api/stream.html#stream_class_stream_readable) of the contents of the `trie`

Defined in: [baseTrie.ts:686](https://github.com/siliconswampio/sbr-merkle-patricia-tree/blob/master/src/baseTrie.ts#L686)

___

### del

▸ **del**(`key`: *Buffer*): *Promise*<void\>

Deletes a value given a `key`.

#### Parameters:

| Name | Type |
| :------ | :------ |
| `key` | *Buffer* |

**Returns:** *Promise*<void\>

A Promise that resolves once value is deleted.

Defined in: [baseTrie.ts:150](https://github.com/siliconswampio/sbr-merkle-patricia-tree/blob/master/src/baseTrie.ts#L150)

___

### findPath

▸ **findPath**(`key`: *Buffer*): *Promise*<Path\>

Tries to find a path to the node for the given key.
It returns a `stack` of nodes to the closest node.

#### Parameters:

| Name | Type | Description |
| :------ | :------ | :------ |
| `key` | *Buffer* | the search key |

**Returns:** *Promise*<Path\>

Defined in: [baseTrie.ts:164](https://github.com/siliconswampio/sbr-merkle-patricia-tree/blob/master/src/baseTrie.ts#L164)

___

### get

▸ **get**(`key`: *Buffer*): *Promise*<``null`` \| Buffer\>

Gets a value given a `key`

#### Parameters:

| Name | Type | Description |
| :------ | :------ | :------ |
| `key` | *Buffer* | the key to search for |

**Returns:** *Promise*<``null`` \| Buffer\>

A Promise that resolves to `Buffer` if a value was found or `null` if no value was found.

Defined in: [baseTrie.ts:110](https://github.com/siliconswampio/sbr-merkle-patricia-tree/blob/master/src/baseTrie.ts#L110)

___

### lookupNode

▸ **lookupNode**(`node`: *Buffer* \| *Buffer*[]): *Promise*<``null`` \| BranchNode \| ExtensionNode \| LeafNode\>

Retrieves a node from db by hash.

#### Parameters:

| Name | Type |
| :------ | :------ |
| `node` | *Buffer* \| *Buffer*[] |

**Returns:** *Promise*<``null`` \| BranchNode \| ExtensionNode \| LeafNode\>

Defined in: [baseTrie.ts:254](https://github.com/siliconswampio/sbr-merkle-patricia-tree/blob/master/src/baseTrie.ts#L254)

___

### put

▸ **put**(`key`: *Buffer*, `value`: *Buffer*): *Promise*<void\>

Stores a given `value` at the given `key`.

#### Parameters:

| Name | Type |
| :------ | :------ |
| `key` | *Buffer* |
| `value` | *Buffer* |

**Returns:** *Promise*<void\>

A Promise that resolves once value is stored.

Defined in: [baseTrie.ts:125](https://github.com/siliconswampio/sbr-merkle-patricia-tree/blob/master/src/baseTrie.ts#L125)

___

### setRoot

▸ **setRoot**(`value?`: *Buffer*): *void*

This method is deprecated.
Please use `Trie.root(value)` instead.

**`deprecated`** 

#### Parameters:

| Name | Type |
| :------ | :------ |
| `value?` | *Buffer* |

**Returns:** *void*

Defined in: [baseTrie.ts:82](https://github.com/siliconswampio/sbr-merkle-patricia-tree/blob/master/src/baseTrie.ts#L82)

___

### walkTrie

▸ **walkTrie**(`root`: *Buffer*, `onFound`: FoundNodeFunction): *Promise*<void\>

Walks a trie until finished.

#### Parameters:

| Name | Type | Description |
| :------ | :------ | :------ |
| `root` | *Buffer* |  |
| `onFound` | FoundNodeFunction | callback to call when a node is found. This schedules new tasks. If no tasks are available, the Promise resolves. |

**Returns:** *Promise*<void\>

Resolves when finished walking trie.

Defined in: [baseTrie.ts:227](https://github.com/siliconswampio/sbr-merkle-patricia-tree/blob/master/src/baseTrie.ts#L227)

___

### createProof

▸ `Static`**createProof**(`trie`: [*BaseTrie*](basetrie.md), `key`: *Buffer*): *Promise*<Proof\>

Creates a proof from a trie and key that can be verified using [[Trie.verifyProof]].

#### Parameters:

| Name | Type |
| :------ | :------ |
| `trie` | [*BaseTrie*](basetrie.md) |
| `key` | *Buffer* |

**Returns:** *Promise*<Proof\>

Defined in: [baseTrie.ts:656](https://github.com/siliconswampio/sbr-merkle-patricia-tree/blob/master/src/baseTrie.ts#L656)

___

### fromProof

▸ `Static`**fromProof**(`proof`: Proof, `trie?`: [*BaseTrie*](basetrie.md)): *Promise*<[*BaseTrie*](basetrie.md)\>

Saves the nodes from a proof into the trie. If no trie is provided a new one wil be instantiated.

#### Parameters:

| Name | Type |
| :------ | :------ |
| `proof` | Proof |
| `trie?` | [*BaseTrie*](basetrie.md) |

**Returns:** *Promise*<[*BaseTrie*](basetrie.md)\>

Defined in: [baseTrie.ts:621](https://github.com/siliconswampio/sbr-merkle-patricia-tree/blob/master/src/baseTrie.ts#L621)

___

### prove

▸ `Static`**prove**(`trie`: [*BaseTrie*](basetrie.md), `key`: *Buffer*): *Promise*<Proof\>

prove has been renamed to [[Trie.createProof]].

**`deprecated`** 

#### Parameters:

| Name | Type |
| :------ | :------ |
| `trie` | [*BaseTrie*](basetrie.md) |
| `key` | *Buffer* |

**Returns:** *Promise*<Proof\>

Defined in: [baseTrie.ts:647](https://github.com/siliconswampio/sbr-merkle-patricia-tree/blob/master/src/baseTrie.ts#L647)

___

### verifyProof

▸ `Static`**verifyProof**(`rootHash`: *Buffer*, `key`: *Buffer*, `proof`: Proof): *Promise*<``null`` \| Buffer\>

Verifies a proof.

**`throws`** If proof is found to be invalid.

#### Parameters:

| Name | Type |
| :------ | :------ |
| `rootHash` | *Buffer* |
| `key` | *Buffer* |
| `proof` | Proof |

**Returns:** *Promise*<``null`` \| Buffer\>

The value from the key.

Defined in: [baseTrie.ts:672](https://github.com/siliconswampio/sbr-merkle-patricia-tree/blob/master/src/baseTrie.ts#L672)
