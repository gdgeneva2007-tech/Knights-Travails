class Node{
    constructor(position,before){
        this.position=position;
        this.before=before;
    }
}
function generateAll(node){
    let x=node.position[0];
    let y=node.position[1];
    let arr=[];
    arr.push(new Node([x-1,y+2],node));
    arr.push(new Node([x+1,y+2],node));
    arr.push(new Node([x+2,y+1],node));
    arr.push(new Node([x+2,y-1],node));
    arr.push(new Node([x+1,y-2],node));
    arr.push(new Node([x-1,y-2],node));
    arr.push(new Node([x-2,y-1],node));
    arr.push(new Node([x-2,y+1],node));
    let newArr=arr.filter((element)=>{
        return element.position[0]>=0 && element.position[0]<=7 && element.position[1]>=0 && element.position[1]<=7;
    });
    return newArr;
}
function unvisited(visited,node){
    if(visited.has(node.position.toString())){
        return false;
    }
    return true;
}
function knightMoves(start,end){   
    let startNode=new Node(start,null);
    let queue=[startNode];
    const visited=new Set();
    visited.add(start.toString());
    let path=[];
    let removedNode;
    while(queue.length){
        removedNode=queue.shift();
        // visited.push(removedNode);
        if(removedNode.position[0]===end[0]&&removedNode.position[1]===end[1]){
            break;  //found.to continue
        }
        let generated=generateAll(removedNode).filter((element)=>{return unvisited(visited,element)});
        generated.forEach((element)=>{queue.push(element);visited.add(element.position.toString());});
    }
    let cur=removedNode;
    while(cur!==null){
        path.unshift(cur.position);
        cur=cur.before;
    }
    return path;
}
console.log(knightMoves([3,3],[0,0]));
console.log(knightMoves([0,0],[3,3]));
console.log(knightMoves([0,0],[7,7]));