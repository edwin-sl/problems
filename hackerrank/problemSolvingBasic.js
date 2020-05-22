// <div id="9f2r2r1pi1p-instruction"><p>The&nbsp;directory structure of the system disk partition is represented as a rooted tree. Its&nbsp;<em>n</em>&nbsp;directories are numbered from <em>0</em> to <em>n-1, </em>where&nbsp;the root directory has the number 0. The structure of the tree is defined by a <em>parent</em> array, where <em>parent[i] = j</em> for some directory <em>i</em> means that the directory <em>i</em> is a direct subdirectory of the directory <em>j</em>. Since&nbsp;the root directory does not&nbsp;have a parent it will be represented as <em>parent[0] = -1</em>. Another variable is the array <em>files_size.&nbsp; </em>The value&nbsp;<em>files_size[i]</em> denotes the sum of the sizes in kilobytes of the files located immediately in directory <em>i</em>, excluding its subdirectories. The size of the content of a directory is defined as the size of all files contained in this directory, plus the sum of the size of the content of all its subdirectories. Partition the tree into two smaller ones by cutting one branch so that&nbsp;the sizes of the two resulting directory subtrees are&nbsp;as close&nbsp;as&nbsp;possible.</p>
//
// <p>&nbsp;</p>
//
// <p>Write a function that receives the arrays <em>parent </em>and <em>files_size&nbsp;</em>and returns the absolute difference between the size of the content of the new directories represented by the two subtrees that make this difference minimum.&nbsp;</p>
//
// <p>&nbsp;</p>
//
// <p><strong>Example</strong></p>
//
// <p><em>parent = [-1, 0, 0, 1, 1, 2]</em></p>
//
// <p><em>files_size&nbsp;= [1, 2, 2, 1, 1, 1]</em>&nbsp;</p>
//
// <p>&nbsp;</p>
//
// <p>The structure of the system is shown in the diagram below. The nodes are labeled as <em>&lt;directory&gt;/&lt;file_size&gt;.</em></p>
//
// <p><img height="232" src="https://s3.amazonaws.com/istreet-assets/sNcS08HdAMJiFi6QhPVdnA/balancedfilesystemexample.svg" width="211"></p>
//
//     <p>&nbsp;</p>
//
// <p>Cut the branch between directories&nbsp;1 and 0.</p>
//
// <p>The partition&nbsp;{0, 2, 5} has&nbsp;size <em>files_size[0] +&nbsp;files_size[2]&nbsp;+ files_size[5] = 1 + 2 + 1 = 4</em><em>.</em></p>
//
// <p>The partition&nbsp;{1, 3, 4} has size&nbsp;<em>files_size[1] +&nbsp;files_size[3]&nbsp;+ files_size[4] = 2 + 1 + 1 = 4</em>.</p>
//
// <p>The absolute difference between the size of the two new directories is <em>4 - 4 =&nbsp;0.</em></p>
//
// <p>Since no other partition can have a smaller absolute difference, the final answer is <em>0</em>.</p>
//
// <p><!--<img alt="" src="https://s3.amazonaws.com/istreet-assets/zDXOJS5BShL9qLutAg3vgA/example.png" />--></p>
//
//     <p>&nbsp;</p>
//
// <div class="ps-content-wrapper-v0">
//     <p><strong>Function Description </strong></p>
//
// <p>&nbsp;</p>
//
// <p>Complete the function <em>mostBalancedPartition</em> in the editor below. The function must return an integer.</p>
//
// <p>&nbsp;</p>
//
// <p>The function has the following parameter(s):</p>
//
// <p><em>&nbsp;&nbsp;&nbsp;&nbsp;parent[parent[0], ...parent[n-1]]</em>: an array&nbsp;of integers</p>
//
// <p><em>&nbsp;&nbsp;&nbsp;&nbsp;files_size[files_size[0], ...files_size[n-1]] </em>: an array of integers</p>
//
// <p>&nbsp;</p>
//
// <p class="section-title">Constraints</p>
//
//     <ul>
//     <li><em>2 ≤ n&nbsp;≤ 10<sup>5</sup></em></li>
// <li><em>1 ≤ files_size[i] ≤&nbsp;10<sup>4</sup></em></li>
// <li><em>parent[0] = -1</em></li>
// <li>
// <em>parent[i] &lt; i </em>for<em> 1 ≤ i &lt; n</em>
// </li>
// <li>the depth of each directory is at most 500, where the depth of a directory is the number of parent links you have to follow up from that directory to finally end up in the root directory</li>
// </ul>
//
// <p>&nbsp;</p>
// <!--       <StartOfInputFormat> DO NOT REMOVE THIS LINE-->
//
// <details><summary class="section-title">Input Format Format for Custom Testing</summary>
//
// <div class="collapsable-details">
//     <p>&nbsp;</p>
//
// <p>The first line contains an integer, <em>n</em>.</p>
//
// <p>Each <em>i </em>line of the <em>n</em><em> </em>subsequent lines (where <em>0 ≤ i &lt; n</em>) contains an integer that describes <em>parent[i]</em>.</p>
//
// <p>The next line contains an integer, <em>n</em>.</p>
//
// <p>Each <em>i </em>line of the <em>n</em><em> </em>subsequent lines (where <em>0 ≤ i &lt; n</em>) contains an integer that describes <em>files_size[i]</em>.</p>
//
// <p>&nbsp;</p>
// </div>
// </details>
// <!--        </StartOfInputFormat> DO NOT REMOVE THIS LINE-->
//
// <details open="open"><summary class="section-title">Sample Case 0</summary>
//
// <div class="collapsable-details">
//     <p class="section-title">Sample Input</p>
//
// <pre>4
// -1
// 0
// 1
// 2
// 4
// 1
// 4
// 3
// 4
// </pre>
//
// <p>&nbsp;</p>
//
// <p class="section-title">Sample Output</p>
//
// <pre>2</pre>
//
// <p>&nbsp;</p>
//
// <p class="section-title">Explanation</p>
//
// <p><em>n = 4</em></p>
//
// <p><em>parent = [-1, 0, 1, 2]</em></p>
//
// <p><em>n = 4</em></p>
//
// <p><em>files_size = [1, 4, 3, 4]</em></p>
//
// <p>&nbsp;</p>
//
// <p>The structure of the system is shown in the diagram below.</p>
//
// <p><img height="59" src="https://s3.amazonaws.com/istreet-assets/wkQo2GN3N2hi15jpM0yMQA/balancedfilesystemS0.svg" width="347"></p>
//
//     <p>Cut the branch between directories 1 and 2. This will result in partitions {0, 1} with size <em>1 + 4 = 5</em> and {2, 3} with size <em>3 + 4 = 7.</em> The absolute difference between their sizes is |5 - 7| = 2.</p>
//     <!--<p><img alt="" height="186" src="https://s3.amazonaws.com/istreet-assets/8JBY8FkXMnPLRmeVObwFvA/sample1.png" style="float:left" width="43" /></p>-->
//
//     <p>&nbsp;</p>
// </div>
// </details>
//
// <details open=""><summary class="section-title">Sample Case 1</summary>
//
// <div class="collapsable-details">
//     <p class="section-title">Sample Input</p>
//
// <pre>4
// -1
// 0
// 0
// 0
// 4
// 10
// 11
// 10
// 10
// </pre>
//
// <p>&nbsp;</p>
//
// <p class="section-title">Sample Output</p>
//
// <pre>19</pre>
//
// <p>&nbsp;</p>
//
// <p class="section-title">Explanation</p>
//
// <p><em>n = 4</em></p>
//
// <p><em>parent = [-1, 0, 0, 0]</em></p>
//
// <p><em>n = 4</em></p>
//
// <p><em>files_size = [10, 11, 10, 10]</em></p>
//
// <p>&nbsp;</p>
//
// <p>The structure of the system is shown in the diagram below.</p>
//
// <p><img height="155" src="https://s3.amazonaws.com/istreet-assets/EhpgzqJyt0T2iN8cNb2KkQ/balancedfilesystemS1.svg" width="203"></p>
//
//     <p>&nbsp;</p>
//
// <p>Cut the branch between directories 0 and 1. This will result in partitions {0, 2, 3} with size 10 + 10 + 10 = 30 and {1} with size 11. The absolute difference between their sizes is |30 - 11| = 19.</p>
//     <!--<p><img alt="" height="144" src="https://s3.amazonaws.com/istreet-assets/CigW0-xGAa9yeRMABQP-GA/sample2.png" width="239" /></p>-->
//     </div>
//     </details>
//     </div>
//     <style type="text/css"><p><em>1 ≤ |source| ≤ 10^6 </em></p>.ps-content-wrapper-v0 div { margin: 0 auto; overflow: auto; } .ps-content-wrapper-v0 div.preheader { display: none; } .ps-content-wrapper-v0 p { white-space: pre-wrap; padding-left: 4px; padding-right: 4px; padding-top: 0px; padding-bottom: 2px; } .ps-content-wrapper-v0 p.section-title { font-weight: bold; padding-bottom: 0px; } .ps-content-wrapper-v0 ol.plain-list, .ps-content-wrapper-v0 ul.plain-list { list-style-type: none; padding: 4px; } .ps-content-wrapper-v0 li { white-space: normal; margin-top: 4px; margin-bottom: 4px; } .ps-content-wrapper-v0 code { color: black; } .ps-content-wrapper-v0 pre { background-color: #f4faff; border: 0; border-radius: 2px; margin: 8px; padding: 10px; } .ps-content-wrapper-v0 figure { background-color: transparent; display: table; margin-top: 8px; margin-bottom: 8px; text-align: center; margin-left: auto; margin-right: auto; } .ps-content-wrapper-v0 figcaption { text-align: center; display: table-caption; caption-side: bottom; margin-top: 4px; margin-bottom: 4px; } .ps-content-wrapper-v0 img { width: auto; max-width: 100%; height: auto; } .ps-content-wrapper-v0 details { background-color: transparent; padding-left: 4px; padding-right: 4px; padding-top: 0px; padding-bottom: 2px; } .ps-content-wrapper-v0 details summary { background-color: #39424e; color: white; font-weight: bold; margin-top: 4px; margin-bottom: 4px; padding: 8px; } .ps-content-wrapper-v0 details div.collapsable-details { margin: 0 auto; padding-left: 4px; padding-right: 4px; padding-top: 0px; padding-bottom: 2px; overflow: auto; } .ps-content-wrapper-v0 details div.collapsable-details pre { margin-left: 4px; margin-right: 4px; margin-top: 4px; margin-bottom: 4px; } .ps-content-wrapper-v0 table { border: 1px solid black; border-collapse: collapse; border-color: darkgray; margin: 0 auto; margin-top: 8px; margin-bottom: 8px; padding: 8px; width: 96%; table-layout: fixed; } .ps-content-wrapper-v0 table tbody tr th, .ps-content-wrapper-v0 table tbody tr td { font-weight: bold; white-space: nowrap; text-align: center; vertical-align: middle; border: 1px solid black; border-color: darkgray; padding: 8px; } .ps-content-wrapper-v0 table tbody tr th.description { width: 60%; } .ps-content-wrapper-v0 table tbody tr td { font-weight: normal; white-space: normal; } .ps-content-wrapper-v0 table.function-params tbody tr:first-child td.headers { border-bottom-width: 2px; } .ps-content-wrapper-v0 table.function-params tbody tr:last-child td { border-top-width: 2px; border-top-color: darkgray; } .ps-content-wrapper-v0 table.function-params tbody tr td.headers { width: 25%; font-weight: bold; text-align: center; border: 1px solid black; border-right-width: 2px; border-color: darkgray; } .ps-content-wrapper-v0 table.function-params tbody tr td.params-table-cell { width: 100%; height: 100%; padding: 0px; } .ps-content-wrapper-v0 table.function-params tbody tr td.params-table-cell table.params-table { width: 100%; height: 100%; padding: 0px; margin: 0px; border: 0; } .ps-content-wrapper-v0 table.function-params tbody tr td.params-table-cell table.params-table tbody tr td.code { white-space: normal; } .ps-content-wrapper-v0 table.function-params tbody tr td.params-table-cell table.params-table tbody tr th { border-top: 0; } .ps-content-wrapper-v0 table.function-params tbody tr td.params-table-cell table.params-table tbody tr th:first-child { border-left: 0; } .ps-content-wrapper-v0 table.function-params tbody tr td.params-table-cell table.params-table tbody tr th:last-child { border-right: 0; } .ps-content-wrapper-v0 table.function-params tbody tr td.params-table-cell table.params-table tbody tr:last-child td { border-bottom: 0; border-top-width: 1px; } .ps-content-wrapper-v0 table.function-params tbody tr td.params-table-cell table.params-table tbody tr td:first-child { border-left: 0; } .ps-content-wrapper-v0 table.function-params tbody tr td.params-table-cell table.params-table tbody tr td:last-child { border-right: 0; } .ps-content-wrapper-v0 .left { text-align: left; } .ps-content-wrapper-v0 .right { text-align: right; } .ps-content-wrapper-v0 .code { font-family: monospace; white-space: nowrap; } .ps-content-wrapper-v0 .json-object-array ol, .ps-content-wrapper-v0 .json-object-array ol ul { margin-top: 0px; padding-left: 14px; } .json-object-array li { float: left; margin-right: 30px; margin-left: 10px; } .json-object-array pre { padding: 4px; margin-left: 0px; }
// </style>
// </div>

'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}


/*
 * Complete the 'mostBalancedPartition' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY parent
 *  2. INTEGER_ARRAY files_size
 */

function mostBalancedPartition(parent, files_size) {
    // Write your code here
    const totalSize = files_size.reduce((ac, curr) => ac + curr, 0)
    const tree = createTree(parent, files_size)

    let idealPartition = totalSize / 2

    console.log('SIZE-> ', totalSize)
    console.log('TREE-> ', tree)
}

function deepAccumulate(tree, node, currSize, idealSize) {
    if (node.branch.length === 0){
        return node.size
    }
    for (let b of node.branch) {
        let tempSize = deepAccumulate(tree, tree[b], currSize, idealSize)

    }
}

function createTree(parents, sizes) {
    let tree = {}
    for (let i = 0; i < parents.length; i++) {
        let currNode = {
            branch: [],
            size: sizes[i]
        }
        let parentNode = {
            branch: [],
            size: 0
        }
        if(!tree[i]) tree[i] = currNode
        currNode = tree[i]
        if(!tree[parents[i]]) tree[parents[i]] = parentNode
        parentNode = tree[parents[i]]
        parentNode.branch.push(i)
    }
    return tree
}
function main() {






// <div id="5palj0hqp8b-instruction"><style type="text/css">.ps-content-wrapper-v0 div { margin: 0 auto; overflow: auto; } .ps-content-wrapper-v0 div.preheader { display: none; } .ps-content-wrapper-v0 p { white-space: pre-wrap; padding-left: 4px; padding-right: 4px; padding-top: 0px; padding-bottom: 2px; } .ps-content-wrapper-v0 p.section-title { font-weight: bold; padding-bottom: 0px; } .ps-content-wrapper-v0 ol.plain-list, .ps-content-wrapper-v0 ul.plain-list { list-style-type: none; padding: 4px; } .ps-content-wrapper-v0 li { white-space: normal; margin-top: 4px; margin-bottom: 4px; } .ps-content-wrapper-v0 code { color: black; } .ps-content-wrapper-v0 pre { background-color: #f4faff; border: 0; border-radius: 2px; margin: 8px; padding: 10px; } .ps-content-wrapper-v0 pre.scrollable-full-json { overflow-x: scroll; white-space: pre; } .ps-content-wrapper-v0 pre.scrollable-json { height: 300px; overflow-y: scroll; display: inline-grid; white-space: pre-wrap; padding-left: 8px; padding-right: 8px; padding-top: 4px; padding-bottom: 4px; } .ps-content-wrapper-v0 div.equation-parent { width: 400px; text-align: center; border: 1px solid #000; padding: 8px; } .ps-content-wrapper-v0 div.equation-parent.equation { width: 100%; display: inline-block; } .ps-content-wrapper-v0 figure { background-color: transparent; display: table; margin-top: 8px; margin-bottom: 8px; text-align: center; margin-left: auto; margin-right: auto; } .ps-content-wrapper-v0 figcaption { text-align: center; display: table-caption; caption-side: bottom; margin-top: 4px; margin-bottom: 4px; } .ps-content-wrapper-v0 img { width: auto; max-width: 100%; height: auto; } .ps-content-wrapper-v0 details { background-color: transparent; padding-left: 4px; padding-right: 4px; padding-top: 0px; padding-bottom: 2px; } .ps-content-wrapper-v0 details details { padding-left: 8px; padding-right: 8px; } .ps-content-wrapper-v0 details summary { background-color: #39424e; color: white; font-weight: bold; margin-top: 4px; margin-bottom: 4px; padding: 8px; } .ps-content-wrapper-v0 details details summary code { color: black; font-weight: bold; padding-left: 2px; padding-right: 2px; padding-top: 4px; padding-right: 4px; margin-left: 4px; } .ps-content-wrapper-v0 details div.collapsable-details { margin: 0 auto; padding-left: 4px; padding-right: 4px; padding-top: 0px; padding-bottom: 2px; overflow: auto; } .ps-content-wrapper-v0 details div.collapsable-details pre { margin-left: 4px; margin-right: 4px; margin-top: 4px; margin-bottom: 4px; } .ps-content-wrapper-v0 table.normal { border: 1px solid black; border-collapse: collapse; border-color: darkgray; margin: 0 auto; margin-top: 8px; margin-bottom: 8px; padding: 8px; width: 96%; table-layout: fixed; } .ps-content-wrapper-v0 table.normal tbody { display: block; overflow-x: auto; overflow-y: hidden; } .ps-content-wrapper-v0 table.normal tbody tr:first-child th { font-weight: bold; white-space: normal; } .ps-content-wrapper-v0 table.normal tbody tr th, .ps-content-wrapper-v0 table.normal tbody tr td { font-weight: normal; white-space: nowrap; text-align: center; vertical-align: middle; border: 1px solid black; border-color: darkgray; padding: 8px; } .ps-content-wrapper-v0 table.database-table { border-collapse: collapse; border-color: darkgray; border: 1px solid black; width: auto; margin-left: 4px; margin-top: 8px; margin-bottom: 8px; padding: 8px; } .ps-content-wrapper-v0 table.database-table tbody { overflow-x: auto; overflow-y: hidden; border: none; } .ps-content-wrapper-v0 table.database-table tbody tr th, .ps-content-wrapper-v0 table.database-table tbody tr td { font-weight: normal; white-space: nowrap; text-align: center; vertical-align: middle; border: 1px solid black; border-color: darkgray; padding: 8px; } .ps-content-wrapper-v0 table.database-table tbody tr th { font-weight: bold; border: 1px solid black; } .ps-content-wrapper-v0 table.database-table tbody tr:nth-child(2) td { border: 1px solid black; } .ps-content-wrapper-v0 table.database-table tbody tr:nth-child(n+2) td:first-child { border-left-color: black; } .ps-content-wrapper-v0 table.database-table tbody tr:nth-child(n+2) td:last-child { border-right-color: black; } .ps-content-wrapper-v0 table.database-table tbody tr:last-child td { border-bottom-color: black; } .ps-content-wrapper-v0 table.database-table tbody tr td.description { text-align: left; white-space: pre-wrap; } .ps-content-wrapper-v0 table.normal tbody tr th.description { width: 60%; } .ps-content-wrapper-v0 table.function-params tbody tr:first-child td.headers { border-bottom-width: 2px; } .ps-content-wrapper-v0 table.function-params tbody tr:last-child td { border-top-width: 2px; border-top-color: darkgray; } .ps-content-wrapper-v0 table.function-params tbody tr td.headers { width: 25%; font-weight: bold; text-align: center; border: 1px solid black; border-right-width: 2px; border-color: darkgray; } .ps-content-wrapper-v0 table.function-params tbody tr td.params-table-cell { width: 100%; height: 100%; padding: 0px; } .ps-content-wrapper-v0 table.function-params tbody tr td.params-table-cell table.params-table { width: 100%; height: 100%; padding: 0px; margin: 0px; border: 0; } .ps-content-wrapper-v0 table.function-params tbody tr td.params-table-cell table.params-table tbody tr td.code { white-space: normal; } .ps-content-wrapper-v0 table.function-params tbody tr td.params-table-cell table.params-table tbody tr th { border-top: 0; } .ps-content-wrapper-v0 table.function-params tbody tr td.params-table-cell table.params-table tbody tr th:first-child { border-left: 0; } .ps-content-wrapper-v0 table.function-params tbody tr td.params-table-cell table.params-table tbody tr th:last-child { border-right: 0; } .ps-content-wrapper-v0 table.function-params tbody tr td.params-table-cell table.params-table tbody tr:last-child td { border-bottom: 0; border-top-width: 1px; } .ps-content-wrapper-v0 table.function-params tbody tr td.params-table-cell table.params-table tbody tr td:first-child { border-left: 0; } .ps-content-wrapper-v0 table.function-params tbody tr td.params-table-cell table.params-table tbody tr td:last-child { border-right: 0; } .ps-content-wrapper-v0 table.sudoku { border-collapse: collapse; border-color: darkgray; margin: 0 auto; margin-top: 8px; margin-bottom: 8px; padding: 8px; } .ps-content-wrapper-v0 table.sudoku colgroup, tbody { border: 3px solid black; } .ps-content-wrapper-v0 table.sudoku td { border: 1px solid black; height: 25px; width: 25px; text-align: center; padding: 0; } .ps-content-wrapper-v0 .left { text-align: left; } .ps-content-wrapper-v0 .right { text-align: right; } .ps-content-wrapper-v0 .code { font-family: monospace; white-space: nowrap; } .ps-content-wrapper-v0 .json-object-array ol, .ps-content-wrapper-v0 .json-object-array ol ul { margin-top: 0px; padding-left: 14px; } .json-object-array li { float: left; margin-right: 30px; margin-left: 10px; } .json-object-array pre { padding: 4px; margin-left: 0px; }
// </style>
// <div class="ps-content-wrapper-v0">
//     <!--<p><s>There are <em>n</em>&nbsp;students in a school of Alexaland. They have recently given their Mathematics Examination and each student will be happy if he/she receives an exactly <em>marks<sub>i </sub></em>score. The teacher has <em>k</em> marks with her. She wants to make the maximum number of students happy by giving them the score exactly equal to <em>marks<sub>i</sub>. </em>Also, she wants to distribute all the <em>k</em>&nbsp;marks to all the <em>n</em>&nbsp; students.</s></p>
//
// <p>&nbsp;</p>
//
// <p><s>Help her in calculating the maximum possible number of happy children.</s></p>
//
// <p>&nbsp;</p>
//
// <p><s><em>For example,&nbsp;</em></s></p>
//
// <p><s><em>Given: n = 3, k=20</em></s></p>
//
// <p><s><em>marks[] = { 10,20,5}</em></s></p>
//
//     <p><s><em>Maximum number of happy students = 2&nbsp;</em></s></p>
//
// <p><s><em>Possible score distribution = {10,5,5}</em></s></p>
//
//     <p><s><em>Note: It is possible that some students get zero scores as well.</em></s></p>
//
// <p>&nbsp;</p>
// -->
// <p>A widget manufacturer is facing unexpectedly high demand for its new product,. They would like to satisfy as many customers as possible. Given a number of widgets available and a list of customer orders, what is the maximum number of orders the manufacturer can fulfill in full?</p>
//
// <p>&nbsp;</p>
//
// <p class="section-title">Function Description</p>
//
// <p>Complete the function <em>filledOrders</em> in the editor below. The function must return a single integer denoting the maximum possible number of fulfilled orders.</p>
//
// <p>&nbsp;</p>
//
// <p><em>filledOrders</em> has the following parameter(s):</p>
//
// <p><em>&nbsp;&nbsp;&nbsp;&nbsp;order :</em>&nbsp; an array of integers listing the orders</p>
//
// <p><em>&nbsp;&nbsp;&nbsp;&nbsp;k : </em>an integer denoting widgets available for shipment</p>
//
// <p>&nbsp;</p>
//
// <p class="section-title">Constraints</p>
//
//     <ul>
//     <li><em>1&nbsp;≤ n&nbsp;≤ &nbsp;2 x 10<sup>5</sup></em></li>
// <li><em>1&nbsp;≤&nbsp; order[i]&nbsp;≤ &nbsp;10<sup>9</sup></em></li>
// <li><em>1&nbsp;≤ k&nbsp;≤ 10<sup>9</sup></em></li>
// </ul>
//
// <p>&nbsp;</p>
// <!-- <StartOfInputFormat> DO NOT REMOVE THIS LINE-->
//
// <details><summary class="section-title">Input Format For Custom Testing</summary>
//
// <div class="collapsable-details">
//     <p>The first line contains an integer, <em>n</em>, denoting the number of orders.<br>
// Each line <em>i</em> of the <em>n</em> subsequent lines contains an integer<em> order[i]</em>.</p>
//
// <p>Next line contains a single integer <em>k</em>&nbsp;denoting the widgets available.</p>
// </div>
// </details>
// <!-- </StartOfInputFormat> DO NOT REMOVE THIS LINE-->
//
// <details open="open"><summary class="section-title">Sample Case 0</summary>
//
// <div class="collapsable-details">
//     <p class="section-title">Sample Input For Custom Testing</p>
//
// <pre>2
// 10
// 30
// 40</pre>
//
// <p class="section-title">Sample Output</p>
//
// <pre>2</pre>
//
// <p class="section-title">Explanation</p>
//
//     <p><em>order</em> = [10,30] with 40 widgets available. Both orders can be fulfilled.</p>
// </div>
// </details>
//
// <details open=""><summary class="section-title">Sample Case 1</summary>
//
// <div class="collapsable-details">
//     <p class="section-title">Sample Input For Custom Testing</p>
//
// <pre>3
// 5
// 4
// 6
// 3
// </pre>
//
// <p class="section-title">Sample Output</p>
//
// <pre>0</pre>
//
// <p class="section-title">Explanation</p>
//
//     <p><em>order</em> = [5,4,6] with 3 widgets available</p>
//
// <p>None of the orders can be fulfilled.</p>
// </div>
// </details>
// </div>
// </div>
'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}



/*
 * Complete the 'filledOrders' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY order
 *  2. INTEGER k
 */

function filledOrders(order, k) {
    // Write your code here
    let sortedOrder = order.sort((a, b) => a - b)
    console.log('SORTED-> ', sortedOrder)
    let possible = 0
    for (let o of sortedOrder) {
        k-=o
        if(k >= 0) possible++
        else break
    }
    return possible
}

function main() {
