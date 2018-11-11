# Binary search tree

> In computer science, binary search trees (BST), sometimes called ordered or sorted binary trees, are a particular type of container: data structures that store "items" (such as numbers, names etc.) in memory. 
By https://en.wikipedia.org/wiki/Binary_search_tree

The library was written in Typescript provides a binary tree data structure for storing or searching data. 

#### Install
```bash
npm i bst-lib
```
#### Example
Define and instantiate some mock objects.
```javascript
    class Mock {
    	constructor(
    		public id: number,
    		public value: string
    	) { }
    }
	
var mockA = new Mock(1, 'MockA');
var mockB = new Mock(2, 'MockB');
var mockC = new Mock(3, 'MockC');
var mockD = new Mock(4, 'MockD');
var mockE = new Mock(5, 'MockE');
    
```

Instantiate a Bst with type 'Mock'
```Javscript
	var bst = new Bst<Mock>()
	
```
Insert mock object into bst

```Javscript
bst.insert(mockA.id, mockA);
bst.insert(mockC.id, mockC);
bst.insert(mockB.id, mockB);
bst.insert(mockE.id, mockE);
bst.insert(mockD.id, mockD);
```
Print the bst
```
bst.print();
/* Print result
                5
                        4
        3
                2
1
*/
```
#### Properties
##### BstNode
| Name  | Description  |
| ------------ | ------------ |
| `id: string I number`  | The id of bst node. The searching relies on comparing the value of id  |
| `data: T`  | Store the data with generic type  |
| `left: Bst<T>()`  | The left child node of this node  |
| `right: Bst<T>()` | The right child node of this node   |
##### Bst
| Name  | Description  |
| ------------ | ------------ |
| `private root: BstNode<T> = null`  | Point to a BstNode if not null  |


#### Methods
|  Name |  Description |
| ------------ | ------------ |
| `isEmpty(): boolean` | Whether the node is Bst point to null  |
| `isContains(id: string I number): boolean`  | Whether the bst contain data with target id  |
| `getMaxId(): number I string I null`   | Find the largest id  |
| `getMinId(): number I string I null`   | Find the smallest id  |
| `getMaxData() :T`  | Find the data with largest id  |
| `getMinData() :T` |  Find the data with smallest id |
| `searchDataById(id: number I string): T I null` | Find the data by target id. Return null if not found  |
| `print(depth: number = 0)`  | Print the tree in horizontally. (root on left and leafs on right)  |
| `insert(id: string I number, data: T)` | Insert data into bst by inputting id of the data and data itself  |
| `remove(id: string I number)` | Remove the data by id  |

